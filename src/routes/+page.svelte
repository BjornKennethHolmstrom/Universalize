<!-- /src/routes/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  
  const entryPoints = $derived([
    {
      category: $t('entryPoints.practical.title'),
      icon: '🌍',
      items: [
        {
          title: $t('entryPoints.practical.cosmicMorning.title'),
          description: $t('entryPoints.practical.cosmicMorning.description'),
          link: `${base}/practices/cosmic-morning`
        },
        {
          title: $t('entryPoints.practical.decisionFilter.title'),
          description: $t('entryPoints.practical.decisionFilter.description'),
          link: `${base}/tools/decision-filter`
        },
        {
          title: $t('entryPoints.practical.cosmicConsumption.title'),
          description: $t('entryPoints.practical.cosmicConsumption.description'),
          link: `${base}/practices/cosmic-consumption`
        }
      ]
    },
    {
      category: $t('entryPoints.wonder.title'),
      icon: '✨',
      items: [
        {
          title: $t('entryPoints.wonder.cosmicAddress.title'),
          description: $t('entryPoints.wonder.cosmicAddress.description'),
          link: `${base}/tools/cosmic-address`
        },
        {
          title: $t('entryPoints.wonder.deepTime.title'),
          description: $t('entryPoints.wonder.deepTime.description'),
          link: `${base}/tools/deep-time`
        },
        {
          title: $t('entryPoints.wonder.overviewEffect.title'),
          description: $t('entryPoints.wonder.overviewEffect.description'),
          link: `${base}/explore/overview-effect`
        }
      ]
    },
    {
      category: $t('entryPoints.systems.title'),
      icon: '🔬',
      items: [
        {
          title: $t('entryPoints.systems.patterns.title'),
          description: $t('entryPoints.systems.patterns.description'),
          link: `${base}/explore/patterns`
        },
        {
          title: $t('entryPoints.systems.boundaries.title'),
          description: $t('entryPoints.systems.boundaries.description'),
          link: `${base}/tools/planetary-boundaries`
        },
        {
          title: $t('entryPoints.systems.emergence.title'),
          description: $t('entryPoints.systems.emergence.description'),
          link: `${base}/tools/emergence`
        }
      ]
    }
  ]);

  const pillars = $derived([
    {
      title: $t('pillars.mind.title'),
      subtitle: $t('pillars.mind.subtitle'),
      icon: '🧠',
      description: $t('pillars.mind.description'),
      link: `${base}/pillars/mind`
    },
    {
      title: $t('pillars.ethics.title'),
      subtitle: $t('pillars.ethics.subtitle'),
      icon: '💚',
      description: $t('pillars.ethics.description'),
      link: `${base}/pillars/ethics`
    },
    {
      title: $t('pillars.patterns.title'),
      subtitle: $t('pillars.patterns.subtitle'),
      icon: '🌐',
      description: $t('pillars.patterns.description'),
      link: `${base}/pillars/patterns`
    },
    {
      title: $t('pillars.aesthetics.title'),
      subtitle: $t('pillars.aesthetics.subtitle'),
      icon: '🎨',
      description: $t('pillars.aesthetics.description'),
      link: `${base}/pillars/aesthetics`
    },
    {
      title: $t('pillars.challenges.title'),
      subtitle: $t('pillars.challenges.subtitle'),
      icon: '🌍',
      description: $t('pillars.challenges.description'),
      link: `${base}/pillars/challenges`
    }
  ]);
</script>

<svelte:head>
  <title>{$t('site.title')} - {$t('site.tagline')}</title>
  <meta name="description" content={$t('site.description')} />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-950 px-6 py-24 sm:py-32">
  <!-- Starfield effect -->
  <div class="absolute inset-0 opacity-30">
    <div class="absolute h-1 w-1 animate-pulse rounded-full bg-white" style="top: 20%; left: 10%;"></div>
    <div class="absolute h-1 w-1 animate-pulse rounded-full bg-blue-200" style="top: 40%; left: 80%; animation-delay: 0.5s;"></div>
    <div class="absolute h-1 w-1 animate-pulse rounded-full bg-purple-200" style="top: 70%; left: 30%; animation-delay: 1s;"></div>
    <div class="absolute h-1 w-1 animate-pulse rounded-full bg-white" style="top: 15%; left: 60%; animation-delay: 1.5s;"></div>
    <div class="absolute h-1 w-1 animate-pulse rounded-full bg-blue-300" style="top: 80%; left: 70%; animation-delay: 2s;"></div>
  </div>

  <div class="relative mx-auto max-w-4xl text-center">
    <!-- Large centered logo -->
    <div class="mb-8 flex justify-center">
      <img 
        src="{base}/logo.svg" 
        alt="Universalize logo" 
        class="h-32 w-32 sm:h-40 sm:w-40 float-animation"
      />
    </div>
    
    <h1 class="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
      {$t('hero.title')}
    </h1>
    <p class="mb-8 text-xl text-blue-200 sm:text-2xl">
      {$t('hero.tagline')}
    </p>
    <p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300">
      {@html $t('hero.description')}
    </p>
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="#entry-points" 
        class="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-500"
      >
        {$t('hero.startExploring')}
      </a>
      <a 
        href="{base}/about" 
        class="rounded-lg border-2 border-blue-400 px-8 py-3 text-lg font-semibold text-blue-200 transition hover:bg-blue-900/30"
      >
        {$t('hero.learnMore')}
      </a>
    </div>
  </div>
</section>

<!-- The Journey -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('journey.title')}</h2>
    <div class="grid gap-6 sm:grid-cols-4">
      <div class="rounded-lg bg-slate-800/50 p-6">
        <div class="mb-3 flex justify-center">
          <img src="{base}/logo-spiralize.svg" alt="Spiralize" class="h-12 w-12" />
        </div>
        <div class="text-lg font-semibold text-blue-300">{$t('journey.spiralize.name')}</div>
        <div class="text-sm text-slate-400">{$t('journey.spiralize.stage')}</div>
      </div>
      <div class="rounded-lg bg-slate-800/50 p-6">
        <div class="mb-3 flex justify-center">
          <img src="{base}/logo-nondualize.svg" alt="Nondualize" class="h-12 w-12" />
        </div>
        <div class="text-lg font-semibold text-purple-300">{$t('journey.nondualize.name')}</div>
        <div class="text-sm text-slate-400">{$t('journey.nondualize.stage')}</div>
      </div>
      <div class="rounded-lg bg-slate-800/50 p-6">
        <div class="mb-3 flex justify-center">
          <img src="{base}/logo-communize.svg" alt="Communize" class="h-12 w-12" />
        </div>
        <div class="text-lg font-semibold text-green-300">{$t('journey.communize.name')}</div>
        <div class="text-sm text-slate-400">{$t('journey.communize.stage')}</div>
      </div>
      <div class="rounded-lg bg-slate-800/50 p-6 ring-2 ring-blue-500">
        <div class="mb-3 flex justify-center">
          <img src="{base}/logo.svg" alt="Universalize" class="h-12 w-12" />
        </div>
        <div class="text-lg font-semibold text-blue-300">{$t('journey.universalize.name')}</div>
        <div class="text-sm text-slate-400">{$t('journey.universalize.stage')}</div>
      </div>
    </div>
  </div>
</section>

<!-- Entry Points -->
<section id="entry-points" class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-4xl font-bold text-white">{$t('entryPoints.title')}</h2>
      <p class="text-lg text-slate-400">
        {$t('entryPoints.subtitle')}
      </p>
    </div>

    <div class="space-y-12">
      {#each entryPoints as section}
        <div class="rounded-2xl bg-slate-900/50 p-8 backdrop-blur">
          <div class="mb-6 flex items-center gap-3">
            <span class="text-4xl">{section.icon}</span>
            <h3 class="text-2xl font-bold text-white">{section.category}</h3>
          </div>
          <div class="grid gap-6 md:grid-cols-3">
            {#each section.items as item}
              <a 
                href={item.link}
                class="group rounded-lg border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <h4 class="mb-3 text-xl font-semibold text-blue-300 group-hover:text-blue-200">
                  {item.title}
                </h4>
                <p class="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Five Pillars -->
<section class="bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-4xl font-bold text-white">{$t('pillars.title')}</h2>
      <p class="text-lg text-slate-400">
        {$t('pillars.subtitle')}
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each pillars as pillar}
        <a 
          href={pillar.link}
          class="group rounded-xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur transition hover:border-blue-500 hover:bg-slate-800"
        >
          <div class="mb-4 text-5xl">{pillar.icon}</div>
          <h3 class="mb-2 text-2xl font-bold text-white group-hover:text-blue-300">
            {pillar.title}
          </h3>
          <div class="mb-4 text-sm font-medium text-blue-400">
            {pillar.subtitle}
          </div>
          <p class="leading-relaxed text-slate-400">
            {pillar.description}
          </p>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Mission Statement -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <div class="rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-12 backdrop-blur">
      <h2 class="mb-6 text-3xl font-bold text-white">{$t('mission.title')}</h2>
      <p class="mb-6 text-lg leading-relaxed text-slate-300">
        {@html $t('mission.text1')}
      </p>
      <p class="text-lg leading-relaxed text-slate-300">
        {$t('mission.text2')}
      </p>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="text-2xl italic leading-relaxed text-slate-300">
      "{$t('quote.sagan')}"
    </blockquote>
    <cite class="mt-4 block text-lg text-blue-400">— {$t('quote.saganAuthor')}</cite>
  </div>
</section>
