<!-- src/routes/pillars/mind/+page.svelte -->
<script lang="ts">
  import { t, currentLanguage } from '$lib/i18n';
  
  const topics = $derived([
    {
      title: $t('pillars.mind.topics.consciousness.title'),
      slug: 'consciousness',
      icon: '🧠',
      description: $t('pillars.mind.topics.consciousness.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.mind.topics.universeAware.title'),
      slug: 'universe-aware',
      icon: '✨',
      description: $t('pillars.mind.topics.universeAware.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.mind.topics.perennialPhilosophy.title'),
      slug: 'perennial-philosophy',
      icon: '🕉️',
      description: $t('pillars.mind.topics.perennialPhilosophy.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.mind.topics.hardProblem.title'),
      slug: 'hard-problem',
      icon: '❓',
      description: $t('pillars.mind.topics.hardProblem.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.mind.topics.panpsychism.title'),
      slug: 'panpsychism',
      icon: '🌌',
      description: $t('pillars.mind.topics.panpsychism.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.mind.topics.collective.title'),
      slug: 'collective-consciousness',
      icon: '🕸️',
      description: $t('pillars.mind.topics.collective.description'),
      color: 'purple'
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
    }
  };
</script>

<svelte:head>
  <title>{$t('pillars.mind.meta.title')} - Universalize</title>
  <meta name="description" content={$t('pillars.mind.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-6 py-24">
  <!-- Neural network visual effect -->
  <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="2" fill="white" opacity="0.5" />
          <line x1="50" y1="50" x2="75" y2="25" stroke="white" stroke-width="0.5" opacity="0.3" />
          <line x1="50" y1="50" x2="25" y2="75" stroke="white" stroke-width="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#neural)" />
    </svg>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🧠</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('pillars.mind.hero.title')}</h1>
    <p class="mb-8 text-xl text-purple-200">
      {$t('pillars.mind.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('pillars.mind.hero.description')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.mind.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.mind.intro.paragraph1')}</p>
      <p>{@html $t('pillars.mind.intro.paragraph2')}</p>
      <p>{$t('pillars.mind.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Core Questions -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.mind.questions.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.mind.questions.what.question')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.questions.what.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.mind.questions.where.question')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.questions.where.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.mind.questions.why.question')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.questions.why.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.mind.questions.who.question')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.questions.who.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Topics -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-3xl font-bold text-white">{$t('pillars.mind.topicsTitle')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('pillars.mind.topicsSubtitle')}
    </p>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each topics as topic}
        {@const colors = colorClasses[topic.color]}
        <a 
          href={`/pillars/mind/topics/${topic.slug}`}
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
            <span>{$t('pillars.mind.readMore')}</span>
            <span>→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- The Universal Perspective -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.mind.perspective.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.mind.perspective.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('pillars.mind.perspective.integration.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('pillars.mind.perspective.integration.science')}</strong></p>
          <p><strong class="text-white">{$t('pillars.mind.perspective.integration.contemplative')}</strong></p>
          <p><strong class="text-white">{$t('pillars.mind.perspective.integration.philosophical')}</strong></p>
          <p><strong class="text-white">{$t('pillars.mind.perspective.integration.experiential')}</strong></p>
        </div>
      </div>
      
      <p>{$t('pillars.mind.perspective.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.mind.practices.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.mind.practices.meditation.title')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.practices.meditation.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.mind.practices.study.title')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.practices.study.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.mind.practices.dialogue.title')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.practices.dialogue.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.mind.practices.awe.title')}</h3>
        <p class="text-slate-300">{$t('pillars.mind.practices.awe.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('pillars.mind.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('pillars.mind.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.mind.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="/explore/universe-story"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">✨</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('pillars.mind.related.universeStory')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.mind.related.universeStoryDesc')}</p>
      </a>
      
      <a 
        href="/explore/seti"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔭</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('pillars.mind.related.searchIntelligence')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.mind.related.searchIntelligenceDesc')}</p>
      </a>
      
      <a 
        href="/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('pillars.mind.related.meditation')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.mind.related.meditationDesc')}</p>
      </a>
    </div>
  </div>
</section>
