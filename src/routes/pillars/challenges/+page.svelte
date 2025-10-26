<!-- src/routes/pillars/challenges/+page.svelte -->
<script lang="ts">
  import { t, currentLanguage } from '$lib/i18n';
  import { base } from '$app/paths';
  
  const topics = $derived([
    {
      title: $t('pillars.challenges.topics.climate.title'),
      slug: 'climate-planetary-boundaries',
      icon: '🌍',
      description: $t('pillars.challenges.topics.climate.description'),
      color: 'green'
    },
    {
      title: $t('pillars.challenges.topics.existential.title'),
      slug: 'existential-risks',
      icon: '⚠️',
      description: $t('pillars.challenges.topics.existential.description'),
      color: 'red'
    },
    {
      title: $t('pillars.challenges.topics.governance.title'),
      slug: 'global-governance',
      icon: '🌐',
      description: $t('pillars.challenges.topics.governance.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.challenges.topics.technology.title'),
      slug: 'technological-ethics',
      icon: '🤖',
      description: $t('pillars.challenges.topics.technology.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.challenges.topics.stewardship.title'),
      slug: 'cosmic-stewardship',
      icon: '🚀',
      description: $t('pillars.challenges.topics.stewardship.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.challenges.topics.inequality.title'),
      slug: 'global-inequality',
      icon: '⚖️',
      description: $t('pillars.challenges.topics.inequality.description'),
      color: 'green'
    }
  ]);
  
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
    green: {
      border: 'border-green-500',
      text: 'text-green-300',
      hover: 'hover:border-green-400'
    },
    red: {
      border: 'border-red-500',
      text: 'text-red-300',
      hover: 'hover:border-red-400'
    }
  };
</script>

<svelte:head>
  <title>{$t('pillars.challenges.meta.title')} - Universalize</title>
  <meta name="description" content={$t('pillars.challenges.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-red-950 via-slate-950 to-slate-900 px-6 py-24">
  <!-- Warning visual effect -->
  <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="warning" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 10 L90 90 L10 90 Z" fill="white" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#warning)" />
    </svg>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🌍</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('pillars.challenges.hero.title')}</h1>
    <p class="mb-8 text-xl text-red-200">
      {$t('pillars.challenges.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('pillars.challenges.hero.description')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.challenges.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.challenges.intro.paragraph1')}</p>
      <p>{@html $t('pillars.challenges.intro.paragraph2')}</p>
      <p>{$t('pillars.challenges.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Why Universal? -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.challenges.whyUniversal.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('pillars.challenges.whyUniversal.planetary.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.whyUniversal.planetary.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.challenges.whyUniversal.interconnected.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.whyUniversal.interconnected.description')}</p>
      </div>
      
      <div class="rounded-xl border border-red-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-red-300">{$t('pillars.challenges.whyUniversal.existential.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.whyUniversal.existential.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.challenges.whyUniversal.responsibility.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.whyUniversal.responsibility.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Topics -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-3xl font-bold text-white">{$t('pillars.challenges.topicsTitle')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('pillars.challenges.topicsSubtitle')}
    </p>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each topics as topic}
        {@const colors = colorClasses[topic.color]}
        <a 
          href={`${base}/pillars/challenges/topics/${topic.slug}`}
          class="group rounded-xl border {colors.border} bg-slate-800/50 p-8 transition {colors.hover} hover:bg-slate-700"
        >
          <div class="mb-4 text-5xl">{topic.icon}</div>
          <h3 class="mb-3 text-2xl font-bold {colors.text} group-hover:brightness-110">
            {topic.title}
          </h3>
          <p class="leading-relaxed text-slate-300">
            {topic.description}
          </p>
          <div class="mt-4 flex items-center gap-2 text-sm {colors.text}">
            <span>{$t('pillars.challenges.readMore')}</span>
            <span>→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- The Great Turning -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.challenges.greatTurning.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.challenges.greatTurning.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('pillars.challenges.greatTurning.choice.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('pillars.challenges.greatTurning.choice.collapse')}</strong></p>
          <p><strong class="text-white">{$t('pillars.challenges.greatTurning.choice.stagnation')}</strong></p>
          <p><strong class="text-white">{$t('pillars.challenges.greatTurning.choice.flourishing')}</strong></p>
        </div>
      </div>
      
      <p>{$t('pillars.challenges.greatTurning.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Action -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.challenges.action.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('pillars.challenges.action.individual.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.action.individual.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.challenges.action.collective.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.action.collective.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.challenges.action.systemic.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.action.systemic.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-red-300">{$t('pillars.challenges.action.cultural.title')}</h3>
        <p class="text-slate-300">{$t('pillars.challenges.action.cultural.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('pillars.challenges.quote.text')}"
    </blockquote>
    <cite class="text-lg text-green-400">— {$t('pillars.challenges.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.challenges.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="https://globalgovernanceframeworks.org"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌐</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('pillars.challenges.related.ggf')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.challenges.related.ggfDesc')}</p>
      </a>
      
      <a 
        href="{base}/tools/planetary-boundaries"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('pillars.challenges.related.boundaries')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.challenges.related.boundariesDesc')}</p>
      </a>
      
      <a 
        href="{base}/practices/cosmic-consumption"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🛒</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('pillars.challenges.related.consumption')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.challenges.related.consumptionDesc')}</p>
      </a>
    </div>
  </div>
</section>
