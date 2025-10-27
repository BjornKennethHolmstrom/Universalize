<!-- src/routes/pillars/aesthetics/+page.svelte -->
<script lang="ts">
  import { t, currentLanguage } from '$lib/i18n';
  import { base } from '$app/paths';
  import ShareButtons from '$lib/components/ShareButtons.svelte'

  const topics = $derived([
    {
      title: $t('pillars.aesthetics.topics.goldenRatio.title'),
      slug: 'golden-ratio',
      icon: '📐',
      description: $t('pillars.aesthetics.topics.goldenRatio.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.aesthetics.topics.archetypes.title'),
      slug: 'archetypal-patterns',
      icon: '📖',
      description: $t('pillars.aesthetics.topics.archetypes.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.aesthetics.topics.cosmicArt.title'),
      slug: 'cosmic-art',
      icon: '🎼',
      description: $t('pillars.aesthetics.topics.cosmicArt.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.aesthetics.topics.communication.title'),
      slug: 'art-communication',
      icon: '📡',
      description: $t('pillars.aesthetics.topics.communication.description'),
      color: 'blue'
    },
    {
      title: $t('pillars.aesthetics.topics.emergence.title'),
      slug: 'emergent-beauty',
      icon: '🌸',
      description: $t('pillars.aesthetics.topics.emergence.description'),
      color: 'purple'
    },
    {
      title: $t('pillars.aesthetics.topics.seti.title'),
      slug: 'aesthetics-seti',
      icon: '👽',
      description: $t('pillars.aesthetics.topics.seti.description'),
      color: 'blue'
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
  <title>{$t('pillars.aesthetics.meta.title')} - Universalize</title>
  <meta name="description" content={$t('pillars.aesthetics.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-900 px-6 py-24">
  <!-- Artistic pattern overlay -->
  <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="aesthetic" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
          <!-- Golden ratio spiral -->
          <path d="M 75 75 Q 100 75 100 100 Q 100 125 75 125 Q 50 125 50 100 Q 50 75 75 75" 
                stroke="white" fill="none" stroke-width="1" opacity="0.3"/>
          <circle cx="75" cy="75" r="3" fill="white" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#aesthetic)" />
    </svg>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🎨</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('pillars.aesthetics.hero.title')}</h1>
    <p class="mb-8 text-xl text-purple-200">
      {$t('pillars.aesthetics.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('pillars.aesthetics.hero.description')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.aesthetics.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.aesthetics.intro.paragraph1')}</p>
      <p>{@html $t('pillars.aesthetics.intro.paragraph2')}</p>
      <p>{$t('pillars.aesthetics.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Core Questions -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.aesthetics.questions.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.questions.objective.question')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.questions.objective.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.aesthetics.questions.function.question')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.questions.function.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.questions.universal.question')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.questions.universal.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.aesthetics.questions.consciousness.question')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.questions.consciousness.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Topics -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-3xl font-bold text-white">{$t('pillars.aesthetics.topicsTitle')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('pillars.aesthetics.topicsSubtitle')}
    </p>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each topics as topic}
        {@const colors = colorClasses[topic.color]}
        <a 
          href={`${base}/pillars/aesthetics/topics/${topic.slug}`}
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
            <span>{$t('pillars.aesthetics.readMore')}</span>
            <span>→</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- The Golden Ratio -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.aesthetics.goldenRatio.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.aesthetics.goldenRatio.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-900/50 p-8 text-center">
        <div class="mb-4 text-4xl font-bold text-purple-300">{$t('pillars.aesthetics.goldenRatio.formula')}</div>
        <div class="text-2xl text-slate-400">φ ≈ 1.618033988749...</div>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.goldenRatio.nature.title')}</h3>
          <p class="text-slate-300">{$t('pillars.aesthetics.goldenRatio.nature.description')}</p>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.aesthetics.goldenRatio.art.title')}</h3>
          <p class="text-slate-300">{$t('pillars.aesthetics.goldenRatio.art.description')}</p>
        </div>
      </div>
      
      <div class="my-6 rounded-xl border border-purple-500 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.goldenRatio.why.title')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.goldenRatio.why.description')}</p>
      </div>
      
      <p>{$t('pillars.aesthetics.goldenRatio.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- The Monomyth -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.aesthetics.archetypes.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.aesthetics.archetypes.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-blue-500 bg-slate-800/50 p-8">
        <h3 class="mb-6 text-center text-2xl font-bold text-blue-300">{$t('pillars.aesthetics.archetypes.stages.title')}</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="text-3xl">🏠</div>
            <div class="flex-1 text-slate-300">{$t('pillars.aesthetics.archetypes.stages.ordinary')}</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-3xl">🚪</div>
            <div class="flex-1 text-slate-300">{$t('pillars.aesthetics.archetypes.stages.threshold')}</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-3xl">🦋</div>
            <div class="flex-1 text-slate-300">{$t('pillars.aesthetics.archetypes.stages.transformation')}</div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-3xl">🎁</div>
            <div class="flex-1 text-slate-300">{$t('pillars.aesthetics.archetypes.stages.return')}</div>
          </div>
        </div>
      </div>
      
      <p>{$t('pillars.aesthetics.archetypes.paragraph2')}</p>
      
      <div class="my-6 rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.aesthetics.archetypes.question.title')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.archetypes.question.description')}</p>
      </div>
      
      <p>{$t('pillars.aesthetics.archetypes.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Universal Perspective -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.aesthetics.perspectives.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('pillars.aesthetics.perspectives.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.perspectives.integration.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('pillars.aesthetics.perspectives.integration.mathematics')}</strong></p>
          <p><strong class="text-white">{$t('pillars.aesthetics.perspectives.integration.nature')}</strong></p>
          <p><strong class="text-white">{$t('pillars.aesthetics.perspectives.integration.human')}</strong></p>
          <p><strong class="text-white">{$t('pillars.aesthetics.perspectives.integration.cosmic')}</strong></p>
        </div>
      </div>
      
      <p>{$t('pillars.aesthetics.perspectives.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('pillars.aesthetics.practices.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.practices.nature.title')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.practices.nature.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.aesthetics.practices.create.title')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.practices.create.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('pillars.aesthetics.practices.stories.title')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.practices.stories.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('pillars.aesthetics.practices.cosmos.title')}</h3>
        <p class="text-slate-300">{$t('pillars.aesthetics.practices.cosmos.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('pillars.aesthetics.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('pillars.aesthetics.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('pillars.aesthetics.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <a 
        href="{base}/pillars/patterns"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌀</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('pillars.aesthetics.related.patterns')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.aesthetics.related.patternsDesc')}</p>
      </a>
      
    <!--  <a 
        href="/explore/voyager-record"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">💿</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('pillars.aesthetics.related.voyager')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.aesthetics.related.voyagerDesc')}</p>
      </a> -->
      
      <a 
        href="{base}/explore/seti"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">📡</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('pillars.aesthetics.related.seti')}</h3>
        <p class="text-sm text-slate-400">{$t('pillars.aesthetics.related.setiDesc')}</p>
      </a>
    </div>
  </div>
  <br>
  <ShareButtons 
    title={$t('pillars.aesthetics.title')} 
    description={$t('pillars.aesthetics.description')} 
  />
</section>
