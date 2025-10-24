<script lang="ts">
  import { t } from '$lib/i18n';
  
  const tools = $derived([
    {
      title: $t('toolsPage.tools.cosmicZoom.title'),
      icon: '🔬',
      description: $t('toolsPage.tools.cosmicZoom.description'),
      link: '/tools/cosmic-zoom',
      status: $t('toolsPage.status.comingSoon'),
      color: 'blue'
    },
    {
      title: $t('toolsPage.tools.cosmicAddress.title'),
      icon: '📍',
      description: $t('toolsPage.tools.cosmicAddress.description'),
      link: '/tools/cosmic-address',
      status: $t('toolsPage.status.comingSoon'),
      color: 'purple'
    },
    {
      title: $t('toolsPage.tools.deepTime.title'),
      icon: '⏳',
      description: $t('toolsPage.tools.deepTime.description'),
      link: '/tools/deep-time',
      status: $t('toolsPage.status.comingSoon'),
      color: 'blue'
    },
    {
      title: $t('toolsPage.tools.decisionFilter.title'),
      icon: '🎯',
      description: $t('toolsPage.tools.decisionFilter.description'),
      link: '/tools/decision-filter',
      status: $t('toolsPage.status.comingSoon'),
      color: 'green'
    },
    {
      title: $t('toolsPage.tools.planetaryBoundaries.title'),
      icon: '🌍',
      description: $t('toolsPage.tools.planetaryBoundaries.description'),
      link: '/tools/planetary-boundaries',
      status: $t('toolsPage.status.comingSoon'),
      color: 'green'
    },
    {
      title: $t('toolsPage.tools.emergence.title'),
      icon: '🌀',
      description: $t('toolsPage.tools.emergence.description'),
      link: '/tools/emergence',
      status: $t('toolsPage.status.comingSoon'),
      color: 'purple'
    },
    {
      title: $t('toolsPage.tools.universalMandate.title'),
      icon: '✍️',
      description: $t('toolsPage.tools.universalMandate.description'),
      link: '/tools/universal-mandate',
      status: $t('toolsPage.status.comingSoon'),
      color: 'blue'
    },
    {
      title: $t('toolsPage.tools.perspectiveShifter.title'),
      icon: '👁️',
      description: $t('toolsPage.tools.perspectiveShifter.description'),
      link: '/tools/perspective-shifter',
      status: $t('toolsPage.status.comingSoon'),
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
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-300',
      hover: 'hover:border-green-400'
    }
  };
</script>

<svelte:head>
  <title>{$t('nav.tools')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('toolsPage.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('toolsPage.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('toolsPage.intro')}
    </p>
  </div>
</section>

<!-- Tools Grid -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each tools as tool}
        {@const colors = colorClasses[tool.color]}
        <div class="relative">
          <a 
            href={tool.link}
            class="group block rounded-xl border {colors.border} bg-slate-900/50 p-8 transition {colors.hover} hover:bg-slate-800"
          >
            <div class="mb-4 text-5xl">{tool.icon}</div>
            <h3 class="mb-3 text-2xl font-bold {colors.text} group-hover:brightness-110">
              {tool.title}
            </h3>
            <p class="leading-relaxed text-slate-300">
              {tool.description}
            </p>
            
            {#if tool.status}
              <div class="mt-4 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                {tool.status}
              </div>
            {/if}
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Categories -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('toolsPage.categories.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🔭</div>
        <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('toolsPage.categories.visualization.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('toolsPage.categories.visualization.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🧭</div>
        <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('toolsPage.categories.reflection.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('toolsPage.categories.reflection.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🎮</div>
        <h3 class="mb-2 text-xl font-bold text-green-300">{$t('toolsPage.categories.simulation.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('toolsPage.categories.simulation.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Note -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
      <h2 class="mb-4 text-2xl font-bold text-white">{$t('toolsPage.note.title')}</h2>
      <p class="text-lg leading-relaxed text-slate-300">
        {$t('toolsPage.note.text')}
      </p>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('toolsPage.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('toolsPage.quote.author')}</cite>
  </div>
</section>
