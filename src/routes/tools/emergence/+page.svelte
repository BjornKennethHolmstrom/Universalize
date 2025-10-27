<!-- src/routes/tools/emergence/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // Simulation state
  let activeSimulation: string | null = $state('conway');
  let isRunning = $state(false);
  let speed = $state(100); // ms per frame
  
  // Canvas references
  let conwayCanvas: HTMLCanvasElement;
  let flockingCanvas: HTMLCanvasElement;
  let sandpileCanvas: HTMLCanvasElement;
  
  // Simulation objects
  let conwayCtx: CanvasRenderingContext2D | null = null;
  let flockingCtx: CanvasRenderingContext2D | null = null;
  let sandpileCtx: CanvasRenderingContext2D | null = null;
  
  let conwayInterval: number | null = null;
  let flockingInterval: number | null = null;
  
  // Conway's Game of Life state
  const conwaySize = 80;
  let conwayGrid: boolean[][] = [];
  let conwayNextGrid: boolean[][] = [];
  
  // Flocking simulation state
  interface Boid {
    x: number;
    y: number;
    vx: number;
    vy: number;
  }
  let boids: Boid[] = [];
  const numBoids = 100;
  const visualRange = 50;
  const avoidRange = 15;
  const matchingFactor = 0.05;
  const centeringFactor = 0.0005;
  const avoidFactor = 0.05;
  const maxSpeed = 3;
  
  // Sandpile state
  const sandpileSize = 60;
  let sandpile: number[][] = [];
  
  const simulations = $derived([
    {
      id: 'conway',
      name: $t('emergence.simulations.conway.name'),
      icon: '🟦',
      description: $t('emergence.simulations.conway.description'),
      emergence: $t('emergence.simulations.conway.emergence'),
      color: 'blue'
    },
    {
      id: 'flocking',
      name: $t('emergence.simulations.flocking.name'),
      icon: '🦅',
      description: $t('emergence.simulations.flocking.description'),
      emergence: $t('emergence.simulations.flocking.emergence'),
      color: 'purple'
    },
    {
      id: 'sandpile',
      name: $t('emergence.simulations.sandpile.name'),
      icon: '⛰️',
      description: $t('emergence.simulations.sandpile.description'),
      emergence: $t('emergence.simulations.sandpile.emergence'),
      color: 'yellow'
    }
  ]);
  
  // Initialize Conway's Game of Life
  function initConway() {
    conwayGrid = Array(conwaySize).fill(null).map(() => 
      Array(conwaySize).fill(null).map(() => Math.random() > 0.7)
    );
    conwayNextGrid = Array(conwaySize).fill(null).map(() => Array(conwaySize).fill(false));
  }
  
  function drawConway() {
    if (!conwayCtx || !conwayCanvas) return;
    
    const cellSize = conwayCanvas.width / conwaySize;
    conwayCtx.clearRect(0, 0, conwayCanvas.width, conwayCanvas.height);
    
    for (let i = 0; i < conwaySize; i++) {
      for (let j = 0; j < conwaySize; j++) {
        if (conwayGrid[i][j]) {
          conwayCtx.fillStyle = '#60a5fa';
          conwayCtx.fillRect(j * cellSize, i * cellSize, cellSize - 1, cellSize - 1);
        }
      }
    }
  }
  
  function stepConway() {
    for (let i = 0; i < conwaySize; i++) {
      for (let j = 0; j < conwaySize; j++) {
        let neighbors = 0;
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            if (di === 0 && dj === 0) continue;
            const ni = (i + di + conwaySize) % conwaySize;
            const nj = (j + dj + conwaySize) % conwaySize;
            if (conwayGrid[ni][nj]) neighbors++;
          }
        }
        
        if (conwayGrid[i][j]) {
          conwayNextGrid[i][j] = neighbors === 2 || neighbors === 3;
        } else {
          conwayNextGrid[i][j] = neighbors === 3;
        }
      }
    }
    
    [conwayGrid, conwayNextGrid] = [conwayNextGrid, conwayGrid];
    drawConway();
  }
  
  // Initialize flocking simulation
  function initFlocking() {
    boids = Array(numBoids).fill(null).map(() => ({
      x: Math.random() * (flockingCanvas?.width || 600),
      y: Math.random() * (flockingCanvas?.height || 400),
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1
    }));
  }
  
  function drawFlocking() {
    if (!flockingCtx || !flockingCanvas) return;
    
    flockingCtx.fillStyle = 'rgba(15, 23, 42, 0.1)';
    flockingCtx.fillRect(0, 0, flockingCanvas.width, flockingCanvas.height);
    
    boids.forEach(boid => {
      flockingCtx!.fillStyle = '#a78bfa';
      flockingCtx!.beginPath();
      flockingCtx!.arc(boid.x, boid.y, 3, 0, Math.PI * 2);
      flockingCtx!.fill();
      
      // Draw velocity line
      flockingCtx!.strokeStyle = '#a78bfa80';
      flockingCtx!.beginPath();
      flockingCtx!.moveTo(boid.x, boid.y);
      flockingCtx!.lineTo(boid.x + boid.vx * 5, boid.y + boid.vy * 5);
      flockingCtx!.stroke();
    });
  }
  
  function stepFlocking() {
    boids.forEach((boid, i) => {
      let centerX = 0, centerY = 0, count = 0;
      let avgVx = 0, avgVy = 0;
      let closeX = 0, closeY = 0;
      
      boids.forEach((other, j) => {
        if (i === j) return;
        
        const dx = other.x - boid.x;
        const dy = other.y - boid.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < visualRange) {
          centerX += other.x;
          centerY += other.y;
          avgVx += other.vx;
          avgVy += other.vy;
          count++;
        }
        
        if (dist < avoidRange) {
          closeX += boid.x - other.x;
          closeY += boid.y - other.y;
        }
      });
      
      if (count > 0) {
        centerX /= count;
        centerY /= count;
        avgVx /= count;
        avgVy /= count;
        
        boid.vx += (centerX - boid.x) * centeringFactor;
        boid.vy += (centerY - boid.y) * centeringFactor;
        boid.vx += (avgVx - boid.vx) * matchingFactor;
        boid.vy += (avgVy - boid.vy) * matchingFactor;
      }
      
      boid.vx += closeX * avoidFactor;
      boid.vy += closeY * avoidFactor;
      
      // Limit speed
      const speed = Math.sqrt(boid.vx * boid.vx + boid.vy * boid.vy);
      if (speed > maxSpeed) {
        boid.vx = (boid.vx / speed) * maxSpeed;
        boid.vy = (boid.vy / speed) * maxSpeed;
      }
      
      // Update position with wrapping
      boid.x = (boid.x + boid.vx + (flockingCanvas?.width || 600)) % (flockingCanvas?.width || 600);
      boid.y = (boid.y + boid.vy + (flockingCanvas?.height || 400)) % (flockingCanvas?.height || 400);
    });
    
    drawFlocking();
  }
  
  // Initialize sandpile
  function initSandpile() {
    sandpile = Array(sandpileSize).fill(null).map(() => Array(sandpileSize).fill(0));
  }
  
  function drawSandpile() {
    if (!sandpileCtx || !sandpileCanvas) return;
    
    const cellSize = sandpileCanvas.width / sandpileSize;
    sandpileCtx.clearRect(0, 0, sandpileCanvas.width, sandpileCanvas.height);
    
    const colors = ['#1e293b', '#fef08a', '#fb923c', '#dc2626'];
    
    for (let i = 0; i < sandpileSize; i++) {
      for (let j = 0; j < sandpileSize; j++) {
        const value = Math.min(sandpile[i][j], 3);
        sandpileCtx.fillStyle = colors[value];
        sandpileCtx.fillRect(j * cellSize, i * cellSize, cellSize - 1, cellSize - 1);
      }
    }
  }
  
  function addSand() {
    const centerI = Math.floor(sandpileSize / 2);
    const centerJ = Math.floor(sandpileSize / 2);
    sandpile[centerI][centerJ]++;
    topple();
    drawSandpile();
  }
  
  function topple() {
    let unstable = true;
    while (unstable) {
      unstable = false;
      for (let i = 0; i < sandpileSize; i++) {
        for (let j = 0; j < sandpileSize; j++) {
          if (sandpile[i][j] >= 4) {
            unstable = true;
            sandpile[i][j] -= 4;
            if (i > 0) sandpile[i-1][j]++;
            if (i < sandpileSize - 1) sandpile[i+1][j]++;
            if (j > 0) sandpile[i][j-1]++;
            if (j < sandpileSize - 1) sandpile[i][j+1]++;
          }
        }
      }
    }
  }
  
  function selectSimulation(id: string) {
    stopSimulation();
    activeSimulation = id;
    
    setTimeout(() => {
      if (id === 'conway' && conwayCanvas) {
        conwayCtx = conwayCanvas.getContext('2d');
        initConway();
        drawConway();
      } else if (id === 'flocking' && flockingCanvas) {
        flockingCtx = flockingCanvas.getContext('2d');
        flockingCtx.fillStyle = '#0f172a';
        flockingCtx.fillRect(0, 0, flockingCanvas.width, flockingCanvas.height);
        initFlocking();
        drawFlocking();
      } else if (id === 'sandpile' && sandpileCanvas) {
        sandpileCtx = sandpileCanvas.getContext('2d');
        initSandpile();
        drawSandpile();
      }
    }, 10);
  }
  
  function startSimulation() {
    if (isRunning) return;
    isRunning = true;
    
    if (activeSimulation === 'conway') {
      conwayInterval = window.setInterval(stepConway, speed);
    } else if (activeSimulation === 'flocking') {
      flockingInterval = window.setInterval(stepFlocking, 50);
    }
  }
  
  function stopSimulation() {
    isRunning = false;
    if (conwayInterval) clearInterval(conwayInterval);
    if (flockingInterval) clearInterval(flockingInterval);
    conwayInterval = null;
    flockingInterval = null;
  }
  
  function resetSimulation() {
    stopSimulation();
    if (activeSimulation) {
      selectSimulation(activeSimulation);
    }
  }
  
  onMount(() => {
    selectSimulation('conway');
  });
  
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-300',
      hover: 'hover:border-blue-400'
    },
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-300',
      hover: 'hover:border-purple-400'
    },
    yellow: {
      border: 'border-yellow-500',
      text: 'text-yellow-300',
      hover: 'hover:border-yellow-400'
    }
  };
</script>

<SEO
  title={$t('toolsPage.tools.emergence.title')}
  description={$t('toolsPage.tools.emergence.description')}
  keywords="emergence, cellular automata, complex systems, self-organization, patterns"
  image="/tools/emergence-preview.jpg"
/>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🌀</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('emergence.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('emergence.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('emergence.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('emergence.intro.paragraph1')}</p>
      <p>{$t('emergence.intro.paragraph2')}</p>
      <p>{$t('emergence.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Simulation Selection -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('emergence.simulations.title')}</h2>
    
    <div class="mb-8 grid gap-6 md:grid-cols-3">
      {#each simulations as sim}
        {@const colors = colorClasses[sim.color]}
        <button
          onclick={() => selectSimulation(sim.id)}
          class="rounded-xl border p-6 text-left transition
            {activeSimulation === sim.id 
              ? `${colors.border} bg-slate-800 shadow-xl` 
              : 'border-slate-700 bg-slate-900/50 hover:bg-slate-800'
            }"
        >
          <div class="mb-4 text-5xl">{sim.icon}</div>
          <h3 class="mb-3 text-2xl font-bold {colors.text}">
            {sim.name}
          </h3>
          <p class="mb-4 text-sm leading-relaxed text-slate-300">
            {sim.description}
          </p>
          <div class="border-t border-slate-700 pt-3 text-xs text-slate-400">
            <strong class="text-slate-300">{$t('emergence.emergence')}:</strong> {sim.emergence}
          </div>
        </button>
      {/each}
    </div>
    
    <!-- Canvas Container -->
    <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-xl font-bold text-white">
          {simulations.find(s => s.id === activeSimulation)?.name}
        </h3>
        
        <div class="flex gap-2">
          {#if activeSimulation !== 'sandpile'}
            <button
              onclick={isRunning ? stopSimulation : startSimulation}
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              {isRunning ? $t('emergence.controls.pause') : $t('emergence.controls.start')}
            </button>
          {/if}
          
          {#if activeSimulation === 'sandpile'}
            <button
              onclick={addSand}
              class="rounded-lg bg-yellow-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-500"
            >
              {$t('emergence.controls.addSand')}
            </button>
          {/if}
          
          <button
            onclick={resetSimulation}
            class="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            {$t('emergence.controls.reset')}
          </button>
        </div>
      </div>
      
      <div class="flex justify-center rounded-lg bg-slate-950 p-4">
        {#if activeSimulation === 'conway'}
          <canvas
            bind:this={conwayCanvas}
            width="600"
            height="600"
            class="border border-slate-800"
          ></canvas>
        {:else if activeSimulation === 'flocking'}
          <canvas
            bind:this={flockingCanvas}
            width="800"
            height="600"
            class="border border-slate-800"
          ></canvas>
        {:else if activeSimulation === 'sandpile'}
          <canvas
            bind:this={sandpileCanvas}
            width="600"
            height="600"
            class="border border-slate-800"
          ></canvas>
        {/if}
      </div>
      
      {#if activeSimulation !== 'sandpile'}
        <div class="mt-4">
          <label class="mb-2 block text-sm font-semibold text-slate-400">
            {$t('emergence.controls.speed')}
          </label>
          <input
            type="range"
            bind:value={speed}
            min="10"
            max="500"
            step="10"
            class="w-full"
            onchange={() => {
              if (isRunning && activeSimulation === 'conway') {
                stopSimulation();
                startSimulation();
              }
            }}
          />
          <div class="mt-1 text-xs text-slate-500">{speed}ms {$t('emergence.controls.perFrame')}</div>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('emergence.howItWorks.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('emergence.howItWorks.conway.title')}</h3>
        <p class="mb-3 text-slate-300">{$t('emergence.howItWorks.conway.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('emergence.howItWorks.conway.rules.0')}</li>
          <li>• {$t('emergence.howItWorks.conway.rules.1')}</li>
          <li>• {$t('emergence.howItWorks.conway.rules.2')}</li>
          <li>• {$t('emergence.howItWorks.conway.rules.3')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('emergence.howItWorks.flocking.title')}</h3>
        <p class="mb-3 text-slate-300">{$t('emergence.howItWorks.flocking.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('emergence.howItWorks.flocking.rules.0')}</li>
          <li>• {$t('emergence.howItWorks.flocking.rules.1')}</li>
          <li>• {$t('emergence.howItWorks.flocking.rules.2')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('emergence.howItWorks.sandpile.title')}</h3>
        <p class="mb-3 text-slate-300">{$t('emergence.howItWorks.sandpile.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('emergence.howItWorks.sandpile.rules.0')}</li>
          <li>• {$t('emergence.howItWorks.sandpile.rules.1')}</li>
          <li>• {$t('emergence.howItWorks.sandpile.rules.2')}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Principles -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('emergence.principles.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('emergence.principles.simple.title')}</h3>
        <p class="text-slate-300">{$t('emergence.principles.simple.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('emergence.principles.local.title')}</h3>
        <p class="text-slate-300">{$t('emergence.principles.local.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('emergence.principles.unpredictable.title')}</h3>
        <p class="text-slate-300">{$t('emergence.principles.unpredictable.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('emergence.principles.universal.title')}</h3>
        <p class="text-slate-300">{$t('emergence.principles.universal.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Real World Examples -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('emergence.realWorld.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('emergence.realWorld.intro')}</p>
    </div>
    
    <div class="mt-8 space-y-4">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('emergence.realWorld.examples.brain.title')}</h3>
        <p class="text-sm text-slate-300">{$t('emergence.realWorld.examples.brain.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('emergence.realWorld.examples.markets.title')}</h3>
        <p class="text-sm text-slate-300">{$t('emergence.realWorld.examples.markets.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('emergence.realWorld.examples.ecosystems.title')}</h3>
        <p class="text-sm text-slate-300">{$t('emergence.realWorld.examples.ecosystems.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-yellow-300">{$t('emergence.realWorld.examples.cities.title')}</h3>
        <p class="text-sm text-slate-300">{$t('emergence.realWorld.examples.cities.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('emergence.realWorld.examples.life.title')}</h3>
        <p class="text-sm text-slate-300">{$t('emergence.realWorld.examples.life.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Share Section -->
<section class="bg-slate-900 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <ShareButtons 
      title={$t('toolsPage.tools.emergence.title')}
      description={$t('toolsPage.tools.emergence.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('emergence.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('emergence.quote.author')}</cite>
  </div>
</section>

<!-- Related -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('emergence.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/pillars/patterns"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌀</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('emergence.related.patterns.title')}</h3>
        <p class="text-sm text-slate-400">{$t('emergence.related.patterns.description')}</p>
      </a>
      
      <a 
        href="{base}/explore/patterns"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔬</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('emergence.related.explore.title')}</h3>
        <p class="text-sm text-slate-400">{$t('emergence.related.explore.description')}</p>
      </a>
      
      <a 
        href="{base}/pillars/mind"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧠</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('emergence.related.consciousness.title')}</h3>
        <p class="text-sm text-slate-400">{$t('emergence.related.consciousness.description')}</p>
      </a>
    </div>
  </div>
</section>
