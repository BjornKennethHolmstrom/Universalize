<!-- src/routes/tools/pattern-finder/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  
  // Tool state
  let activePattern: string = $state('fibonacci');
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  
  // Data input
  let userInput = $state('');
  let dataPoints: number[] = $state([]);
  let detectedPatterns: string[] = $state([]);
  
  // Pattern examples
  const patterns = $derived([
    {
      id: 'fibonacci',
      name: $t('patternFinder.patterns.fibonacci.name'),
      icon: '🌻',
      description: $t('patternFinder.patterns.fibonacci.description'),
      example: '1, 1, 2, 3, 5, 8, 13, 21, 34, 55',
      color: 'blue'
    },
    {
      id: 'prime',
      name: $t('patternFinder.patterns.prime.name'),
      icon: '🔢',
      description: $t('patternFinder.patterns.prime.description'),
      example: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
      color: 'purple'
    },
    {
      id: 'geometric',
      name: $t('patternFinder.patterns.geometric.name'),
      icon: '📈',
      description: $t('patternFinder.patterns.geometric.description'),
      example: '2, 4, 8, 16, 32, 64, 128, 256',
      color: 'green'
    },
    {
      id: 'arithmetic',
      name: $t('patternFinder.patterns.arithmetic.name'),
      icon: '➕',
      description: $t('patternFinder.patterns.arithmetic.description'),
      example: '3, 7, 11, 15, 19, 23, 27, 31',
      color: 'yellow'
    }
  ]);
  
  onMount(() => {
    // Initialize context when canvas is ready
    setTimeout(() => {
      if (canvas) {
        ctx = canvas.getContext('2d');
        loadExample(activePattern);
      }
    }, 100);
  });
  
  // Reactive effect to redraw when data changes
  $effect(() => {
    if (dataPoints.length > 0 && canvas) {
      // Small delay to ensure canvas is rendered
      setTimeout(() => visualizeData(), 50);
    }
  });
  
  function loadExample(patternId: string) {
    const pattern = patterns.find(p => p.id === patternId);
    if (pattern) {
      userInput = pattern.example;
      analyzeData();
    }
  }
  
  function analyzeData() {
    // Parse input
    dataPoints = userInput
      .split(',')
      .map(s => parseFloat(s.trim()))
      .filter(n => !isNaN(n));
    
    if (dataPoints.length < 2) {
      detectedPatterns = [];
      return;
    }
    
    // Detect patterns
    detectedPatterns = [];
    
    // Check for arithmetic sequence
    if (isArithmeticSequence(dataPoints)) {
      const diff = dataPoints[1] - dataPoints[0];
      detectedPatterns.push(`Arithmetic sequence (difference: ${diff})`);
    }
    
    // Check for geometric sequence
    if (isGeometricSequence(dataPoints)) {
      const ratio = dataPoints[1] / dataPoints[0];
      detectedPatterns.push(`Geometric sequence (ratio: ${ratio.toFixed(2)})`);
    }
    
    // Check for Fibonacci-like
    if (isFibonacciLike(dataPoints)) {
      detectedPatterns.push('Fibonacci-like sequence');
    }
    
    // Check for prime numbers
    if (dataPoints.every(n => isPrime(n))) {
      detectedPatterns.push('All prime numbers');
    }
    
    // Check for powers of 2
    if (dataPoints.every(n => Math.log2(n) % 1 === 0)) {
      detectedPatterns.push('Powers of 2');
    }
    
    // Check for perfect squares
    if (dataPoints.every(n => Math.sqrt(n) % 1 === 0)) {
      detectedPatterns.push('Perfect squares');
    }
    
    if (detectedPatterns.length === 0) {
      detectedPatterns.push('No common pattern detected');
    }
    
    visualizeData();
  }
  
  function isArithmeticSequence(arr: number[]): boolean {
    if (arr.length < 2) return false;
    const diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
      if (Math.abs((arr[i] - arr[i-1]) - diff) > 0.01) return false;
    }
    return true;
  }
  
  function isGeometricSequence(arr: number[]): boolean {
    if (arr.length < 2 || arr[0] === 0) return false;
    const ratio = arr[1] / arr[0];
    for (let i = 2; i < arr.length; i++) {
      if (arr[i-1] === 0 || Math.abs((arr[i] / arr[i-1]) - ratio) > 0.01) return false;
    }
    return true;
  }
  
  function isFibonacciLike(arr: number[]): boolean {
    if (arr.length < 3) return false;
    for (let i = 2; i < arr.length; i++) {
      if (Math.abs(arr[i] - (arr[i-1] + arr[i-2])) > 0.01) return false;
    }
    return true;
  }
  
  function isPrime(n: number): boolean {
    if (n < 2 || n % 1 !== 0) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  function visualizeData() {
    if (!ctx || !canvas || dataPoints.length === 0) {
      // If context not ready, try to initialize it
      if (canvas && !ctx) {
        ctx = canvas.getContext('2d');
      }
      if (!ctx || dataPoints.length === 0) return;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set canvas background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const padding = 60;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    const maxValue = Math.max(...dataPoints);
    const minValue = Math.min(...dataPoints);
    const range = maxValue - minValue || 1;
    
    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();
    
    // Draw grid lines
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
      
      // Y-axis labels
      const value = maxValue - (range / 5) * i;
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(value.toFixed(1), padding - 10, y + 4);
    }
    
    // Draw data points and lines
    const pointSpacing = chartWidth / (dataPoints.length - 1 || 1);
    
    // Draw lines
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    dataPoints.forEach((value, i) => {
      const x = padding + i * pointSpacing;
      const y = padding + chartHeight - ((value - minValue) / range) * chartHeight;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    
    // Draw points
    dataPoints.forEach((value, i) => {
      const x = padding + i * pointSpacing;
      const y = padding + chartHeight - ((value - minValue) / range) * chartHeight;
      
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // X-axis labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(i.toString(), x, canvas.height - padding + 20);
    });
    
    // Title
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Data Visualization', canvas.width / 2, 30);
  }
  
  function predictNext(): number | null {
    if (dataPoints.length < 2) return null;
    
    // Try arithmetic
    if (isArithmeticSequence(dataPoints)) {
      const diff = dataPoints[1] - dataPoints[0];
      return dataPoints[dataPoints.length - 1] + diff;
    }
    
    // Try geometric
    if (isGeometricSequence(dataPoints)) {
      const ratio = dataPoints[1] / dataPoints[0];
      return dataPoints[dataPoints.length - 1] * ratio;
    }
    
    // Try Fibonacci
    if (isFibonacciLike(dataPoints)) {
      return dataPoints[dataPoints.length - 1] + dataPoints[dataPoints.length - 2];
    }
    
    return null;
  }
  
  function addPrediction() {
    const next = predictNext();
    if (next !== null) {
      userInput += `, ${next}`;
      analyzeData();
    }
  }
</script>

<svelte:head>
  <title>{$t('patternFinder.meta.title')} - Universalize</title>
  <meta name="description" content={$t('patternFinder.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🔍</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('patternFinder.hero.title')}</h1>
    <p class="mx-auto max-w-2xl text-xl text-blue-200">
      {$t('patternFinder.hero.subtitle')}
    </p>
  </div>
</section>

<!-- What is it -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('patternFinder.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('patternFinder.what.paragraph1')}</p>
      <p>{$t('patternFinder.what.paragraph2')}</p>
      <p>{$t('patternFinder.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Pattern Examples -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('patternFinder.examples.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      {#each patterns as pattern}
        <button
          onclick={() => {
            activePattern = pattern.id;
            loadExample(pattern.id);
          }}
          class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-left transition hover:border-{pattern.color}-500 hover:bg-slate-700"
          class:border-blue-500={activePattern === pattern.id && pattern.color === 'blue'}
          class:border-purple-500={activePattern === pattern.id && pattern.color === 'purple'}
          class:border-green-500={activePattern === pattern.id && pattern.color === 'green'}
          class:border-yellow-500={activePattern === pattern.id && pattern.color === 'yellow'}
        >
          <div class="mb-3 flex items-center gap-3">
            <div class="text-3xl">{pattern.icon}</div>
            <h3 class="text-xl font-bold text-{pattern.color}-300">{pattern.name}</h3>
          </div>
          <p class="mb-3 text-sm text-slate-400">{pattern.description}</p>
          <code class="block rounded bg-slate-900 p-2 text-xs text-slate-300">{pattern.example}</code>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Interactive Tool -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('patternFinder.tool.title')}</h2>
    
    <div class="space-y-6">
      <!-- Input -->
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <label class="mb-3 block text-sm font-semibold text-slate-300">
          {$t('patternFinder.tool.inputLabel')}
        </label>
        <textarea
          bind:value={userInput}
          placeholder="1, 2, 3, 5, 8, 13, 21..."
          class="w-full rounded-lg border border-slate-600 bg-slate-900 p-4 text-slate-300 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          rows="3"
        ></textarea>
        
        <div class="mt-4 flex gap-4">
          <button
            onclick={analyzeData}
            class="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-500"
          >
            {$t('patternFinder.tool.analyze')}
          </button>
          
          {#if dataPoints.length >= 2}
            <button
              onclick={addPrediction}
              class="rounded-lg border border-blue-600 px-6 py-2 font-semibold text-blue-300 transition hover:bg-blue-900/30"
            >
              {$t('patternFinder.tool.predictNext')}
            </button>
          {/if}
        </div>
      </div>
      
      <!-- Detected Patterns -->
      {#if detectedPatterns.length > 0}
        <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
          <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('patternFinder.tool.detected')}</h3>
          <ul class="space-y-2">
            {#each detectedPatterns as pattern}
              <li class="flex items-center gap-3 text-slate-300">
                <span class="text-blue-400">✓</span>
                <span>{pattern}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
      
      <!-- Visualization -->
      {#if dataPoints.length > 0}
        <div class="rounded-xl border border-slate-700 bg-slate-950 p-6">
          <h3 class="mb-4 text-lg font-bold text-slate-300">Data visualization</h3>
          <canvas
            bind:this={canvas}
            width="1000"
            height="500"
            class="w-full rounded border border-slate-800"
            style="background-color: #0f172a;"
          ></canvas>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Pattern Recognition in Nature -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('patternFinder.nature.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('patternFinder.nature.intro')}</p>
    </div>
    
    <div class="mt-8 space-y-4">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('patternFinder.nature.fibonacci.title')}</h3>
        <p class="text-sm text-slate-300">{$t('patternFinder.nature.fibonacci.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('patternFinder.nature.prime.title')}</h3>
        <p class="text-sm text-slate-300">{$t('patternFinder.nature.prime.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('patternFinder.nature.exponential.title')}</h3>
        <p class="text-sm text-slate-300">{$t('patternFinder.nature.exponential.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-yellow-300">{$t('patternFinder.nature.symmetry.title')}</h3>
        <p class="text-sm text-slate-300">{$t('patternFinder.nature.symmetry.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Why Patterns Matter -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('patternFinder.why.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('patternFinder.why.paragraph1')}</p>
      <p>{$t('patternFinder.why.paragraph2')}</p>
      <p>{$t('patternFinder.why.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('patternFinder.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('patternFinder.quote.author')}</cite>
  </div>
</section>

<!-- Related -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('patternFinder.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/pillars/patterns"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌀</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('patternFinder.related.patterns.title')}</h3>
        <p class="text-sm text-slate-400">{$t('patternFinder.related.patterns.description')}</p>
      </a>
      
      <a 
        href="{base}/tools/emergence"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌊</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('patternFinder.related.emergence.title')}</h3>
        <p class="text-sm text-slate-400">{$t('patternFinder.related.emergence.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/systems-thinking"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🕸️</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('patternFinder.related.systems.title')}</h3>
        <p class="text-sm text-slate-400">{$t('patternFinder.related.systems.description')}</p>
      </a>
    </div>
  </div>
</section>
