<!-- src/routes/tools/planetary-boundaries/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // Boundary state
  let selectedBoundary: number | null = $state(null);
  let showAllDetails = $state(false);
  
  // The 9 planetary boundaries with current status
  const boundaries = $derived([
    {
      id: 'climate',
      name: $t('planetaryBoundaries.boundaries.climate.name'),
      icon: '🌡️',
      status: 'exceeded',
      value: '417',
      unit: 'ppm CO₂',
      boundary: '350 ppm',
      description: $t('planetaryBoundaries.boundaries.climate.description'),
      consequences: $t('planetaryBoundaries.boundaries.climate.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.climate.actions.0'),
        $t('planetaryBoundaries.boundaries.climate.actions.1'),
        $t('planetaryBoundaries.boundaries.climate.actions.2')
      ],
      color: 'from-red-600 to-orange-600',
      riskLevel: 'high'
    },
    {
      id: 'biodiversity',
      name: $t('planetaryBoundaries.boundaries.biodiversity.name'),
      icon: '🦋',
      status: 'exceeded',
      value: '100-1000x',
      unit: 'background rate',
      boundary: '<10x background',
      description: $t('planetaryBoundaries.boundaries.biodiversity.description'),
      consequences: $t('planetaryBoundaries.boundaries.biodiversity.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.biodiversity.actions.0'),
        $t('planetaryBoundaries.boundaries.biodiversity.actions.1'),
        $t('planetaryBoundaries.boundaries.biodiversity.actions.2')
      ],
      color: 'from-red-600 to-pink-600',
      riskLevel: 'high'
    },
    {
      id: 'nitrogen',
      name: $t('planetaryBoundaries.boundaries.nitrogen.name'),
      icon: '🌾',
      status: 'exceeded',
      value: '150',
      unit: 'million tonnes/year',
      boundary: '62 million tonnes/year',
      description: $t('planetaryBoundaries.boundaries.nitrogen.description'),
      consequences: $t('planetaryBoundaries.boundaries.nitrogen.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.nitrogen.actions.0'),
        $t('planetaryBoundaries.boundaries.nitrogen.actions.1'),
        $t('planetaryBoundaries.boundaries.nitrogen.actions.2')
      ],
      color: 'from-orange-600 to-red-600',
      riskLevel: 'high'
    },
    {
      id: 'landuse',
      name: $t('planetaryBoundaries.boundaries.landuse.name'),
      icon: '🌳',
      status: 'exceeded',
      value: '12%',
      unit: 'ice-free land',
      boundary: '15% forest cover',
      description: $t('planetaryBoundaries.boundaries.landuse.description'),
      consequences: $t('planetaryBoundaries.boundaries.landuse.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.landuse.actions.0'),
        $t('planetaryBoundaries.boundaries.landuse.actions.1'),
        $t('planetaryBoundaries.boundaries.landuse.actions.2')
      ],
      color: 'from-yellow-600 to-orange-600',
      riskLevel: 'medium'
    },
    {
      id: 'freshwater',
      name: $t('planetaryBoundaries.boundaries.freshwater.name'),
      icon: '💧',
      status: 'atrisk',
      value: '~4,000',
      unit: 'km³/year',
      boundary: '4,000-6,000 km³/year',
      description: $t('planetaryBoundaries.boundaries.freshwater.description'),
      consequences: $t('planetaryBoundaries.boundaries.freshwater.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.freshwater.actions.0'),
        $t('planetaryBoundaries.boundaries.freshwater.actions.1'),
        $t('planetaryBoundaries.boundaries.freshwater.actions.2')
      ],
      color: 'from-blue-600 to-cyan-600',
      riskLevel: 'medium'
    },
    {
      id: 'ocean',
      name: $t('planetaryBoundaries.boundaries.ocean.name'),
      icon: '🌊',
      status: 'atrisk',
      value: '8.1',
      unit: 'pH',
      boundary: '8.2 pH (pre-industrial)',
      description: $t('planetaryBoundaries.boundaries.ocean.description'),
      consequences: $t('planetaryBoundaries.boundaries.ocean.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.ocean.actions.0'),
        $t('planetaryBoundaries.boundaries.ocean.actions.1'),
        $t('planetaryBoundaries.boundaries.ocean.actions.2')
      ],
      color: 'from-cyan-600 to-blue-600',
      riskLevel: 'medium'
    },
    {
      id: 'ozone',
      name: $t('planetaryBoundaries.boundaries.ozone.name'),
      icon: '☀️',
      status: 'safe',
      value: '~290',
      unit: 'Dobson units',
      boundary: '>275 DU',
      description: $t('planetaryBoundaries.boundaries.ozone.description'),
      consequences: $t('planetaryBoundaries.boundaries.ozone.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.ozone.actions.0'),
        $t('planetaryBoundaries.boundaries.ozone.actions.1'),
        $t('planetaryBoundaries.boundaries.ozone.actions.2')
      ],
      color: 'from-green-600 to-emerald-600',
      riskLevel: 'low'
    },
    {
      id: 'aerosols',
      name: $t('planetaryBoundaries.boundaries.aerosols.name'),
      icon: '☁️',
      status: 'uncertain',
      value: 'Regional',
      unit: 'variation',
      boundary: 'Not yet quantified',
      description: $t('planetaryBoundaries.boundaries.aerosols.description'),
      consequences: $t('planetaryBoundaries.boundaries.aerosols.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.aerosols.actions.0'),
        $t('planetaryBoundaries.boundaries.aerosols.actions.1'),
        $t('planetaryBoundaries.boundaries.aerosols.actions.2')
      ],
      color: 'from-slate-600 to-gray-600',
      riskLevel: 'unknown'
    },
    {
      id: 'chemicals',
      name: $t('planetaryBoundaries.boundaries.chemicals.name'),
      icon: '🧪',
      status: 'exceeded',
      value: '>350,000',
      unit: 'novel entities',
      boundary: 'Not yet quantified',
      description: $t('planetaryBoundaries.boundaries.chemicals.description'),
      consequences: $t('planetaryBoundaries.boundaries.chemicals.consequences'),
      actions: [
        $t('planetaryBoundaries.boundaries.chemicals.actions.0'),
        $t('planetaryBoundaries.boundaries.chemicals.actions.1'),
        $t('planetaryBoundaries.boundaries.chemicals.actions.2')
      ],
      color: 'from-purple-600 to-pink-600',
      riskLevel: 'high'
    }
  ]);
  
  // Get status color
  function getStatusColor(status: string): string {
    switch (status) {
      case 'exceeded': return 'bg-red-600';
      case 'atrisk': return 'bg-yellow-600';
      case 'safe': return 'bg-green-600';
      case 'uncertain': return 'bg-slate-600';
      default: return 'bg-slate-600';
    }
  }
  
  function getStatusText(status: string): string {
    switch (status) {
      case 'exceeded': return $t('planetaryBoundaries.status.exceeded');
      case 'atrisk': return $t('planetaryBoundaries.status.atrisk');
      case 'safe': return $t('planetaryBoundaries.status.safe');
      case 'uncertain': return $t('planetaryBoundaries.status.uncertain');
      default: return status;
    }
  }
  
  function selectBoundary(index: number) {
    // Don't allow individual selection when "show all" is active
    if (!showAllDetails) {
      selectedBoundary = selectedBoundary === index ? null : index;
    }
  }
  
  function toggleShowAll() {
    showAllDetails = !showAllDetails;
    // Reset individual selection when toggling
    if (showAllDetails) {
      selectedBoundary = null;
    }
  }

  
  // Count by status
  const statusCounts = $derived({
    exceeded: boundaries.filter(b => b.status === 'exceeded').length,
    atrisk: boundaries.filter(b => b.status === 'atrisk').length,
    safe: boundaries.filter(b => b.status === 'safe').length,
    uncertain: boundaries.filter(b => b.status === 'uncertain').length
  });
</script>

<SEO
  title={$t('toolsPage.tools.planetaryBoundaries.title')}
  description={$t('toolsPage.tools.planetaryBoundaries.description')}
  keywords="planetary boundaries, earth systems, sustainability, climate change, biosphere"
  image="/tools/planetary-boundaries-preview.jpg"
/>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🌍</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('planetaryBoundaries.hero.title')}</h1>
    <p class="mb-8 text-xl text-blue-200">
      {$t('planetaryBoundaries.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('planetaryBoundaries.hero.description')}
    </p>
  </div>
</section>

<!-- Overview Status -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('planetaryBoundaries.overview.title')}</h2>
    
    <!-- Status summary -->
    <div class="mb-12 grid gap-6 md:grid-cols-4">
      <div class="rounded-xl border border-red-500 bg-slate-800/50 p-6 text-center">
        <div class="mb-2 text-4xl font-bold text-red-400">{statusCounts.exceeded}</div>
        <div class="text-sm font-semibold uppercase tracking-wide text-slate-400">{$t('planetaryBoundaries.status.exceeded')}</div>
      </div>
      
      <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-6 text-center">
        <div class="mb-2 text-4xl font-bold text-yellow-400">{statusCounts.atrisk}</div>
        <div class="text-sm font-semibold uppercase tracking-wide text-slate-400">{$t('planetaryBoundaries.status.atrisk')}</div>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6 text-center">
        <div class="mb-2 text-4xl font-bold text-green-400">{statusCounts.safe}</div>
        <div class="text-sm font-semibold uppercase tracking-wide text-slate-400">{$t('planetaryBoundaries.status.safe')}</div>
      </div>
      
      <div class="rounded-xl border border-slate-500 bg-slate-800/50 p-6 text-center">
        <div class="mb-2 text-4xl font-bold text-slate-400">{statusCounts.uncertain}</div>
        <div class="text-sm font-semibold uppercase tracking-wide text-slate-400">{$t('planetaryBoundaries.status.uncertain')}</div>
      </div>
    </div>
    
    <div class="rounded-xl border border-red-500 bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 text-center">
      <p class="text-xl leading-relaxed text-slate-200">
        {$t('planetaryBoundaries.overview.warning')}
      </p>
    </div>
  </div>
</section>

<!-- The Boundaries -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold text-white">{$t('planetaryBoundaries.boundaries.title')}</h2>
      <p class="text-lg text-slate-400">{$t('planetaryBoundaries.boundaries.subtitle')}</p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each boundaries as boundary, i}
        <button
          onclick={() => selectBoundary(i)}
          class="group relative overflow-hidden rounded-xl border transition-all
            {selectedBoundary === i 
              ? 'border-blue-500 bg-slate-800 shadow-xl' 
              : 'border-slate-700 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800/70'
            }"
        >
          <!-- Status indicator -->
          <div class="absolute right-4 top-4 flex h-3 w-3 items-center justify-center">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full {getStatusColor(boundary.status)} opacity-75"></span>
            <span class="relative inline-flex h-3 w-3 rounded-full {getStatusColor(boundary.status)}"></span>
          </div>
          
          <div class="p-6">
            <div class="mb-4 text-5xl">{boundary.icon}</div>
            
            <h3 class="mb-2 text-left text-xl font-bold text-white">
              {boundary.name}
            </h3>
            
            <div class="mb-3 flex items-center gap-2">
              <span class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide {getStatusColor(boundary.status)} text-white">
                {getStatusText(boundary.status)}
              </span>
            </div>
            
            <div class="mb-3 rounded-lg bg-slate-950/50 p-3 text-left">
              <div class="text-sm text-slate-400">{$t('planetaryBoundaries.current')}</div>
              <div class="font-mono text-lg font-semibold text-blue-300">{boundary.value} {boundary.unit}</div>
              <div class="mt-1 text-xs text-slate-500">{$t('planetaryBoundaries.boundary')}: {boundary.boundary}</div>
            </div>
            
            {#if selectedBoundary === i || showAllDetails}
              <div class="mt-4 space-y-4 border-t border-slate-700 pt-4 text-left">
                <div>
                  <div class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {$t('planetaryBoundaries.description')}
                  </div>
                  <p class="text-sm leading-relaxed text-slate-300">{boundary.description}</p>
                </div>
                
                <div>
                  <div class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {$t('planetaryBoundaries.consequences')}
                  </div>
                  <p class="text-sm leading-relaxed text-slate-300">{boundary.consequences}</p>
                </div>
                
                <div>
                  <div class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {$t('planetaryBoundaries.actions')}
                  </div>
                  <ul class="space-y-1 text-sm text-slate-300">
                    {#each boundary.actions as action}
                      <li class="flex items-start gap-2">
                        <span class="mt-1 text-green-400">→</span>
                        <span>{action}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {:else}
              <div class="mt-3 text-center text-xs text-slate-500">
                {$t('planetaryBoundaries.clickForDetails')}
              </div>
            {/if}
          </div>
        </button>
      {/each}
    </div>
    
    <div class="mt-8 text-center">
      <button
        onclick={toggleShowAll}
        class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
      >
        {showAllDetails ? $t('planetaryBoundaries.hideAll') : $t('planetaryBoundaries.showAll')}
      </button>
    </div>
  </div>
</section>

<!-- Understanding -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('planetaryBoundaries.understanding.title')}</h2>
    
    <div class="mb-8 space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('planetaryBoundaries.understanding.paragraph1')}</p>
      <p>{$t('planetaryBoundaries.understanding.paragraph2')}</p>
      <p>{$t('planetaryBoundaries.understanding.paragraph3')}</p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🎯</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('planetaryBoundaries.understanding.safespace.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.understanding.safespace.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">⚠️</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('planetaryBoundaries.understanding.tipping.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.understanding.tipping.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🔄</div>
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('planetaryBoundaries.understanding.interconnected.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.understanding.interconnected.description')}</p>
      </div>
      
      <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🌍</div>
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('planetaryBoundaries.understanding.onesystem.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.understanding.onesystem.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Good News -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('planetaryBoundaries.goodnews.title')}</h2>
    
    <div class="mb-8 space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('planetaryBoundaries.goodnews.paragraph1')}</p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">✅</div>
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('planetaryBoundaries.goodnews.ozone.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.goodnews.ozone.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">📊</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('planetaryBoundaries.goodnews.awareness.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.goodnews.awareness.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">⚡</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('planetaryBoundaries.goodnews.technology.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.goodnews.technology.description')}</p>
      </div>
      
      <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🌱</div>
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('planetaryBoundaries.goodnews.movements.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.goodnews.movements.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- What You Can Do -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('planetaryBoundaries.whatyoucando.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('planetaryBoundaries.whatyoucando.individual.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.whatyoucando.individual.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('planetaryBoundaries.whatyoucando.collective.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.whatyoucando.collective.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('planetaryBoundaries.whatyoucando.systemic.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.whatyoucando.systemic.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('planetaryBoundaries.whatyoucando.voice.title')}</h3>
        <p class="text-slate-300">{$t('planetaryBoundaries.whatyoucando.voice.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Share Section -->
<section class="bg-slate-900 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <ShareButtons 
      title={$t('toolsPage.tools.planetaryBoundaries.title')}
      description={$t('toolsPage.tools.planetaryBoundaries.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('planetaryBoundaries.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('planetaryBoundaries.quote.author')}</cite>
  </div>
</section>

<!-- Related -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('planetaryBoundaries.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/pillars/challenges"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('planetaryBoundaries.related.challenges.title')}</h3>
        <p class="text-sm text-slate-400">{$t('planetaryBoundaries.related.challenges.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/cosmic-consumption"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🛒</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('planetaryBoundaries.related.consumption.title')}</h3>
        <p class="text-sm text-slate-400">{$t('planetaryBoundaries.related.consumption.description')}</p>
      </a>
      
      <a 
        href="{base}/tools/decision-filter"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🎯</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('planetaryBoundaries.related.decisions.title')}</h3>
        <p class="text-sm text-slate-400">{$t('planetaryBoundaries.related.decisions.description')}</p>
      </a>
    </div>
  </div>
</section>
