<!-- src/routes/support/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
  title={$t('support.seo.title')}
  description={$t('support.seo.description')}
  keywords="support universalize, cosmic perspective, planetary awareness, universal consciousness, open source cosmology"
/>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
      {$t('support.hero.title')}
    </h1>
    <p class="text-xl text-blue-200">
      {$t('support.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Current Phase -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="cosmic-card rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 cosmic-glow">
      <h2 class="mb-4 text-2xl font-bold text-blue-300">
        {$t('support.currentPhase.title')}
      </h2>
      <p class="text-lg leading-relaxed text-slate-300">
        {$t('support.currentPhase.content')}
      </p>
    </div>
  </div>
</section>

<!-- Support Ways -->
<section class="bg-slate-950 px-6 py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">
      {$t('support.ways.title')}
    </h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Cosmic Support -->
      <div class="cosmic-card rounded-xl border border-slate-700 bg-slate-900/50 p-8 transition hover:border-blue-500 hover:bg-slate-800">
        <h3 class="mb-4 text-xl font-bold text-blue-300">
          {$t('support.ways.cosmic.title')}
        </h3>
        <ul class="space-y-3">
          {#each $t('support.ways.cosmic.items') as item}
            <li class="flex items-start text-slate-300">
              <span class="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Knowledge Support -->
      <div class="cosmic-card rounded-xl border border-slate-700 bg-slate-900/50 p-8 transition hover:border-purple-500 hover:bg-slate-800">
        <h3 class="mb-4 text-xl font-bold text-purple-300">
          {$t('support.ways.knowledge.title')}
        </h3>
        <ul class="space-y-3">
          {#each $t('support.ways.knowledge.items') as item}
            <li class="flex items-start text-slate-300">
              <span class="text-purple-400 mr-3 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Planetary Support -->
      <div class="cosmic-card rounded-xl border border-slate-700 bg-slate-900/50 p-8 transition hover:border-green-500 hover:bg-slate-800 md:col-span-2">
        <h3 class="mb-4 text-xl font-bold text-green-300">
          {$t('support.ways.planetary.title')}
        </h3>
        <ul class="grid gap-4 md:grid-cols-2">
          {#each $t('support.ways.planetary.items') as item}
            <li class="flex items-start text-slate-300">
              <span class="text-green-400 mr-3 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Future Vision -->
<section class="bg-gradient-to-br from-blue-900/40 to-purple-900/40 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="rounded-xl border border-blue-400/30 bg-slate-900/80 p-8 cosmic-glow">
      <h2 class="mb-6 text-2xl font-bold text-blue-300">
        {$t('support.future.title')}
      </h2>
      <p class="mb-6 text-lg leading-relaxed text-blue-100">
        {$t('support.future.content')}
      </p>
      <ul class="space-y-3">
        {#each $t('support.future.principles') as principle}
          <li class="flex items-start text-blue-50">
            <span class="text-yellow-300 mr-3 mt-1 flex-shrink-0">•</span>
            <span>{principle}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Cosmic Philosophy -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <div class="cosmic-card rounded-xl border border-slate-700 bg-slate-800/50 p-8">
      <h2 class="mb-4 text-2xl font-bold text-blue-300">
        {$t('support.philosophy.title')}
      </h2>
      <p class="mb-6 text-lg leading-relaxed text-slate-300 italic">
        {$t('support.philosophy.content')}
      </p>
      <p class="text-blue-400 font-medium">
        {$t('support.philosophy.signature')}
      </p>
    </div>
  </div>
</section>

<!-- Cosmic Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('support.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('support.quote.author')}</cite>
  </div>
</section>
