<script lang="ts">
  import { t } from '$lib/i18n';
  
  const timeScales = $derived([
    {
      title: $t('deepTime.scales.cosmic.title'),
      age: $t('deepTime.scales.cosmic.age'),
      icon: '🌌',
      description: $t('deepTime.scales.cosmic.description')
    },
    {
      title: $t('deepTime.scales.earth.title'),
      age: $t('deepTime.scales.earth.age'),
      icon: '🌍',
      description: $t('deepTime.scales.earth.description')
    },
    {
      title: $t('deepTime.scales.life.title'),
      age: $t('deepTime.scales.life.age'),
      icon: '🦠',
      description: $t('deepTime.scales.life.description')
    },
    {
      title: $t('deepTime.scales.animals.title'),
      age: $t('deepTime.scales.animals.age'),
      icon: '🐟',
      description: $t('deepTime.scales.animals.description')
    },
    {
      title: $t('deepTime.scales.humans.title'),
      age: $t('deepTime.scales.humans.age'),
      icon: '🧍',
      description: $t('deepTime.scales.humans.description')
    },
    {
      title: $t('deepTime.scales.civilization.title'),
      age: $t('deepTime.scales.civilization.age'),
      icon: '🏛️',
      description: $t('deepTime.scales.civilization.description')
    }
  ]);
  
  const analogies = $derived([
    {
      title: $t('deepTime.analogies.calendar.title'),
      description: $t('deepTime.analogies.calendar.description')
    },
    {
      title: $t('deepTime.analogies.clock.title'),
      description: $t('deepTime.analogies.clock.description')
    },
    {
      title: $t('deepTime.analogies.timeline.title'),
      description: $t('deepTime.analogies.timeline.description')
    }
  ]);
</script>

<svelte:head>
  <title>{$t('deepTime.meta.title')} - Universalize</title>
  <meta name="description" content={$t('deepTime.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-purple-950 via-slate-950 to-slate-900 px-6 py-24">
  <!-- Timeline visual effect -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"></div>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">⏳</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('deepTime.hero.title')}</h1>
    <p class="mb-8 text-xl text-purple-200">
      {$t('deepTime.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('deepTime.hero.description')}
    </p>
  </div>
</section>

<!-- What is Deep Time -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{@html $t('deepTime.what.paragraph1')}</p>
      <p>{$t('deepTime.what.paragraph2')}</p>
      <p>{@html $t('deepTime.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Time Scales -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('deepTime.scalesTitle')}</h2>
    
    <div class="space-y-6">
      {#each timeScales as scale, index}
        {@const colors = ['from-purple-900/30', 'from-blue-900/30', 'from-cyan-900/30', 'from-green-900/30', 'from-yellow-900/30', 'from-orange-900/30']}
        <div class="rounded-xl border border-slate-700 bg-gradient-to-br {colors[index]} to-slate-900/30 p-8">
          <div class="flex flex-col gap-6 md:flex-row md:items-center">
            <div class="text-6xl">{scale.icon}</div>
            <div class="flex-1">
              <div class="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 class="text-2xl font-bold text-white">{scale.title}</h3>
                <span class="text-lg font-semibold text-purple-300">{scale.age}</span>
              </div>
              <p class="text-slate-300">{scale.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Making it Comprehensible -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.analogiesTitle')}</h2>
    <p class="mb-8 text-lg text-slate-300">
      {$t('deepTime.analogiesIntro')}
    </p>
    
    <div class="space-y-6">
      {#each analogies as analogy}
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{analogy.title}</h3>
          <p class="text-slate-300">{analogy.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Why It Matters -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.matters.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('deepTime.matters.paragraph1')}</p>
      <p>{$t('deepTime.matters.paragraph2')}</p>
      
      <div class="my-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('deepTime.matters.insights.humility.title')}</h3>
          <p class="text-slate-300">{$t('deepTime.matters.insights.humility.description')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('deepTime.matters.insights.context.title')}</h3>
          <p class="text-slate-300">{$t('deepTime.matters.insights.context.description')}</p>
        </div>
        
        <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-green-300">{$t('deepTime.matters.insights.responsibility.title')}</h3>
          <p class="text-slate-300">{$t('deepTime.matters.insights.responsibility.description')}</p>
        </div>
        
        <div class="rounded-xl border border-orange-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-orange-300">{$t('deepTime.matters.insights.patience.title')}</h3>
          <p class="text-slate-300">{$t('deepTime.matters.insights.patience.description')}</p>
        </div>
      </div>
      
      <p>{$t('deepTime.matters.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Last Pixel -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('deepTime.lastPixel.title')}</h2>
    
    <div class="mb-8 rounded-xl border border-slate-700 bg-slate-800/50 p-8">
      <p class="mb-6 text-lg leading-relaxed text-slate-300">
        {$t('deepTime.lastPixel.setup')}
      </p>
      
      <!-- Visual representation -->
      <div class="mb-6 overflow-hidden rounded-lg bg-slate-950">
        <div class="flex h-12 items-center">
          <div class="h-full flex-1 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900"></div>
          <div class="h-full w-1 bg-yellow-500"></div>
        </div>
        <div class="flex justify-between px-2 py-2 text-xs text-slate-400">
          <span>{$t('deepTime.lastPixel.earthForms')}</span>
          <span>{$t('deepTime.lastPixel.now')}</span>
        </div>
      </div>
      
      <p class="text-lg font-semibold text-purple-300">
        {$t('deepTime.lastPixel.revelation')}
      </p>
    </div>
    
    <p class="text-center text-lg italic text-slate-300">
      {$t('deepTime.lastPixel.reflection')}
    </p>
  </div>
</section>

<!-- Deep Time Governance -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.governance.title')}</h2>
    
    <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
      <div class="mb-6 flex items-start gap-4">
        <img src="/logo-ggf.svg" alt="Global Governance Frameworks" class="h-16 w-16" />
        <div>
          <h3 class="mb-2 text-2xl font-bold text-blue-300">{$t('deepTime.governance.framework.title')}</h3>
          <a 
            href="https://globalgovernanceframeworks.org/frameworks/deep-time-governance"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-blue-400 hover:text-blue-300"
          >
            {$t('deepTime.governance.framework.link')} →
          </a>
        </div>
      </div>
      
      <div class="space-y-4 text-slate-300">
        <p>{$t('deepTime.governance.framework.description')}</p>
        <p>{@html $t('deepTime.governance.framework.questions')}</p>
        <p>{$t('deepTime.governance.framework.conclusion')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Practicing Deep Time Awareness -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.practice.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('deepTime.practice.methods.rocks.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.practice.methods.rocks.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('deepTime.practice.methods.fossils.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.practice.methods.fossils.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('deepTime.practice.methods.trees.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.practice.methods.trees.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('deepTime.practice.methods.meditation.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.practice.methods.meditation.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('deepTime.practice.methods.future.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.practice.methods.future.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('deepTime.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('deepTime.quote.author')}</cite>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('deepTime.cta.title')}</h2>
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('deepTime.cta.description')}
    </p>
    
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="/tools/deep-time"
        class="rounded-lg bg-purple-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-purple-500"
      >
        {$t('deepTime.cta.tool')}
      </a>
      <a 
        href="/practices/scale-shifting"
        class="rounded-lg border-2 border-purple-400 px-8 py-3 text-lg font-semibold text-purple-200 transition hover:bg-purple-900/30"
      >
        {$t('deepTime.cta.practice')}
      </a>
    </div>
  </div>
</section>
