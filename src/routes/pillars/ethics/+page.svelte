<!-- src/routes/pillars/ethics/+page.svelte -->
<script lang="ts">
  import { t, currentLanguage } from '$lib/i18n';
  import { base } from '$app/paths';
  
  const topics = $derived([
    {
      title: $t('pillars.ethics.topics.humanRights.title'),
      slug: 'human-rights',
      icon: '⚖️',
      description: $t('pillars.ethics.topics.humanRights.description'),
      color: 'green'
    },
    {
      title: $t('pillars.ethics.topics.rightsOfNature.title'),
      slug: 'rights-of-nature',
      icon: '🌿',
      description: $t('pillars.ethics.topics.rightsOfNature.description'),
      color: 'green'
    },
    {
      title: $t('pillars.ethics.topics.animalRights.title'),
      slug: 'animal-rights',
      icon: '🐾',
      description: $t('pillars.ethics.topics.animalRights.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.ethics.topics.futureGenerations.title'),
      slug: 'future-generations',
      icon: '👶',
      description: $t('pillars.ethics.topics.futureGenerations.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.ethics.topics.aiEthics.title'),
      slug: 'ai-ethics',
      icon: '🤖',
      description: $t('pillars.ethics.topics.aiEthics.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.ethics.topics.globalGovernance.title'),
      slug: 'global-governance',
      icon: '🌐',
      description: $t('pillars.ethics.topics.globalGovernance.description'),
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
    }
  };
</script>

<svelte:head>
  <title>{$t('pillars.ethics.meta.title')} - Universalize</title>
  <meta name="description" content={$t('pillars.ethics.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-green-950 via-emerald-950 to-slate-900 px-6 py-24">
  <!-- Decorative background pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="ethics-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="25" cy="25" r="2" fill="white" opacity="0.3" />
          <line x1="25" y1="0" x2="25" y2="50" stroke="white" stroke-width="0.5" opacity="0.2" />
          <line x1="0" y1="25" x2="50" y2="25" stroke="white" stroke-width="0.5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ethics-grid)" />
    </svg>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">💚</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('pillars.ethics.hero.title')}</h1>
    <p class="mb-8 text-xl text-green-200">
      {$t('pillars.ethics.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('pillars.ethics.hero.description')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.ethics.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.ethics.intro.paragraph1')}</p>
      <p>{@html $t('pillars.ethics.intro.paragraph2')}</p>
      <p>{$t('pillars.ethics.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Expanding Circle -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.ethics.expandingCircle.title')}</h2>
    
    <div class="space-y-4">
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">👥</div>
          <h3 class="text-xl font-bold text-green-300">{$t('pillars.ethics.expandingCircle.family.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.ethics.expandingCircle.family.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🏛️</div>
          <h3 class="text-xl font-bold text-green-300">{$t('pillars.ethics.expandingCircle.nation.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.ethics.expandingCircle.nation.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🌍</div>
          <h3 class="text-xl font-bold text-green-300">{$t('pillars.ethics.expandingCircle.humanity.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.ethics.expandingCircle.humanity.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🐾</div>
          <h3 class="text-xl font-bold text-blue-300">{$t('pillars.ethics.expandingCircle.sentient.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.ethics.expandingCircle.sentient.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🌌</div>
          <h3 class="text-xl font-bold text-purple-300">{$t('pillars.ethics.expandingCircle.universal.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.ethics.expandingCircle.universal.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Topics -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-3xl font-bold text-white">{$t('pillars.ethics.topicsTitle')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('pillars.ethics.topicsSubtitle')}
    </p>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each topics as topic}
        {@const colors = colorClasses[topic.color]}
        <a 
          href={`${base}/pillars/ethics/topics/${topic.slug}`}
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
            <span>{$t('pillars.ethics.readMore')}</span>
            <span>→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Key Principles -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.ethics.principles.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.ethics.principles.paragraph1')}</p>
      
      <div class="my-8 space-y-4">
        <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-green-300">{$t('pillars.ethics.principles.recognition.title')}</h3>
          <p class="text-slate-300">{$t('pillars.ethics.principles.recognition.description')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.ethics.principles.consideration.title')}</h3>
          <p class="text-slate-300">{$t('pillars.ethics.principles.consideration.description')}</p>
        </div>
        
        <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.ethics.principles.responsibility.title')}</h3>
          <p class="text-slate-300">{$t('pillars.ethics.principles.responsibility.description')}</p>
        </div>
        
        <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-green-300">{$t('pillars.ethics.principles.humility.title')}</h3>
          <p class="text-slate-300">{$t('pillars.ethics.principles.humility.description')}</p>
        </div>
      </div>
      
      <p>{$t('pillars.ethics.principles.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.ethics.practices.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('pillars.ethics.practices.examine.title')}</h3>
        <p class="text-slate-300">{$t('pillars.ethics.practices.examine.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.ethics.practices.consume.title')}</h3>
        <p class="text-slate-300">{$t('pillars.ethics.practices.consume.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.ethics.practices.voice.title')}</h3>
        <p class="text-slate-300">{$t('pillars.ethics.practices.voice.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('pillars.ethics.practices.engage.title')}</h3>
        <p class="text-slate-300">{$t('pillars.ethics.practices.engage.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('pillars.ethics.quote.text')}"
    </blockquote>
    <cite class="text-lg text-green-400">— {$t('pillars.ethics.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.ethics.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/explore/expanding-circles"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔄</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('pillars.ethics.related.expandingCircles')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.ethics.related.expandingCirclesDesc')}</p>
      </a>
      
      <a 
        href="{base}/tools/decision-filter"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🎯</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('pillars.ethics.related.decisionFilter')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.ethics.related.decisionFilterDesc')}</p>
      </a>
      
      <a 
        href="{base}/practices/cosmic-consumption"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🛒</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('pillars.ethics.related.cosmicConsumption')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.ethics.related.cosmicConsumptionDesc')}</p>
      </a>
    </div>
  </div>
</section>
