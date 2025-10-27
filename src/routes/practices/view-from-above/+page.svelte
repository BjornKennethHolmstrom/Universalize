<!-- src/routes/practices/view-from-above/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
</script>

<SEO
  title={$t('practices.viewFromAbove.meta.title')}
  description={$t('practices.viewFromAbove.meta.description')}
  keywords="meditation, visualization, perspective shift, overview effect, cosmic perspective"
  image="/practices/view-from-above-preview.jpg"
/>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.viewFromAbove.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🧘</div>
    <h1 class="mb-4 text-5xl font-bold text-white">{$t('practices.viewFromAbove.hero.title')}</h1>
    <p class="mb-6 text-xl text-purple-200">
      {$t('practices.viewFromAbove.hero.subtitle')}
    </p>
    <div class="flex items-center justify-center gap-4 text-sm text-slate-400">
      <span class="flex items-center gap-2">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {$t('practices.viewFromAbove.hero.duration')}
      </span>
      <span>•</span>
      <span>{$t('practices.viewFromAbove.hero.frequency')}</span>
    </div>
  </div>
</section>

<!-- Overview -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('practices.viewFromAbove.overview.title')}</h2>
    <div class="space-y-4 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.viewFromAbove.overview.paragraph1')}</p>
      <p>{$t('practices.viewFromAbove.overview.paragraph2')}</p>
      <p>{$t('practices.viewFromAbove.overview.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Preparation -->
<section class="bg-slate-950 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.viewFromAbove.preparation.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('practices.viewFromAbove.preparation.posture.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.preparation.posture.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">
          {$t('practices.viewFromAbove.preparation.environment.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.preparation.environment.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-indigo-300">
          {$t('practices.viewFromAbove.preparation.breath.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.preparation.breath.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-violet-300">
          {$t('practices.viewFromAbove.preparation.intention.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.preparation.intention.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- The Guided Meditation -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.viewFromAbove.guided.title')}</h2>
    <p class="mb-8 text-lg text-slate-400">{$t('practices.viewFromAbove.guided.intro')}</p>
    
    <div class="space-y-8">
      <!-- Scale 1 -->
      <div class="rounded-xl border border-blue-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            1
          </div>
          <h3 class="text-2xl font-bold text-blue-300">
            {$t('practices.viewFromAbove.guided.scale1.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.scale1.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.scale1.paragraph2')}</p>
          <p class="italic text-slate-400">{$t('practices.viewFromAbove.guided.scale1.pause')}</p>
        </div>
      </div>

      <!-- Scale 2 -->
      <div class="rounded-xl border border-purple-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            2
          </div>
          <h3 class="text-2xl font-bold text-purple-300">
            {$t('practices.viewFromAbove.guided.scale2.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.scale2.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.scale2.paragraph2')}</p>
          <p class="italic text-slate-400">{$t('practices.viewFromAbove.guided.scale2.pause')}</p>
        </div>
      </div>

      <!-- Scale 3 -->
      <div class="rounded-xl border border-indigo-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xl font-bold text-white">
            3
          </div>
          <h3 class="text-2xl font-bold text-indigo-300">
            {$t('practices.viewFromAbove.guided.scale3.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.scale3.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.scale3.paragraph2')}</p>
          <p class="italic text-slate-400">{$t('practices.viewFromAbove.guided.scale3.pause')}</p>
        </div>
      </div>

      <!-- Scale 4 -->
      <div class="rounded-xl border border-violet-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-500 text-xl font-bold text-white">
            4
          </div>
          <h3 class="text-2xl font-bold text-violet-300">
            {$t('practices.viewFromAbove.guided.scale4.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.scale4.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.scale4.paragraph2')}</p>
          <p class="italic text-slate-400">{$t('practices.viewFromAbove.guided.scale4.pause')}</p>
        </div>
      </div>

      <!-- Scale 5 -->
      <div class="rounded-xl border border-cyan-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-slate-900">
            5
          </div>
          <h3 class="text-2xl font-bold text-cyan-300">
            {$t('practices.viewFromAbove.guided.scale5.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.scale5.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.scale5.paragraph2')}</p>
          <p class="italic text-slate-400">{$t('practices.viewFromAbove.guided.scale5.pause')}</p>
        </div>
      </div>

      <!-- Scale 6 -->
      <div class="rounded-xl border border-sky-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-slate-900">
            6
          </div>
          <h3 class="text-2xl font-bold text-sky-300">
            {$t('practices.viewFromAbove.guided.scale6.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.scale6.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.scale6.paragraph2')}</p>
          <p class="italic text-slate-400">{$t('practices.viewFromAbove.guided.scale6.pause')}</p>
        </div>
      </div>

      <!-- Return -->
      <div class="rounded-xl border border-emerald-500 bg-slate-800/30 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-slate-900">
            ↓
          </div>
          <h3 class="text-2xl font-bold text-emerald-300">
            {$t('practices.viewFromAbove.guided.return.title')}
          </h3>
        </div>
        <div class="ml-15 space-y-3 text-slate-300">
          <p>{$t('practices.viewFromAbove.guided.return.paragraph1')}</p>
          <p>{$t('practices.viewFromAbove.guided.return.paragraph2')}</p>
          <p>{$t('practices.viewFromAbove.guided.return.paragraph3')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Variations -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.viewFromAbove.variations.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('practices.viewFromAbove.variations.short.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.variations.short.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">
          {$t('practices.viewFromAbove.variations.extended.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.variations.extended.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-indigo-300">
          {$t('practices.viewFromAbove.variations.temporal.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.variations.temporal.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-violet-300">
          {$t('practices.viewFromAbove.variations.walking.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.viewFromAbove.variations.walking.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.viewFromAbove.benefits.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-blue-300">
          {$t('practices.viewFromAbove.benefits.perspective.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.viewFromAbove.benefits.perspective.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-purple-300">
          {$t('practices.viewFromAbove.benefits.anxiety.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.viewFromAbove.benefits.anxiety.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-indigo-300">
          {$t('practices.viewFromAbove.benefits.interconnection.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.viewFromAbove.benefits.interconnection.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-violet-300">
          {$t('practices.viewFromAbove.benefits.awe.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.viewFromAbove.benefits.awe.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Tips -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.viewFromAbove.tips.title')}</h2>
    
    <div class="space-y-4">
      {#each Array(6) as _, i}
        <div class="flex gap-4">
          <div class="shrink-0 text-2xl">🌟</div>
          <p class="text-lg text-slate-300">
            {$t(`practices.viewFromAbove.tips.tip${i + 1}`)}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Share Section -->
<section class="bg-slate-900 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <ShareButtons 
      title={$t('practices.viewFromAbove.meta.title')}
      description={$t('practices.viewFromAbove.meta.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.viewFromAbove.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('practices.viewFromAbove.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('practices.viewFromAbove.related.title')}
    </h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/scale-shifting"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔄</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">
          {$t('practices.viewFromAbove.related.scaleShifting.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.viewFromAbove.related.scaleShifting.description')}
        </p>
      </a>
      
      <a 
        href="{base}/practices/pale-blue-dot"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-cyan-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌌</div>
        <h3 class="mb-2 text-lg font-bold text-cyan-300">
          {$t('practices.viewFromAbove.related.paleBlue.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.viewFromAbove.related.paleBlue.description')}
        </p>
      </a>
      
      <a 
        href="{base}/practices/cosmic-morning"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-amber-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">☀️</div>
        <h3 class="mb-2 text-lg font-bold text-amber-300">
          {$t('practices.viewFromAbove.related.cosmicMorning.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.viewFromAbove.related.cosmicMorning.description')}
        </p>
      </a>
    </div>
  </div>
</section>
