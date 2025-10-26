<!-- src/routes/tools/cosmic-address/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';
  
  // Address levels
  let currentLevel = $state(0);
  let isAnimating = $state(false);
  
  const levels = $derived([
    {
      id: 'body',
      title: $t('cosmicAddress.levels.body.title'),
      icon: '🧬',
      scale: $t('cosmicAddress.levels.body.scale'),
      description: $t('cosmicAddress.levels.body.description'),
      address: $t('cosmicAddress.levels.body.address'),
      facts: [
        $t('cosmicAddress.levels.body.facts.0'),
        $t('cosmicAddress.levels.body.facts.1'),
        $t('cosmicAddress.levels.body.facts.2')
      ],
      color: 'from-red-600 to-pink-600'
    },
    {
      id: 'location',
      title: $t('cosmicAddress.levels.location.title'),
      icon: '🏠',
      scale: $t('cosmicAddress.levels.location.scale'),
      description: $t('cosmicAddress.levels.location.description'),
      address: $t('cosmicAddress.levels.location.address'),
      facts: [
        $t('cosmicAddress.levels.location.facts.0'),
        $t('cosmicAddress.levels.location.facts.1'),
        $t('cosmicAddress.levels.location.facts.2')
      ],
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'city',
      title: $t('cosmicAddress.levels.city.title'),
      icon: '🏙️',
      scale: $t('cosmicAddress.levels.city.scale'),
      description: $t('cosmicAddress.levels.city.description'),
      address: $t('cosmicAddress.levels.city.address'),
      facts: [
        $t('cosmicAddress.levels.city.facts.0'),
        $t('cosmicAddress.levels.city.facts.1'),
        $t('cosmicAddress.levels.city.facts.2')
      ],
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 'earth',
      title: $t('cosmicAddress.levels.earth.title'),
      icon: '🌍',
      scale: $t('cosmicAddress.levels.earth.scale'),
      description: $t('cosmicAddress.levels.earth.description'),
      address: $t('cosmicAddress.levels.earth.address'),
      facts: [
        $t('cosmicAddress.levels.earth.facts.0'),
        $t('cosmicAddress.levels.earth.facts.1'),
        $t('cosmicAddress.levels.earth.facts.2')
      ],
      color: 'from-green-600 to-blue-600'
    },
    {
      id: 'solar',
      title: $t('cosmicAddress.levels.solar.title'),
      icon: '☀️',
      scale: $t('cosmicAddress.levels.solar.scale'),
      description: $t('cosmicAddress.levels.solar.description'),
      address: $t('cosmicAddress.levels.solar.address'),
      facts: [
        $t('cosmicAddress.levels.solar.facts.0'),
        $t('cosmicAddress.levels.solar.facts.1'),
        $t('cosmicAddress.levels.solar.facts.2')
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'milkyway',
      title: $t('cosmicAddress.levels.milkyway.title'),
      icon: '🌌',
      scale: $t('cosmicAddress.levels.milkyway.scale'),
      description: $t('cosmicAddress.levels.milkyway.description'),
      address: $t('cosmicAddress.levels.milkyway.address'),
      facts: [
        $t('cosmicAddress.levels.milkyway.facts.0'),
        $t('cosmicAddress.levels.milkyway.facts.1'),
        $t('cosmicAddress.levels.milkyway.facts.2')
      ],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'localgroup',
      title: $t('cosmicAddress.levels.localgroup.title'),
      icon: '🌠',
      scale: $t('cosmicAddress.levels.localgroup.scale'),
      description: $t('cosmicAddress.levels.localgroup.description'),
      address: $t('cosmicAddress.levels.localgroup.address'),
      facts: [
        $t('cosmicAddress.levels.localgroup.facts.0'),
        $t('cosmicAddress.levels.localgroup.facts.1'),
        $t('cosmicAddress.levels.localgroup.facts.2')
      ],
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'universe',
      title: $t('cosmicAddress.levels.universe.title'),
      icon: '✨',
      scale: $t('cosmicAddress.levels.universe.scale'),
      description: $t('cosmicAddress.levels.universe.description'),
      address: $t('cosmicAddress.levels.universe.address'),
      facts: [
        $t('cosmicAddress.levels.universe.facts.0'),
        $t('cosmicAddress.levels.universe.facts.1'),
        $t('cosmicAddress.levels.universe.facts.2')
      ],
      color: 'from-violet-600 to-indigo-600'
    }
  ]);
  
  function nextLevel() {
    if (currentLevel < levels.length - 1 && !isAnimating) {
      isAnimating = true;
      currentLevel++;
      setTimeout(() => isAnimating = false, 500);
    }
  }
  
  function previousLevel() {
    if (currentLevel > 0 && !isAnimating) {
      isAnimating = true;
      currentLevel--;
      setTimeout(() => isAnimating = false, 500);
    }
  }
  
  function jumpToLevel(index: number) {
    if (index !== currentLevel && !isAnimating) {
      isAnimating = true;
      currentLevel = index;
      setTimeout(() => isAnimating = false, 500);
    }
  }
  
  // Keyboard navigation
  onMount(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextLevel();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        previousLevel();
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  
  $effect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
</script>

<svelte:head>
  <title>{$t('cosmicAddress.meta.title')} - Universalize</title>
  <meta name="description" content={$t('cosmicAddress.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">📍</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('cosmicAddress.hero.title')}</h1>
    <p class="mb-8 text-xl text-blue-200">
      {$t('cosmicAddress.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('cosmicAddress.hero.description')}
    </p>
  </div>
</section>

<!-- Main Experience -->
<section class="min-h-screen bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-5xl">
    
    <!-- Progress indicator -->
    <div class="mb-12">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-sm font-semibold text-slate-400">
          {$t('cosmicAddress.progress.level')} {currentLevel + 1} {$t('cosmicAddress.progress.of')} {levels.length}
        </span>
        <span class="text-sm text-slate-400">{levels[currentLevel].scale}</span>
      </div>
      
      <!-- Progress bar with markers -->
      <div class="relative">
        <div class="h-2 overflow-hidden rounded-full bg-slate-800">
          <div 
            class="h-full bg-gradient-to-r {levels[currentLevel].color} transition-all duration-500"
            style="width: {((currentLevel + 1) / levels.length) * 100}%"
          ></div>
        </div>
        
        <!-- Level markers -->
        <div class="mt-3 flex justify-between">
          {#each levels as level, i}
            <button
              onclick={() => jumpToLevel(i)}
              class="group flex flex-col items-center transition"
              aria-label={`Jump to ${level.title}`}
            >
              <div 
                class="mb-1 flex h-8 w-8 items-center justify-center rounded-full text-lg transition
                  {i === currentLevel 
                    ? 'bg-gradient-to-br ' + level.color + ' scale-125 shadow-lg' 
                    : i < currentLevel 
                      ? 'bg-slate-700 opacity-50' 
                      : 'bg-slate-800 opacity-30'
                  }
                  group-hover:scale-110"
              >
                {level.icon}
              </div>
              <span class="hidden text-xs text-slate-500 group-hover:text-slate-300 sm:block">
                {level.id}
              </span>
            </button>
          {/each}
        </div>
      </div>
    </div>
    
    <!-- Main card -->
    <div class="mb-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
      <!-- Header with gradient -->
      <div class="bg-gradient-to-r {levels[currentLevel].color} px-8 py-6">
        <div class="flex items-center gap-4">
          <div class="text-7xl">{levels[currentLevel].icon}</div>
          <div class="flex-1">
            <div class="mb-1 text-sm font-semibold uppercase tracking-wide text-white/80">
              {levels[currentLevel].scale}
            </div>
            <h2 class="text-4xl font-bold text-white">{levels[currentLevel].title}</h2>
          </div>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-8">
        <!-- Description -->
        <div class="mb-8">
          <p class="text-xl leading-relaxed text-slate-300">
            {levels[currentLevel].description}
          </p>
        </div>
        
        <!-- Address -->
        <div class="mb-8 rounded-xl bg-slate-800/50 p-6">
          <div class="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            {$t('cosmicAddress.yourAddress')}
          </div>
          <p class="font-mono text-lg text-blue-300">
            {levels[currentLevel].address}
          </p>
        </div>
        
        <!-- Facts -->
        <div class="mb-8">
          <h3 class="mb-4 text-lg font-bold text-white">{$t('cosmicAddress.amazingFacts')}</h3>
          <div class="space-y-3">
            {#each levels[currentLevel].facts as fact}
              <div class="flex items-start gap-3 rounded-lg bg-slate-800/30 p-4">
                <span class="text-xl">→</span>
                <p class="flex-1 text-slate-300">{fact}</p>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Navigation buttons -->
        <div class="flex gap-4">
          <button
            onclick={previousLevel}
            disabled={currentLevel === 0}
            class="flex-1 rounded-lg border border-slate-600 px-6 py-4 font-semibold text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            ← {$t('cosmicAddress.navigation.zoomIn')}
          </button>
          
          {#if currentLevel < levels.length - 1}
            <button
              onclick={nextLevel}
              class="flex-1 rounded-lg bg-gradient-to-r {levels[currentLevel + 1].color} px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              {$t('cosmicAddress.navigation.zoomOut')} →
            </button>
          {:else}
            <button
              onclick={() => jumpToLevel(0)}
              class="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              {$t('cosmicAddress.navigation.restart')} ↻
            </button>
          {/if}
        </div>
        
        <!-- Keyboard hint -->
        <div class="mt-4 text-center text-sm text-slate-500">
          {$t('cosmicAddress.keyboardHint')}
        </div>
      </div>
    </div>
    
    <!-- Complete address visualization -->
    {#if currentLevel === levels.length - 1}
      <div class="rounded-2xl border border-purple-500 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-8">
        <h3 class="mb-6 text-center text-2xl font-bold text-white">
          {$t('cosmicAddress.complete.title')}
        </h3>
        
        <div class="space-y-2 font-mono text-sm">
          {#each levels as level, i}
            <div 
              class="rounded-lg bg-slate-900/50 p-3 transition hover:bg-slate-800/50"
              class:opacity-50={i !== currentLevel}
            >
              <div class="flex items-center gap-3">
                <span class="text-2xl">{level.icon}</span>
                <div class="flex-1">
                  <div class="text-xs text-slate-400">{level.title}</div>
                  <div class="text-blue-300">{level.address}</div>
                </div>
              </div>
            </div>
          {/each}
        </div>
        
        <p class="mt-6 text-center text-lg text-slate-300">
          {$t('cosmicAddress.complete.message')}
        </p>
      </div>
    {/if}
  </div>
</section>

<!-- Understanding section -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('cosmicAddress.understanding.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('cosmicAddress.understanding.paragraph1')}</p>
      <p>{$t('cosmicAddress.understanding.paragraph2')}</p>
      <p>{$t('cosmicAddress.understanding.paragraph3')}</p>
    </div>
    
    <div class="mt-12 grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🔬</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('cosmicAddress.understanding.nested.title')}</h3>
        <p class="text-slate-300">{$t('cosmicAddress.understanding.nested.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🌊</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('cosmicAddress.understanding.connected.title')}</h3>
        <p class="text-slate-300">{$t('cosmicAddress.understanding.connected.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Reflection -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('cosmicAddress.reflection.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('cosmicAddress.reflection.questions.belonging')}</h3>
        <p class="text-slate-300">{$t('cosmicAddress.reflection.answers.belonging')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('cosmicAddress.reflection.questions.perspective')}</h3>
        <p class="text-slate-300">{$t('cosmicAddress.reflection.answers.perspective')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('cosmicAddress.reflection.questions.responsibility')}</h3>
        <p class="text-slate-300">{$t('cosmicAddress.reflection.answers.responsibility')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('cosmicAddress.reflection.questions.significance')}</h3>
        <p class="text-slate-300">{$t('cosmicAddress.reflection.answers.significance')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('cosmicAddress.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('cosmicAddress.quote.author')}</cite>
  </div>
</section>

<!-- Related -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('cosmicAddress.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="/tools/cosmic-zoom"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">🔬</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('cosmicAddress.related.cosmicZoom.title')}</h3>
        <p class="text-sm text-slate-400">{$t('cosmicAddress.related.cosmicZoom.description')}</p>
      </a>
      
      <a 
        href="/tools/deep-time"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-purple-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">⏳</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('cosmicAddress.related.deepTime.title')}</h3>
        <p class="text-sm text-slate-400">{$t('cosmicAddress.related.deepTime.description')}</p>
      </a>
      
      <a 
        href="/explore/overview-effect"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-green-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('cosmicAddress.related.overviewEffect.title')}</h3>
        <p class="text-sm text-slate-400">{$t('cosmicAddress.related.overviewEffect.description')}</p>
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Smooth transitions for level changes */
  .transition {
    transition: all 0.3s ease-in-out;
  }
</style>
