<script lang="ts">
  import { t } from '$lib/i18n';
  
  const historicalExpansions = $derived([
    {
      era: $t('expandingCircles.history.0.era'),
      circle: $t('expandingCircles.history.0.circle'),
      icon: '👥',
      description: $t('expandingCircles.history.0.description')
    },
    {
      era: $t('expandingCircles.history.1.era'),
      circle: $t('expandingCircles.history.1.circle'),
      icon: '🏛️',
      description: $t('expandingCircles.history.1.description')
    },
    {
      era: $t('expandingCircles.history.2.era'),
      circle: $t('expandingCircles.history.2.circle'),
      icon: '⚖️',
      description: $t('expandingCircles.history.2.description')
    },
    {
      era: $t('expandingCircles.history.3.era'),
      circle: $t('expandingCircles.history.3.circle'),
      icon: '🌍',
      description: $t('expandingCircles.history.3.description')
    },
    {
      era: $t('expandingCircles.history.4.era'),
      circle: $t('expandingCircles.history.4.circle'),
      icon: '🌿',
      description: $t('expandingCircles.history.4.description')
    },
    {
      era: $t('expandingCircles.history.5.era'),
      circle: $t('expandingCircles.history.5.circle'),
      icon: '🌌',
      description: $t('expandingCircles.history.5.description')
    }
  ]);
  
  const currentFrontiers = $derived([
    {
      title: $t('expandingCircles.frontiers.animals.title'),
      icon: '🐘',
      description: $t('expandingCircles.frontiers.animals.description'),
      examples: $t('expandingCircles.frontiers.animals.examples')
    },
    {
      title: $t('expandingCircles.frontiers.ecosystems.title'),
      icon: '🌳',
      description: $t('expandingCircles.frontiers.ecosystems.description'),
      examples: $t('expandingCircles.frontiers.ecosystems.examples')
    },
    {
      title: $t('expandingCircles.frontiers.future.title'),
      icon: '👶',
      description: $t('expandingCircles.frontiers.future.description'),
      examples: $t('expandingCircles.frontiers.future.examples')
    },
    {
      title: $t('expandingCircles.frontiers.ai.title'),
      icon: '🤖',
      description: $t('expandingCircles.frontiers.ai.description'),
      examples: $t('expandingCircles.frontiers.ai.examples')
    }
  ]);
</script>

<svelte:head>
  <title>{$t('expandingCircles.meta.title')} - Universalize</title>
  <meta name="description" content={$t('expandingCircles.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-green-950 via-slate-950 to-slate-900 px-6 py-24">
  <!-- Expanding circles visual effect -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500"></div>
    <div class="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500"></div>
    <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-500"></div>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">💚</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('expandingCircles.hero.title')}</h1>
    <p class="mb-8 text-xl text-green-200">
      {$t('expandingCircles.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('expandingCircles.hero.description')}
    </p>
  </div>
</section>

<!-- What Are Expanding Circles -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('expandingCircles.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('expandingCircles.what.paragraph1')}</p>
      <p>{@html $t('expandingCircles.what.paragraph2')}</p>
      <p>{$t('expandingCircles.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Historical Expansions -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('expandingCircles.historyTitle')}</h2>
    
    <div class="space-y-6">
      {#each historicalExpansions as expansion, index}
        {@const colors = ['from-purple-900/30', 'from-blue-900/30', 'from-cyan-900/30', 'from-green-900/30', 'from-lime-900/30', 'from-emerald-900/30']}
        <div class="rounded-xl border border-slate-700 bg-gradient-to-br {colors[index]} to-slate-900/30 p-8">
          <div class="flex flex-col gap-6 md:flex-row md:items-start">
            <div class="text-6xl">{expansion.icon}</div>
            <div class="flex-1">
              <div class="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 class="text-2xl font-bold text-white">{expansion.circle}</h3>
                <span class="text-lg font-semibold text-green-300">{expansion.era}</span>
              </div>
              <p class="text-slate-300">{expansion.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- The Pattern -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('expandingCircles.pattern.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('expandingCircles.pattern.paragraph1')}</p>
      
      <div class="my-8 grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
          <div class="mb-3 text-4xl">👁️</div>
          <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('expandingCircles.pattern.steps.recognition.title')}</h3>
          <p class="text-sm text-slate-400">{$t('expandingCircles.pattern.steps.recognition.description')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
          <div class="mb-3 text-4xl">💭</div>
          <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('expandingCircles.pattern.steps.empathy.title')}</h3>
          <p class="text-sm text-slate-400">{$t('expandingCircles.pattern.steps.empathy.description')}</p>
        </div>
        
        <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
          <div class="mb-3 text-4xl">⚖️</div>
          <h3 class="mb-2 text-xl font-bold text-green-300">{$t('expandingCircles.pattern.steps.rights.title')}</h3>
          <p class="text-sm text-slate-400">{$t('expandingCircles.pattern.steps.rights.description')}</p>
        </div>
      </div>
      
      <p>{$t('expandingCircles.pattern.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Current Frontiers -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('expandingCircles.frontiersTitle')}</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      {#each currentFrontiers as frontier}
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-8">
          <div class="mb-4 text-5xl">{frontier.icon}</div>
          <h3 class="mb-3 text-2xl font-bold text-green-300">{frontier.title}</h3>
          <p class="mb-4 leading-relaxed text-slate-300">{frontier.description}</p>
          <div class="rounded-lg bg-slate-800/50 p-4">
            <div class="text-sm font-semibold text-slate-400">{$t('expandingCircles.examples')}</div>
            <p class="text-sm text-slate-300">{frontier.examples}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Moral Operating System -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('expandingCircles.mos.title')}</h2>
    
    <div class="rounded-xl border border-green-500 bg-gradient-to-br from-green-900/30 to-blue-900/30 p-8">
      <div class="mb-6 flex items-start gap-4">
        <img src="/logo-ggf.svg" alt="Global Governance Frameworks" class="h-16 w-16" />
        <div>
          <h3 class="mb-2 text-2xl font-bold text-green-300">{$t('expandingCircles.mos.framework.title')}</h3>
          <a 
            href="https://globalgovernanceframeworks.org/frameworks/moral-operating-system"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-green-400 hover:text-green-300"
          >
            {$t('expandingCircles.mos.framework.link')} →
          </a>
        </div>
      </div>
      
      <div class="space-y-4 text-slate-300">
        <p>{@html $t('expandingCircles.mos.framework.description')}</p>
        <p>{$t('expandingCircles.mos.framework.spectrum')}</p>
        
        <div class="my-6 rounded-lg bg-slate-800/50 p-6">
          <h4 class="mb-4 font-bold text-green-300">{$t('expandingCircles.mos.framework.tiers.title')}</h4>
          <div class="space-y-3 text-sm">
            <div><strong class="text-white">{$t('expandingCircles.mos.framework.tiers.tier0')}</strong></div>
            <div><strong class="text-white">{$t('expandingCircles.mos.framework.tiers.tier1')}</strong></div>
            <div><strong class="text-white">{$t('expandingCircles.mos.framework.tiers.tier2')}</strong></div>
            <div><strong class="text-white">{$t('expandingCircles.mos.framework.tiers.tier3')}</strong></div>
            <div><strong class="text-white">{$t('expandingCircles.mos.framework.tiers.tier4')}</strong></div>
            <div><strong class="text-white">{$t('expandingCircles.mos.framework.tiers.tier5')}</strong></div>
          </div>
        </div>
        
        <p>{$t('expandingCircles.mos.framework.conclusion')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Resistance and Progress -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('expandingCircles.resistance.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('expandingCircles.resistance.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-4 text-xl font-bold text-green-300">{$t('expandingCircles.resistance.objections.title')}</h3>
        <ul class="space-y-3">
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <div>
              <strong class="text-white">{$t('expandingCircles.resistance.objections.natural.title')}</strong>
              <p class="text-sm text-slate-400">{$t('expandingCircles.resistance.objections.natural.response')}</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <div>
              <strong class="text-white">{$t('expandingCircles.resistance.objections.practical.title')}</strong>
              <p class="text-sm text-slate-400">{$t('expandingCircles.resistance.objections.practical.response')}</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <div>
              <strong class="text-white">{$t('expandingCircles.resistance.objections.different.title')}</strong>
              <p class="text-sm text-slate-400">{$t('expandingCircles.resistance.objections.different.response')}</p>
            </div>
          </li>
        </ul>
      </div>
      
      <p>{$t('expandingCircles.resistance.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('expandingCircles.quote.text')}"
    </blockquote>
    <cite class="text-lg text-green-400">— {$t('expandingCircles.quote.author')}</cite>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('expandingCircles.cta.title')}</h2>
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('expandingCircles.cta.description')}
    </p>
    
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="/pillars/ethics"
        class="rounded-lg bg-green-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-green-500"
      >
        {$t('expandingCircles.cta.ethics')}
      </a>
      <a 
        href="https://globalgovernanceframeworks.org/frameworks/moral-operating-system"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-lg border-2 border-green-400 px-8 py-3 text-lg font-semibold text-green-200 transition hover:bg-green-900/30"
      >
        {$t('expandingCircles.cta.mos')}
      </a>
    </div>
  </div>
</section>
