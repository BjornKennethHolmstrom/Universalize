<!-- src/routes/tools/cosmic-zoom/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // Scale state
  let currentScale = $state(0); // -35 (Planck) to +26 (Observable Universe)
  let isAnimating = $state(false);
  let animationSpeed = $state(500); // ms per step
  let animationInterval: number | null = null;
  
  // Scale levels from smallest to largest
  const scales = $derived([
    { 
      power: -35, 
      name: $t('cosmicZoom.scales.planck.name'),
      size: '1.6 × 10⁻³⁵ m',
      description: $t('cosmicZoom.scales.planck.description'),
      icon: '⚛️',
      color: 'purple',
      image: 'quantum'
    },
    { 
      power: -15, 
      name: $t('cosmicZoom.scales.proton.name'),
      size: '1 fm (10⁻¹⁵ m)',
      description: $t('cosmicZoom.scales.proton.description'),
      icon: '🔴',
      color: 'purple',
      image: 'proton'
    },
    { 
      power: -10, 
      name: $t('cosmicZoom.scales.atom.name'),
      size: '1 Å (10⁻¹⁰ m)',
      description: $t('cosmicZoom.scales.atom.description'),
      icon: '⚛️',
      color: 'blue',
      image: 'atom'
    },
    { 
      power: -9, 
      name: $t('cosmicZoom.scales.dna.name'),
      size: '2 nm',
      description: $t('cosmicZoom.scales.dna.description'),
      icon: '🧬',
      color: 'blue',
      image: 'dna'
    },
    { 
      power: -6, 
      name: $t('cosmicZoom.scales.cell.name'),
      size: '10 μm',
      description: $t('cosmicZoom.scales.cell.description'),
      icon: '🦠',
      color: 'green',
      image: 'cell'
    },
    { 
      power: -3, 
      name: $t('cosmicZoom.scales.ant.name'),
      size: '5 mm',
      description: $t('cosmicZoom.scales.ant.description'),
      icon: '🐜',
      color: 'green',
      image: 'ant'
    },
    { 
      power: 0, 
      name: $t('cosmicZoom.scales.human.name'),
      size: '1 m',
      description: $t('cosmicZoom.scales.human.description'),
      icon: '🧍',
      color: 'yellow',
      image: 'human'
    },
    { 
      power: 3, 
      name: $t('cosmicZoom.scales.mountain.name'),
      size: '8.8 km',
      description: $t('cosmicZoom.scales.mountain.description'),
      icon: '⛰️',
      color: 'yellow',
      image: 'mountain'
    },
    { 
      power: 7, 
      name: $t('cosmicZoom.scales.earth.name'),
      size: '12,742 km',
      description: $t('cosmicZoom.scales.earth.description'),
      icon: '🌍',
      color: 'blue',
      image: 'earth'
    },
    { 
      power: 9, 
      name: $t('cosmicZoom.scales.sun.name'),
      size: '1.4 million km',
      description: $t('cosmicZoom.scales.sun.description'),
      icon: '☀️',
      color: 'yellow',
      image: 'sun'
    },
    { 
      power: 13, 
      name: $t('cosmicZoom.scales.solarsystem.name'),
      size: '287 billion km',
      description: $t('cosmicZoom.scales.solarsystem.description'),
      icon: '🪐',
      color: 'purple',
      image: 'solar'
    },
    { 
      power: 16, 
      name: $t('cosmicZoom.scales.lightyear.name'),
      size: '9.5 trillion km',
      description: $t('cosmicZoom.scales.lightyear.description'),
      icon: '✨',
      color: 'blue',
      image: 'stars'
    },
    { 
      power: 21, 
      name: $t('cosmicZoom.scales.galaxy.name'),
      size: '100,000 ly',
      description: $t('cosmicZoom.scales.galaxy.description'),
      icon: '🌌',
      color: 'purple',
      image: 'galaxy'
    },
    { 
      power: 23, 
      name: $t('cosmicZoom.scales.localgroup.name'),
      size: '10 million ly',
      description: $t('cosmicZoom.scales.localgroup.description'),
      icon: '🌠',
      color: 'blue',
      image: 'clusters'
    },
    { 
      power: 26, 
      name: $t('cosmicZoom.scales.universe.name'),
      size: '93 billion ly',
      description: $t('cosmicZoom.scales.universe.description'),
      icon: '🌌',
      color: 'purple',
      image: 'universe'
    }
  ]);
  
  // Find current scale object
  const currentScaleObj = $derived(
    scales.find(s => s.power === currentScale) || scales[6]
  );
  
  // Calculate position in the scale (0 to 1)
  const scalePosition = $derived(
    (currentScale - scales[0].power) / (scales[scales.length - 1].power - scales[0].power)
  );
  
  function setScale(power: number) {
    currentScale = power;
  }
  
  function zoomIn() {
    const currentIndex = scales.findIndex(s => s.power === currentScale);
    if (currentIndex > 0) {
      currentScale = scales[currentIndex - 1].power;
    }
  }
  
  function zoomOut() {
    const currentIndex = scales.findIndex(s => s.power === currentScale);
    if (currentIndex < scales.length - 1) {
      currentScale = scales[currentIndex + 1].power;
    }
  }
  
  function startAnimation() {
    if (isAnimating) return;
    isAnimating = true;
    
    animationInterval = window.setInterval(() => {
      const currentIndex = scales.findIndex(s => s.power === currentScale);
      if (currentIndex < scales.length - 1) {
        currentScale = scales[currentIndex + 1].power;
      } else {
        stopAnimation();
      }
    }, animationSpeed);
  }
  
  function stopAnimation() {
    isAnimating = false;
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
  }
  
  function resetZoom() {
    stopAnimation();
    currentScale = 0; // Human scale
  }
  
  onMount(() => {
    return () => {
      if (animationInterval) clearInterval(animationInterval);
    };
  });
  
  const colorClasses = {
    blue: 'from-blue-600 to-cyan-600',
    purple: 'from-purple-600 to-pink-600',
    yellow: 'from-yellow-600 to-orange-600',
    green: 'from-green-600 to-emerald-600'
  };
</script>

<SEO
  title={$t('toolsPage.tools.cosmicZoom.title')}
  description={$t('toolsPage.tools.cosmicZoom.description')}
  keywords="cosmic zoom, scale of universe, planck length, observable universe, powers of ten"
  image="/tools/cosmic-zoom-preview.jpg"
/>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🔬</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('cosmicZoom.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('cosmicZoom.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('cosmicZoom.intro')}
    </p>
  </div>
</section>

<!-- Main Zoom Interface -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <!-- Current Scale Display -->
    <div class="mb-8 text-center">
      <div class="mb-4 text-8xl">{currentScaleObj.icon}</div>
      <h2 class="mb-2 text-4xl font-bold text-white">{currentScaleObj.name}</h2>
      <div class="mb-4 font-mono text-2xl text-blue-300">{currentScaleObj.size}</div>
      <div class="mb-2 text-sm font-semibold text-slate-400">
        10<sup>{currentScale}</sup> meters
      </div>
      <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
        {currentScaleObj.description}
      </p>
    </div>
    
    <!-- Visual Scale Representation -->
    <div class="mb-8 rounded-xl border border-slate-700 bg-slate-900/50 p-8">
      <div class="relative h-4 overflow-hidden rounded-full bg-slate-800">
        <!-- Progress bar -->
        <div 
          class="h-full rounded-full bg-gradient-to-r {colorClasses[currentScaleObj.color]} transition-all duration-300"
          style="width: {scalePosition * 100}%"
        ></div>
        
        <!-- Scale markers -->
        <div class="absolute inset-0 flex justify-between px-1">
          {#each scales as scale}
            <button
              onclick={() => setScale(scale.power)}
              class="h-full w-1 transition-all hover:bg-white/50
                {currentScale === scale.power ? 'bg-white' : 'bg-slate-600'}"
              title={scale.name}
            ></button>
          {/each}
        </div>
      </div>
      
      <!-- Scale labels -->
      <div class="mt-4 flex justify-between text-xs text-slate-500">
        <span>{$t('cosmicZoom.smallest')}</span>
        <span>{$t('cosmicZoom.human')}</span>
        <span>{$t('cosmicZoom.largest')}</span>
      </div>
    </div>
    
    <!-- Controls -->
    <div class="mb-8 flex flex-wrap items-center justify-center gap-4">
      <button
        onclick={zoomIn}
        disabled={currentScale === scales[0].power}
        class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {$t('cosmicZoom.controls.zoomIn')} 🔍
      </button>
      
      <button
        onclick={zoomOut}
        disabled={currentScale === scales[scales.length - 1].power}
        class="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        🔭 {$t('cosmicZoom.controls.zoomOut')}
      </button>
      
      <button
        onclick={isAnimating ? stopAnimation : startAnimation}
        class="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
      >
        {isAnimating ? $t('cosmicZoom.controls.stop') : $t('cosmicZoom.controls.animate')} 
        {isAnimating ? '⏸️' : '▶️'}
      </button>
      
      <button
        onclick={resetZoom}
        class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
      >
        {$t('cosmicZoom.controls.reset')} 🧍
      </button>
    </div>
    
    <!-- Animation speed control -->
    {#if !isAnimating}
      <div class="mx-auto max-w-md">
        <label class="mb-2 block text-center text-sm font-semibold text-slate-400">
          {$t('cosmicZoom.controls.speed')}
        </label>
        <input
          type="range"
          bind:value={animationSpeed}
          min="50"
          max="1000"
          step="50"
          class="w-full"
        />
        <div class="mt-1 text-center text-xs text-slate-500">
          {animationSpeed}ms {$t('cosmicZoom.controls.perStep')}
        </div>
      </div>
    {/if}
    
    <!-- Scale Grid -->
    <div class="mt-12">
      <h3 class="mb-6 text-center text-2xl font-bold text-white">
        {$t('cosmicZoom.allScales.title')}
      </h3>
      <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {#each scales as scale}
          <button
            onclick={() => setScale(scale.power)}
            class="rounded-xl border p-4 text-center transition
              {currentScale === scale.power
                ? 'border-blue-500 bg-slate-800 shadow-xl'
                : 'border-slate-700 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800'
              }"
          >
            <div class="mb-2 text-4xl">{scale.icon}</div>
            <div class="mb-1 text-sm font-bold text-white">{scale.name}</div>
            <div class="text-xs font-mono text-slate-400">10<sup>{scale.power}</sup>m</div>
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Understanding Scale -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('cosmicZoom.understanding.title')}</h2>
    
    <div class="mb-8 space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('cosmicZoom.understanding.paragraph1')}</p>
      <p>{$t('cosmicZoom.understanding.paragraph2')}</p>
      <p>{$t('cosmicZoom.understanding.paragraph3')}</p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🔬</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('cosmicZoom.understanding.quantum.title')}</h3>
        <p class="text-slate-300">{$t('cosmicZoom.understanding.quantum.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🌌</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('cosmicZoom.understanding.cosmic.title')}</h3>
        <p class="text-slate-300">{$t('cosmicZoom.understanding.cosmic.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🧍</div>
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('cosmicZoom.understanding.middle.title')}</h3>
        <p class="text-slate-300">{$t('cosmicZoom.understanding.middle.description')}</p>
      </div>
      
      <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🔄</div>
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('cosmicZoom.understanding.patterns.title')}</h3>
        <p class="text-slate-300">{$t('cosmicZoom.understanding.patterns.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Powers of Ten -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('cosmicZoom.powersOfTen.title')}</h2>
    
    <div class="mb-8 space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('cosmicZoom.powersOfTen.intro')}</p>
    </div>
    
    <div class="space-y-4">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('cosmicZoom.powersOfTen.examples.kilometer.title')}</h3>
        <p class="text-sm text-slate-300">{$t('cosmicZoom.powersOfTen.examples.kilometer.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('cosmicZoom.powersOfTen.examples.million.title')}</h3>
        <p class="text-sm text-slate-300">{$t('cosmicZoom.powersOfTen.examples.million.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('cosmicZoom.powersOfTen.examples.billion.title')}</h3>
        <p class="text-sm text-slate-300">{$t('cosmicZoom.powersOfTen.examples.billion.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-yellow-300">{$t('cosmicZoom.powersOfTen.examples.trillion.title')}</h3>
        <p class="text-sm text-slate-300">{$t('cosmicZoom.powersOfTen.examples.trillion.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Your Place in Scale -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('cosmicZoom.yourPlace.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('cosmicZoom.yourPlace.paragraph1')}</p>
      <p>{$t('cosmicZoom.yourPlace.paragraph2')}</p>
      <p>{$t('cosmicZoom.yourPlace.paragraph3')}</p>
    </div>
    
    <div class="mt-8 rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
      <h3 class="mb-4 text-2xl font-bold text-white">{$t('cosmicZoom.yourPlace.reflection.title')}</h3>
      <p class="text-lg leading-relaxed text-slate-300">
        {$t('cosmicZoom.yourPlace.reflection.text')}
      </p>
    </div>
  </div>
</section>

<!-- Share Section -->
<section class="bg-slate-900 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <ShareButtons 
      title={$t('toolsPage.tools.cosmicZoom.title')}
      description={$t('toolsPage.tools.cosmicZoom.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('cosmicZoom.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('cosmicZoom.quote.author')}</cite>
  </div>
</section>

<!-- Related -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('cosmicZoom.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/tools/cosmic-address"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">📍</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('cosmicZoom.related.address.title')}</h3>
        <p class="text-sm text-slate-400">{$t('cosmicZoom.related.address.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/scale-shifting"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔄</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('cosmicZoom.related.practice.title')}</h3>
        <p class="text-sm text-slate-400">{$t('cosmicZoom.related.practice.description')}</p>
      </a>
      
      <a 
        href="{base}/pillars/patterns"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌀</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('cosmicZoom.related.patterns.title')}</h3>
        <p class="text-sm text-slate-400">{$t('cosmicZoom.related.patterns.description')}</p>
      </a>
    </div>
  </div>
</section>
