<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<svelte:head>
  <title>{$t('nav.about')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('about.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('about.hero.subtitle')}
    </p>
  </div>
</section>

<!-- What is Universalize -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('about.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{@html $t('about.what.paragraph1')}</p>
      <p>{@html $t('about.what.paragraph2')}</p>
      <p>{$t('about.what.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Journey -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('about.journey.title')}</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Spiralize -->
      <a 
        href="https://spiralize.org"
        target="_blank"
        class="group rounded-xl border border-slate-700 bg-slate-900/50 p-8 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-4 flex items-center gap-4">
          <img src="/logo-spiralize.svg" alt="Spiralize" class="h-16 w-16" />
          <div>
            <h3 class="text-2xl font-bold text-blue-300 group-hover:text-blue-200">{$t('about.journey.spiralize.name')}</h3>
            <div class="text-sm text-slate-400">{$t('about.journey.spiralize.subtitle')}</div>
          </div>
        </div>
        <p class="text-slate-300">
          {$t('about.journey.spiralize.description')}
        </p>
      </a>

      <!-- Nondualize -->
      <a 
        href="https://nondualize.org"
        target="_blank"
        class="group rounded-xl border border-slate-700 bg-slate-900/50 p-8 transition hover:border-purple-500 hover:bg-slate-800"
      >
        <div class="mb-4 flex items-center gap-4">
          <img src="/logo-nondualize.svg" alt="Nondualize" class="h-16 w-16" />
          <div>
            <h3 class="text-2xl font-bold text-purple-300 group-hover:text-purple-200">{$t('about.journey.nondualize.name')}</h3>
            <div class="text-sm text-slate-400">{$t('about.journey.nondualize.subtitle')}</div>
          </div>
        </div>
        <p class="text-slate-300">
          {$t('about.journey.nondualize.description')}
        </p>
      </a>

      <!-- Communize -->
      <a 
        href="https://communize.org"
        target="_blank"
        class="group rounded-xl border border-slate-700 bg-slate-900/50 p-8 transition hover:border-green-500 hover:bg-slate-800"
      >
        <div class="mb-4 flex items-center gap-4">
          <img src="/logo-communize.svg" alt="Communize" class="h-16 w-16" />
          <div>
            <h3 class="text-2xl font-bold text-green-300 group-hover:text-green-200">{$t('about.journey.communize.name')}</h3>
            <div class="text-sm text-slate-400">{$t('about.journey.communize.subtitle')}</div>
          </div>
        </div>
        <p class="text-slate-300">
          {$t('about.journey.communize.description')}
        </p>
      </a>

      <!-- Universalize -->
      <div class="rounded-xl border-2 border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
        <div class="mb-4 flex items-center gap-4">
          <img src="/logo.svg" alt="Universalize" class="h-16 w-16" />
          <div>
            <h3 class="text-2xl font-bold text-blue-300">{$t('about.journey.universalize.name')}</h3>
            <div class="text-sm text-slate-400">{$t('about.journey.universalize.subtitle')}</div>
          </div>
        </div>
        <p class="text-slate-300">
          {$t('about.journey.universalize.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Connection to GGF -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('about.ggf.title')}</h2>
    
    <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
      <div class="mb-6 flex items-center gap-4">
        <img src="/logo-ggf.svg" alt="Global Governance Frameworks" class="h-16 w-16" />
        <div>
          <h3 class="text-2xl font-bold text-blue-300">{$t('about.ggf.name')}</h3>
          <a 
            href="https://globalgovernanceframeworks.org" 
            target="_blank"
            class="text-sm text-blue-400 hover:text-blue-300"
          >
            globalgovernanceframeworks.org →
          </a>
        </div>
      </div>
      
      <div class="space-y-4 text-slate-300">
        <p>{$t('about.ggf.paragraph1')}</p>
        <p>{@html $t('about.ggf.paragraph2')}</p>
        <p>{$t('about.ggf.paragraph3')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Philosophy -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('about.philosophy.title')}</h2>
    
    <div class="space-y-8">
      <div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('about.philosophy.open.title')}</h3>
        <p class="text-slate-300">
          {$t('about.philosophy.open.description')}
        </p>
      </div>
      
      <div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('about.philosophy.grounded.title')}</h3>
        <p class="text-slate-300">
          {$t('about.philosophy.grounded.description')}
        </p>
      </div>
      
      <div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('about.philosophy.developmental.title')}</h3>
        <p class="text-slate-300">
          {$t('about.philosophy.developmental.description')}
        </p>
      </div>
      
      <div class="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('about.philosophy.emotional.title')}</h3>
        <p class="text-slate-300">
          {$t('about.philosophy.emotional.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('about.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('about.quote.author')}</cite>
  </div>
</section>
