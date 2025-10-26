<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  
  const patterns = $derived([
    {
      title: $t('universalPatterns.patterns.fractals.title'),
      icon: '🌿',
      description: $t('universalPatterns.patterns.fractals.description'),
      examples: $t('universalPatterns.patterns.fractals.examples'),
      color: 'green'
    },
    {
      title: $t('universalPatterns.patterns.networks.title'),
      icon: '🕸️',
      description: $t('universalPatterns.patterns.networks.description'),
      examples: $t('universalPatterns.patterns.networks.examples'),
      color: 'blue'
    },
    {
      title: $t('universalPatterns.patterns.cycles.title'),
      icon: '🔄',
      description: $t('universalPatterns.patterns.cycles.description'),
      examples: $t('universalPatterns.patterns.cycles.examples'),
      color: 'purple'
    },
    {
      title: $t('universalPatterns.patterns.emergence.title'),
      icon: '✨',
      description: $t('universalPatterns.patterns.emergence.description'),
      examples: $t('universalPatterns.patterns.emergence.examples'),
      color: 'blue'
    },
    {
      title: $t('universalPatterns.patterns.symmetry.title'),
      icon: '⚖️',
      description: $t('universalPatterns.patterns.symmetry.description'),
      examples: $t('universalPatterns.patterns.symmetry.examples'),
      color: 'purple'
    },
    {
      title: $t('universalPatterns.patterns.flows.title'),
      icon: '🌊',
      description: $t('universalPatterns.patterns.flows.description'),
      examples: $t('universalPatterns.patterns.flows.examples'),
      color: 'blue'
    }
  ]);
  
  const laws = $derived([
    {
      law: $t('universalPatterns.laws.thermodynamics.law'),
      description: $t('universalPatterns.laws.thermodynamics.description'),
      implication: $t('universalPatterns.laws.thermodynamics.implication')
    },
    {
      law: $t('universalPatterns.laws.powerLaw.law'),
      description: $t('universalPatterns.laws.powerLaw.description'),
      implication: $t('universalPatterns.laws.powerLaw.implication')
    },
    {
      law: $t('universalPatterns.laws.selection.law'),
      description: $t('universalPatterns.laws.selection.description'),
      implication: $t('universalPatterns.laws.selection.implication')
    }
  ]);
  
  const colorClasses = {
    blue: 'border-blue-500 text-blue-300',
    purple: 'border-purple-500 text-purple-300',
    green: 'border-green-500 text-green-300'
  };
</script>

<svelte:head>
  <title>{$t('universalPatterns.meta.title')} - Universalize</title>
  <meta name="description" content={$t('universalPatterns.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-purple-950 via-slate-950 to-slate-900 px-6 py-24">
  <!-- Pattern visual effect -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute left-0 top-0 h-full w-full" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(147, 51, 234, 0.3) 35px, rgba(147, 51, 234, 0.3) 70px);"></div>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🌐</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('universalPatterns.hero.title')}</h1>
    <p class="mb-8 text-xl text-purple-200">
      {$t('universalPatterns.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('universalPatterns.hero.description')}
    </p>
  </div>
</section>

<!-- What Are Universal Patterns -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universalPatterns.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('universalPatterns.what.paragraph1')}</p>
      <p>{@html $t('universalPatterns.what.paragraph2')}</p>
      <p>{$t('universalPatterns.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Key Patterns -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('universalPatterns.patternsTitle')}</h2>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each patterns as pattern}
        <div class="rounded-xl border {colorClasses[pattern.color]} bg-slate-900/50 p-8">
          <div class="mb-4 text-5xl">{pattern.icon}</div>
          <h3 class="mb-3 text-2xl font-bold {colorClasses[pattern.color]}">{pattern.title}</h3>
          <p class="mb-4 leading-relaxed text-slate-300">{pattern.description}</p>
          <div class="rounded-lg bg-slate-800/50 p-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {$t('universalPatterns.examplesLabel')}
            </div>
            <p class="text-sm text-slate-300">{pattern.examples}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Scale-Free Principles -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universalPatterns.scaleFree.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('universalPatterns.scaleFree.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-800/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('universalPatterns.scaleFree.example.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.quantum')}</strong></p>
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.atomic')}</strong></p>
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.cellular')}</strong></p>
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.neural')}</strong></p>
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.social')}</strong></p>
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.ecological')}</strong></p>
          <p><strong class="text-white">{$t('universalPatterns.scaleFree.example.cosmic')}</strong></p>
        </div>
      </div>
      
      <p>{$t('universalPatterns.scaleFree.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Universal Laws -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universalPatterns.lawsTitle')}</h2>
    <p class="mb-8 text-lg text-slate-300">
      {$t('universalPatterns.lawsIntro')}
    </p>
    
    <div class="space-y-6">
      {#each laws as item}
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{item.law}</h3>
          <p class="mb-3 text-slate-300">{item.description}</p>
          <div class="rounded-lg bg-slate-800/50 p-4">
            <div class="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {$t('universalPatterns.implicationLabel')}
            </div>
            <p class="text-sm text-slate-300">{item.implication}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- The Golden Ratio -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universalPatterns.goldenRatio.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('universalPatterns.goldenRatio.paragraph1')}</p>
      
      <div class="my-8 flex justify-center">
        <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-8">
          <div class="mb-4 text-center text-6xl font-bold text-yellow-300">φ ≈ 1.618</div>
          <p class="text-center text-sm text-slate-400">{$t('universalPatterns.goldenRatio.formula')}</p>
        </div>
      </div>
      
      <p>{$t('universalPatterns.goldenRatio.paragraph2')}</p>
      
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <h4 class="mb-2 font-bold text-yellow-300">{$t('universalPatterns.goldenRatio.nature.title')}</h4>
          <p class="text-sm text-slate-300">{$t('universalPatterns.goldenRatio.nature.examples')}</p>
        </div>
        <div class="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
          <h4 class="mb-2 font-bold text-yellow-300">{$t('universalPatterns.goldenRatio.art.title')}</h4>
          <p class="text-sm text-slate-300">{$t('universalPatterns.goldenRatio.art.examples')}</p>
        </div>
      </div>
      
      <p>{$t('universalPatterns.goldenRatio.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Why Patterns Matter -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universalPatterns.matters.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('universalPatterns.matters.paragraph1')}</p>
      
      <div class="my-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('universalPatterns.matters.insights.unity.title')}</h3>
          <p class="text-slate-300">{$t('universalPatterns.matters.insights.unity.description')}</p>
        </div>
        
        <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('universalPatterns.matters.insights.prediction.title')}</h3>
          <p class="text-slate-300">{$t('universalPatterns.matters.insights.prediction.description')}</p>
        </div>
        
        <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-green-300">{$t('universalPatterns.matters.insights.design.title')}</h3>
          <p class="text-slate-300">{$t('universalPatterns.matters.insights.design.description')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('universalPatterns.matters.insights.humility.title')}</h3>
          <p class="text-slate-300">{$t('universalPatterns.matters.insights.humility.description')}</p>
        </div>
      </div>
      
      <p>{$t('universalPatterns.matters.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Exploring Patterns -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universalPatterns.explore.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('universalPatterns.explore.methods.observe.title')}</h3>
        <p class="text-slate-300">{$t('universalPatterns.explore.methods.observe.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('universalPatterns.explore.methods.study.title')}</h3>
        <p class="text-slate-300">{$t('universalPatterns.explore.methods.study.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('universalPatterns.explore.methods.simulate.title')}</h3>
        <p class="text-slate-300">{$t('universalPatterns.explore.methods.simulate.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('universalPatterns.explore.methods.analogies.title')}</h3>
        <p class="text-slate-300">{$t('universalPatterns.explore.methods.analogies.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('universalPatterns.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('universalPatterns.quote.author')}</cite>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('universalPatterns.cta.title')}</h2>
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('universalPatterns.cta.description')}
    </p>
    
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="{base}/tools/emergence"
        class="rounded-lg bg-purple-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-purple-500"
      >
        {$t('universalPatterns.cta.simulator')}
      </a>
      <a 
        href="{base}/pillars/patterns"
        class="rounded-lg border-2 border-purple-400 px-8 py-3 text-lg font-semibold text-purple-200 transition hover:bg-purple-900/30"
      >
        {$t('universalPatterns.cta.pillar')}
      </a>
    </div>
  </div>
</section>
