<!-- src/routes/explore/universe-story/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  
  const chapters = $derived([
    {
      title: $t('universeStory.chapters.0.title'),
      time: $t('universeStory.chapters.0.time'),
      icon: '💥',
      description: $t('universeStory.chapters.0.description'),
      color: 'from-yellow-900/30'
    },
    {
      title: $t('universeStory.chapters.1.title'),
      time: $t('universeStory.chapters.1.time'),
      icon: '⭐',
      description: $t('universeStory.chapters.1.description'),
      color: 'from-orange-900/30'
    },
    {
      title: $t('universeStory.chapters.2.title'),
      time: $t('universeStory.chapters.2.time'),
      icon: '🌍',
      description: $t('universeStory.chapters.2.description'),
      color: 'from-blue-900/30'
    },
    {
      title: $t('universeStory.chapters.3.title'),
      time: $t('universeStory.chapters.3.time'),
      icon: '🦠',
      description: $t('universeStory.chapters.3.description'),
      color: 'from-green-900/30'
    },
    {
      title: $t('universeStory.chapters.4.title'),
      time: $t('universeStory.chapters.4.time'),
      icon: '🐟',
      description: $t('universeStory.chapters.4.description'),
      color: 'from-cyan-900/30'
    },
    {
      title: $t('universeStory.chapters.5.title'),
      time: $t('universeStory.chapters.5.time'),
      icon: '🧠',
      description: $t('universeStory.chapters.5.description'),
      color: 'from-purple-900/30'
    },
    {
      title: $t('universeStory.chapters.6.title'),
      time: $t('universeStory.chapters.6.time'),
      icon: '🚀',
      description: $t('universeStory.chapters.6.description'),
      color: 'from-blue-900/30'
    }
  ]);
  
  const themes = $derived([
    {
      title: $t('universeStory.themes.emergence.title'),
      icon: '✨',
      description: $t('universeStory.themes.emergence.description')
    },
    {
      title: $t('universeStory.themes.connection.title'),
      icon: '🔗',
      description: $t('universeStory.themes.connection.description')
    },
    {
      title: $t('universeStory.themes.improbable.title'),
      icon: '🎲',
      description: $t('universeStory.themes.improbable.description')
    },
    {
      title: $t('universeStory.themes.unfinished.title'),
      icon: '📖',
      description: $t('universeStory.themes.unfinished.description')
    }
  ]);
</script>

<svelte:head>
  <title>{$t('universeStory.meta.title')} - Universalize</title>
  <meta name="description" content={$t('universeStory.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-6 py-24">
  <!-- Cosmic visual effect -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute left-1/4 top-1/4 h-2 w-2 animate-pulse rounded-full bg-white"></div>
    <div class="absolute right-1/3 top-1/3 h-1 w-1 animate-pulse rounded-full bg-blue-300" style="animation-delay: 0.5s;"></div>
    <div class="absolute left-1/2 top-1/2 h-3 w-3 animate-pulse rounded-full bg-purple-300" style="animation-delay: 1s;"></div>
    <div class="absolute right-1/4 bottom-1/3 h-1 w-1 animate-pulse rounded-full bg-white" style="animation-delay: 1.5s;"></div>
    <div class="absolute left-1/3 bottom-1/4 h-2 w-2 animate-pulse rounded-full bg-blue-200" style="animation-delay: 2s;"></div>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">✨</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('universeStory.hero.title')}</h1>
    <p class="mb-8 text-xl text-purple-200">
      {$t('universeStory.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('universeStory.hero.description')}
    </p>
  </div>
</section>

<!-- What Is the Universe Story -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universeStory.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{@html $t('universeStory.what.paragraph1')}</p>
      <p>{$t('universeStory.what.paragraph2')}</p>
      <p>{$t('universeStory.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Seven Chapters -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-3xl font-bold text-white">{$t('universeStory.chaptersTitle')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('universeStory.chaptersSubtitle')}
    </p>
    
    <div class="space-y-6">
      {#each chapters as chapter}
        <div class="rounded-xl border border-slate-700 bg-gradient-to-br {chapter.color} to-slate-900/30 p-8">
          <div class="flex flex-col gap-6 md:flex-row md:items-start">
            <div class="text-6xl">{chapter.icon}</div>
            <div class="flex-1">
              <div class="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 class="text-2xl font-bold text-white">{chapter.title}</h3>
                <span class="text-lg font-semibold text-purple-300">{chapter.time}</span>
              </div>
              <p class="text-slate-300">{chapter.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Key Themes -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('universeStory.themesTitle')}</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      {#each themes as theme}
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <div class="mb-4 text-5xl">{theme.icon}</div>
          <h3 class="mb-3 text-2xl font-bold text-purple-300">{theme.title}</h3>
          <p class="leading-relaxed text-slate-300">{theme.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- We Are Stardust -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universeStory.stardust.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('universeStory.stardust.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-800/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('universeStory.stardust.elements.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p>{$t('universeStory.stardust.elements.hydrogen')}</p>
          <p>{$t('universeStory.stardust.elements.carbon')}</p>
          <p>{$t('universeStory.stardust.elements.oxygen')}</p>
          <p>{$t('universeStory.stardust.elements.nitrogen')}</p>
          <p>{$t('universeStory.stardust.elements.calcium')}</p>
          <p>{$t('universeStory.stardust.elements.iron')}</p>
        </div>
      </div>
      
      <p>{@html $t('universeStory.stardust.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- The Discovery Commons -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universeStory.science.title')}</h2>
    
    <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
      <div class="mb-6 flex items-start gap-4">
        <img src="{base}/logo-ggf.svg" alt="Global Governance Frameworks" class="h-16 w-16" />
        <div>
          <h3 class="mb-2 text-2xl font-bold text-blue-300">{$t('universeStory.science.framework.title')}</h3>
          <a 
            href="https://globalgovernanceframeworks.org/frameworks/discovery-commons"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-blue-400 hover:text-blue-300"
          >
            {$t('universeStory.science.framework.link')} →
          </a>
        </div>
      </div>
      
      <div class="space-y-4 text-slate-300">
        <p>{$t('universeStory.science.framework.description')}</p>
        <p>{$t('universeStory.science.framework.principles')}</p>
        <p>{@html $t('universeStory.science.framework.conclusion')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Our Chapter -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universeStory.ourChapter.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('universeStory.ourChapter.paragraph1')}</p>
      
      <div class="my-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-yellow-500 bg-slate-900/50 p-6">
          <div class="mb-3 text-4xl">🌍</div>
          <h3 class="mb-2 text-xl font-bold text-yellow-300">{$t('universeStory.ourChapter.planetary.title')}</h3>
          <p class="text-sm text-slate-300">{$t('universeStory.ourChapter.planetary.description')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
          <div class="mb-3 text-4xl">🧬</div>
          <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('universeStory.ourChapter.technological.title')}</h3>
          <p class="text-sm text-slate-300">{$t('universeStory.ourChapter.technological.description')}</p>
        </div>
        
        <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
          <div class="mb-3 text-4xl">🤝</div>
          <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('universeStory.ourChapter.choice.title')}</h3>
          <p class="text-sm text-slate-300">{$t('universeStory.ourChapter.choice.description')}</p>
        </div>
        
        <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
          <div class="mb-3 text-4xl">✨</div>
          <h3 class="mb-2 text-xl font-bold text-green-300">{$t('universeStory.ourChapter.awareness.title')}</h3>
          <p class="text-sm text-slate-300">{$t('universeStory.ourChapter.awareness.description')}</p>
        </div>
      </div>
      
      <p>{$t('universeStory.ourChapter.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Living the Story -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('universeStory.living.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('universeStory.living.methods.morning.title')}</h3>
        <p class="text-slate-300">{$t('universeStory.living.methods.morning.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('universeStory.living.methods.children.title')}</h3>
        <p class="text-slate-300">{$t('universeStory.living.methods.children.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('universeStory.living.methods.night.title')}</h3>
        <p class="text-slate-300">{$t('universeStory.living.methods.night.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('universeStory.living.methods.death.title')}</h3>
        <p class="text-slate-300">{$t('universeStory.living.methods.death.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('universeStory.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('universeStory.quote.author')}</cite>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('universeStory.cta.title')}</h2>
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('universeStory.cta.description')}
    </p>
    
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="{base}/tools/cosmic-zoom"
        class="rounded-lg bg-purple-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-purple-500"
      >
        {$t('universeStory.cta.zoom')}
      </a>
      <a 
        href="{base}/pillars/mind"
        class="rounded-lg border-2 border-purple-400 px-8 py-3 text-lg font-semibold text-purple-200 transition hover:bg-purple-900/30"
      >
        {$t('universeStory.cta.mind')}
      </a>
    </div>
  </div>
</section>
