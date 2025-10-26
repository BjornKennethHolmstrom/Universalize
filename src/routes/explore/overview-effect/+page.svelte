<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';

  const astronauts = $derived([
    {
      name: $t('overviewEffect.astronauts.0.name'),
      mission: $t('overviewEffect.astronauts.0.mission'),
      quote: $t('overviewEffect.astronauts.0.quote'),
      image: '👨‍🚀'
    },
    {
      name: $t('overviewEffect.astronauts.1.name'),
      mission: $t('overviewEffect.astronauts.1.mission'),
      quote: $t('overviewEffect.astronauts.1.quote'),
      image: '👨‍🚀'
    },
    {
      name: $t('overviewEffect.astronauts.2.name'),
      mission: $t('overviewEffect.astronauts.2.mission'),
      quote: $t('overviewEffect.astronauts.2.quote'),
      image: '👨‍🚀'
    },
    {
      name: $t('overviewEffect.astronauts.3.name'),
      mission: $t('overviewEffect.astronauts.3.mission'),
      quote: $t('overviewEffect.astronauts.3.quote'),
      image: '👩‍🚀'
    }
  ]);
  
  const themes = $derived([
    {
      title: $t('overviewEffect.themes.fragility.title'),
      icon: '🫧',
      description: $t('overviewEffect.themes.fragility.description')
    },
    {
      title: $t('overviewEffect.themes.unity.title'),
      icon: '🌍',
      description: $t('overviewEffect.themes.unity.description')
    },
    {
      title: $t('overviewEffect.themes.beauty.title'),
      icon: '✨',
      description: $t('overviewEffect.themes.beauty.description')
    },
    {
      title: $t('overviewEffect.themes.responsibility.title'),
      icon: '🤝',
      description: $t('overviewEffect.themes.responsibility.description')
    }
  ]);
</script>

<svelte:head>
  <title>{$t('overviewEffect.meta.title')} - Universalize</title>
  <meta name="description" content={$t('overviewEffect.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-24">
  <!-- Earth from space visual effect -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-green-500 blur-3xl"></div>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🌍</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('overviewEffect.hero.title')}</h1>
    <p class="mb-8 text-xl text-blue-200">
      {$t('overviewEffect.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('overviewEffect.hero.description')}
    </p>
  </div>
</section>

<!-- What is the Overview Effect -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('overviewEffect.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('overviewEffect.what.paragraph1')}</p>
      <p>{$t('overviewEffect.what.paragraph2')}</p>
      <p>{@html $t('overviewEffect.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Key Themes -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('overviewEffect.themesTitle')}</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      {#each themes as theme}
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-8">
          <div class="mb-4 text-5xl">{theme.icon}</div>
          <h3 class="mb-3 text-2xl font-bold text-blue-300">{theme.title}</h3>
          <p class="leading-relaxed text-slate-300">{theme.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Astronaut Voices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('overviewEffect.voices.title')}</h2>
    <p class="mb-12 text-center text-lg text-slate-400">
      {$t('overviewEffect.voices.subtitle')}
    </p>
    
    <div class="grid gap-8 md:grid-cols-2">
      {#each astronauts as astronaut}
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <div class="mb-6 flex items-center gap-4">
            <div class="text-5xl">{astronaut.image}</div>
            <div>
              <div class="text-xl font-bold text-white">{astronaut.name}</div>
              <div class="text-sm text-slate-400">{astronaut.mission}</div>
            </div>
          </div>
          <blockquote class="italic leading-relaxed text-slate-300">
            "{astronaut.quote}"
          </blockquote>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- The Science -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('overviewEffect.science.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('overviewEffect.science.paragraph1')}</p>
      <p>{$t('overviewEffect.science.paragraph2')}</p>
      
      <div class="my-8 rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
        <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('overviewEffect.science.research.title')}</h3>
        <ul class="space-y-3 text-slate-300">
          <li>• {$t('overviewEffect.science.research.finding1')}</li>
          <li>• {$t('overviewEffect.science.research.finding2')}</li>
          <li>• {$t('overviewEffect.science.research.finding3')}</li>
          <li>• {$t('overviewEffect.science.research.finding4')}</li>
        </ul>
      </div>
      
      <p>{$t('overviewEffect.science.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Cultivating the Overview Effect -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('overviewEffect.cultivate.title')}</h2>
    <p class="mb-8 text-lg text-slate-300">
      {$t('overviewEffect.cultivate.intro')}
    </p>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('overviewEffect.cultivate.methods.images.title')}</h3>
        <p class="text-slate-300">{$t('overviewEffect.cultivate.methods.images.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('overviewEffect.cultivate.methods.vr.title')}</h3>
        <p class="text-slate-300">{$t('overviewEffect.cultivate.methods.vr.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('overviewEffect.cultivate.methods.meditation.title')}</h3>
        <p class="text-slate-300">{$t('overviewEffect.cultivate.methods.meditation.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('overviewEffect.cultivate.methods.flights.title')}</h3>
        <p class="text-slate-300">{$t('overviewEffect.cultivate.methods.flights.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('overviewEffect.cultivate.methods.perspective.title')}</h3>
        <p class="text-slate-300">{$t('overviewEffect.cultivate.methods.perspective.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Pale Blue Dot -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('overviewEffect.paleBlue.title')}</h2>
    
    <div class="mb-8 rounded-xl border border-slate-700 bg-slate-900/50 p-8">
      <div class="mb-6 text-center">
        <div class="inline-block rounded-full bg-blue-500 p-1">
          <div class="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <p class="mt-2 text-sm text-slate-400">{$t('overviewEffect.paleBlue.imageCaption')}</p>
      </div>
      
      <blockquote class="space-y-4 text-lg italic leading-relaxed text-slate-300">
        <p>"{$t('overviewEffect.paleBlue.quote.paragraph1')}</p>
        <p>{$t('overviewEffect.paleBlue.quote.paragraph2')}</p>
        <p>{$t('overviewEffect.paleBlue.quote.paragraph3')}"</p>
      </blockquote>
      <cite class="mt-6 block text-right text-blue-400">— Carl Sagan</cite>
    </div>
    
    <p class="text-center text-lg text-slate-300">
      {$t('overviewEffect.paleBlue.reflection')}
    </p>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('overviewEffect.cta.title')}</h2>
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('overviewEffect.cta.description')}
    </p>
    
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="{base}/practices/view-from-above"
        class="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-500"
      >
        {$t('overviewEffect.cta.meditation')}
      </a>
      <a 
        href="{base}/tools/cosmic-zoom"
        class="rounded-lg border-2 border-blue-400 px-8 py-3 text-lg font-semibold text-blue-200 transition hover:bg-blue-900/30"
      >
        {$t('overviewEffect.cta.explore')}
      </a>
    </div>
  </div>
</section>
