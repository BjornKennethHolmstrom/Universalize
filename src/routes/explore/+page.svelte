<script lang="ts">
  import { t } from '$lib/i18n';
  
  const exploreAreas = $derived([
    {
      title: $t('explore.areas.overviewEffect.title'),
      icon: '🌍',
      description: $t('explore.areas.overviewEffect.description'),
      link: '/explore/overview-effect',
      color: 'blue'
    },
    {
      title: $t('explore.areas.patterns.title'),
      icon: '🌐',
      description: $t('explore.areas.patterns.description'),
      link: '/explore/patterns',
      color: 'purple'
    },
    {
      title: $t('explore.areas.universeStory.title'),
      icon: '✨',
      description: $t('explore.areas.universeStory.description'),
      link: '/explore/universe-story',
      color: 'blue'
    },
    {
      title: $t('explore.areas.expandingCircles.title'),
      icon: '💚',
      description: $t('explore.areas.expandingCircles.description'),
      link: '/explore/expanding-circles',
      color: 'green'
    },
    {
      title: $t('explore.areas.deepTime.title'),
      icon: '⏳',
      description: $t('explore.areas.deepTime.description'),
      link: '/explore/deep-time',
      color: 'purple'
    },
    {
      title: $t('explore.areas.seti.title'),
      icon: '🔭',
      description: $t('explore.areas.seti.description'),
      link: '/explore/seti',
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
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-300',
      hover: 'hover:border-green-400'
    }
  };
</script>

<svelte:head>
  <title>{$t('nav.explore')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('explore.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('explore.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('explore.intro')}
    </p>
  </div>
</section>

<!-- Explore Areas Grid -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each exploreAreas as area}
        {@const colors = colorClasses[area.color]}
        <a 
          href={area.link}
          class="group rounded-xl border {colors.border} bg-slate-900/50 p-8 transition {colors.hover} hover:bg-slate-800"
        >
          <div class="mb-4 text-5xl">{area.icon}</div>
          <h3 class="mb-3 text-2xl font-bold {colors.text} group-hover:brightness-110">
            {area.title}
          </h3>
          <p class="leading-relaxed text-slate-400">
            {area.description}
          </p>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Pillars Connection -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('explore.lookingFor.title')}
    </h2>
    
    <div class="grid gap-6 sm:grid-cols-2">
      <a 
        href="/pillars"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('explore.lookingFor.pillars.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('explore.lookingFor.pillars.description')}
        </p>
      </a>
      
      <a 
        href="/tools"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-800"
      >
        <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('explore.lookingFor.tools.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('explore.lookingFor.tools.description')}
        </p>
      </a>
      
      <a 
        href="/practices"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-800"
      >
        <h3 class="mb-2 text-xl font-bold text-green-300">{$t('explore.lookingFor.practices.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('explore.lookingFor.practices.description')}
        </p>
      </a>
      
      <a 
        href="/resources"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('explore.lookingFor.resources.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('explore.lookingFor.resources.description')}
        </p>
      </a>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('explore.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('explore.quote.author')}</cite>
  </div>
</section>
