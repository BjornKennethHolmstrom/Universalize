<!-- src/routes/pillars/patterns/+page.svelte -->
<script lang="ts">
  import { t, currentLanguage } from '$lib/i18n';
  
  const topics = $derived([
    {
      title: $t('pillars.patterns.topics.fractals.title'),
      slug: 'fractals',
      icon: '🌀',
      description: $t('pillars.patterns.topics.fractals.description'),
      color: 'teal'
    },
    {
      title: $t('pillars.patterns.topics.feedbackLoops.title'),
      slug: 'feedback-loops',
      icon: '🔄',
      description: $t('pillars.patterns.topics.feedbackLoops.description'),
      color: 'emerald'
    },
    {
      title: $t('pillars.patterns.topics.emergence.title'),
      slug: 'emergence',
      icon: '✨',
      description: $t('pillars.patterns.topics.emergence.description'),
      color: 'cyan'
    },
    {
      title: $t('pillars.patterns.topics.cycles.title'),
      slug: 'cycles',
      icon: '🔁',
      description: $t('pillars.patterns.topics.cycles.description'),
      color: 'teal'
    },
    {
      title: $t('pillars.patterns.topics.hierarchies.title'),
      slug: 'hierarchies',
      icon: '📊',
      description: $t('pillars.patterns.topics.hierarchies.description'),
      color: 'emerald'
    },
    {
      title: $t('pillars.patterns.topics.networks.title'),
      slug: 'networks',
      icon: '🕸️',
      description: $t('pillars.patterns.topics.networks.description'),
      color: 'cyan'
    }
  ]);
  
  const colorClasses = {
    teal: {
      border: 'border-teal-500',
      text: 'text-teal-300',
      hover: 'hover:border-teal-400'
    },
    emerald: {
      border: 'border-emerald-500',
      text: 'text-emerald-300',
      hover: 'hover:border-emerald-400'
    },
    cyan: {
      border: 'border-cyan-500',
      text: 'text-cyan-300',
      hover: 'hover:border-cyan-400'
    }
  };
</script>

<svelte:head>
  <title>{$t('pillars.patterns.meta.title')} - Universalize</title>
  <meta name="description" content={$t('pillars.patterns.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-teal-950 via-emerald-950 to-slate-900 px-6 py-24">
  <!-- Decorative background pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="patterns-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="none" stroke="white" stroke-width="0.5" opacity="0.3" />
          <circle cx="30" cy="30" r="3" fill="white" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#patterns-grid)" />
    </svg>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🌀</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('pillars.patterns.hero.title')}</h1>
    <p class="mb-8 text-xl text-teal-200">
      {$t('pillars.patterns.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('pillars.patterns.hero.description')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.patterns.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.patterns.intro.paragraph1')}</p>
      <p>{@html $t('pillars.patterns.intro.paragraph2')}</p>
      <p>{$t('pillars.patterns.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Pattern Examples -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.patterns.examples.title')}</h2>
    
    <div class="space-y-4">
      <div class="rounded-xl border border-teal-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🌿</div>
          <h3 class="text-xl font-bold text-teal-300">{$t('pillars.patterns.examples.branching.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.patterns.examples.branching.description')}</p>
      </div>
      
      <div class="rounded-xl border border-emerald-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">⚖️</div>
          <h3 class="text-xl font-bold text-emerald-300">{$t('pillars.patterns.examples.balance.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.patterns.examples.balance.description')}</p>
      </div>
      
      <div class="rounded-xl border border-cyan-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🔄</div>
          <h3 class="text-xl font-bold text-cyan-300">{$t('pillars.patterns.examples.transformation.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.patterns.examples.transformation.description')}</p>
      </div>
      
      <div class="rounded-xl border border-teal-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">📈</div>
          <h3 class="text-xl font-bold text-teal-300">{$t('pillars.patterns.examples.growth.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.patterns.examples.growth.description')}</p>
      </div>
      
      <div class="rounded-xl border border-emerald-500 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🌊</div>
          <h3 class="text-xl font-bold text-emerald-300">{$t('pillars.patterns.examples.waves.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('pillars.patterns.examples.waves.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Topics -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-3xl font-bold text-white">{$t('pillars.patterns.topicsTitle')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('pillars.patterns.topicsSubtitle')}
    </p>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each topics as topic}
        {@const colors = colorClasses[topic.color]}
        <a 
          href={`/pillars/patterns/topics/${topic.slug}`}
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
            <span>{$t('pillars.patterns.readMore')}</span>
            <span>→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Why Patterns Matter -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.patterns.whyMatter.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.patterns.whyMatter.paragraph1')}</p>
      
      <div class="my-8 space-y-4">
        <div class="rounded-xl border border-teal-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-teal-300">{$t('pillars.patterns.whyMatter.understanding.title')}</h3>
          <p class="text-slate-300">{$t('pillars.patterns.whyMatter.understanding.description')}</p>
        </div>
        
        <div class="rounded-xl border border-emerald-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-emerald-300">{$t('pillars.patterns.whyMatter.prediction.title')}</h3>
          <p class="text-slate-300">{$t('pillars.patterns.whyMatter.prediction.description')}</p>
        </div>
        
        <div class="rounded-xl border border-cyan-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-cyan-300">{$t('pillars.patterns.whyMatter.design.title')}</h3>
          <p class="text-slate-300">{$t('pillars.patterns.whyMatter.design.description')}</p>
        </div>
        
        <div class="rounded-xl border border-teal-500 bg-slate-900/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-teal-300">{$t('pillars.patterns.whyMatter.wisdom.title')}</h3>
          <p class="text-slate-300">{$t('pillars.patterns.whyMatter.wisdom.description')}</p>
        </div>
      </div>
      
      <p>{$t('pillars.patterns.whyMatter.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.patterns.practices.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-teal-300">{$t('pillars.patterns.practices.observe.title')}</h3>
        <p class="text-slate-300">{$t('pillars.patterns.practices.observe.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-emerald-300">{$t('pillars.patterns.practices.connect.title')}</h3>
        <p class="text-slate-300">{$t('pillars.patterns.practices.connect.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-cyan-300">{$t('pillars.patterns.practices.model.title')}</h3>
        <p class="text-slate-300">{$t('pillars.patterns.practices.model.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-teal-300">{$t('pillars.patterns.practices.apply.title')}</h3>
        <p class="text-slate-300">{$t('pillars.patterns.practices.apply.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('pillars.patterns.quote.text')}"
    </blockquote>
    <cite class="text-lg text-teal-400">— {$t('pillars.patterns.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.patterns.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-1">
      <a 
        href="/practices/scale-shifting"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-teal-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔬</div>
        <h3 class="mb-2 text-lg font-bold text-teal-300">{$t('pillars.patterns.related.scaleJourney')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.patterns.related.scaleJourneyDesc')}</p>
      </a>
      <!--
      <a 
        href="/tools/pattern-finder"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-emerald-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔍</div>
        <h3 class="mb-2 text-lg font-bold text-emerald-300">{$t('pillars.patterns.related.patternFinder')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.patterns.related.patternFinderDesc')}</p>
      </a>
      
      <a 
        href="/practices/systems-thinking"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-cyan-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧩</div>
        <h3 class="mb-2 text-lg font-bold text-cyan-300">{$t('pillars.patterns.related.systemsThinking')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.patterns.related.systemsThinkingDesc')}</p>
      </a> -->
    </div>
  </div>
</section>
