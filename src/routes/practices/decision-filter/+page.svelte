<!-- src/routes/practices/decision-filter/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
</script>

<SEO
  title={$t('decisionFilter.meta.title')}
  description={$t('decisionFilter.meta.description')}
  keywords="decision making, universal perspective, long-term thinking, wise choices, temporal scale"
  image="/practices/decision-filter-preview.jpg"
/>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.decisionFilter.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-cyan-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🎯</div>
    <h1 class="mb-4 text-5xl font-bold text-white">{$t('practices.decisionFilter.hero.title')}</h1>
    <p class="mb-6 text-xl text-cyan-200">
      {$t('practices.decisionFilter.hero.subtitle')}
    </p>
    <div class="flex items-center justify-center gap-4 text-sm text-slate-400">
      <span class="flex items-center gap-2">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {$t('practices.decisionFilter.hero.duration')}
      </span>
      <span>•</span>
      <span>{$t('practices.decisionFilter.hero.frequency')}</span>
    </div>
  </div>
</section>

<!-- Overview -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('practices.decisionFilter.overview.title')}</h2>
    <div class="space-y-4 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.decisionFilter.overview.paragraph1')}</p>
      <p>{$t('practices.decisionFilter.overview.paragraph2')}</p>
      <p>{$t('practices.decisionFilter.overview.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Framework -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.decisionFilter.framework.title')}</h2>
    
    <div class="space-y-8">
      <!-- Dimension 1 -->
      <div class="rounded-xl border border-cyan-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-slate-900">
            1
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-cyan-300">
              {$t('practices.decisionFilter.framework.dimension1.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.decisionFilter.framework.dimension1.description')}</p>
            <div class="space-y-3">
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-cyan-200">{$t('practices.decisionFilter.framework.dimension1.tomorrow.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension1.tomorrow.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-cyan-200">{$t('practices.decisionFilter.framework.dimension1.year.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension1.year.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-cyan-200">{$t('practices.decisionFilter.framework.dimension1.decade.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension1.decade.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-cyan-200">{$t('practices.decisionFilter.framework.dimension1.century.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension1.century.question')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dimension 2 -->
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            2
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-blue-300">
              {$t('practices.decisionFilter.framework.dimension2.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.decisionFilter.framework.dimension2.description')}</p>
            <div class="space-y-3">
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-blue-200">{$t('practices.decisionFilter.framework.dimension2.self.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension2.self.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-blue-200">{$t('practices.decisionFilter.framework.dimension2.loved.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension2.loved.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-blue-200">{$t('practices.decisionFilter.framework.dimension2.community.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension2.community.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-blue-200">{$t('practices.decisionFilter.framework.dimension2.humanity.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension2.humanity.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-blue-200">{$t('practices.decisionFilter.framework.dimension2.biosphere.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension2.biosphere.question')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dimension 3 -->
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            3
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-purple-300">
              {$t('practices.decisionFilter.framework.dimension3.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.decisionFilter.framework.dimension3.description')}</p>
            <div class="space-y-3">
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-purple-200">{$t('practices.decisionFilter.framework.dimension3.historian.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension3.historian.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-purple-200">{$t('practices.decisionFilter.framework.dimension3.alien.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension3.alien.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-purple-200">{$t('practices.decisionFilter.framework.dimension3.child.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension3.child.question')}</p>
              </div>
              <div class="rounded-lg bg-slate-800/50 p-4">
                <p class="mb-2 font-semibold text-purple-200">{$t('practices.decisionFilter.framework.dimension3.wise.title')}</p>
                <p class="text-sm text-slate-400">{$t('practices.decisionFilter.framework.dimension3.wise.question')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- How to Use -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.decisionFilter.howTo.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">📝</span>
          <h3 class="text-xl font-bold text-cyan-300">{$t('practices.decisionFilter.howTo.step1.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.decisionFilter.howTo.step1.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">🔍</span>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.decisionFilter.howTo.step2.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.decisionFilter.howTo.step2.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">⚖️</span>
          <h3 class="text-xl font-bold text-purple-300">{$t('practices.decisionFilter.howTo.step3.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.decisionFilter.howTo.step3.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">✅</span>
          <h3 class="text-xl font-bold text-emerald-300">{$t('practices.decisionFilter.howTo.step4.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.decisionFilter.howTo.step4.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Examples -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.decisionFilter.examples.title')}</h2>
    
    <div class="space-y-8">
      <!-- Example 1 -->
      <div class="rounded-xl border border-cyan-500/50 bg-slate-900/30 p-8">
        <h3 class="mb-4 text-2xl font-bold text-cyan-300">{$t('practices.decisionFilter.examples.career.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('practices.decisionFilter.examples.career.decision')}</strong> {$t('practices.decisionFilter.examples.career.context')}</p>
          <div class="ml-4 space-y-2 border-l-2 border-cyan-500 pl-4 text-sm">
            <p><strong class="text-cyan-200">{$t('practices.decisionFilter.examples.career.tomorrow.label')}</strong> {$t('practices.decisionFilter.examples.career.tomorrow.answer')}</p>
            <p><strong class="text-cyan-200">{$t('practices.decisionFilter.examples.career.decade.label')}</strong> {$t('practices.decisionFilter.examples.career.decade.answer')}</p>
            <p><strong class="text-blue-200">{$t('practices.decisionFilter.examples.career.community.label')}</strong> {$t('practices.decisionFilter.examples.career.community.answer')}</p>
            <p><strong class="text-purple-200">{$t('practices.decisionFilter.examples.career.wise.label')}</strong> {$t('practices.decisionFilter.examples.career.wise.answer')}</p>
          </div>
          <p class="pt-2"><strong class="text-emerald-300">{$t('practices.decisionFilter.examples.career.insight.label')}</strong> {$t('practices.decisionFilter.examples.career.insight.answer')}</p>
        </div>
      </div>

      <!-- Example 2 -->
      <div class="rounded-xl border border-blue-500/50 bg-slate-900/30 p-8">
        <h3 class="mb-4 text-2xl font-bold text-blue-300">{$t('practices.decisionFilter.examples.home.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('practices.decisionFilter.examples.home.decision')}</strong> {$t('practices.decisionFilter.examples.home.context')}</p>
          <div class="ml-4 space-y-2 border-l-2 border-blue-500 pl-4 text-sm">
            <p><strong class="text-cyan-200">{$t('practices.decisionFilter.examples.home.year.label')}</strong> {$t('practices.decisionFilter.examples.home.year.answer')}</p>
            <p><strong class="text-blue-200">{$t('practices.decisionFilter.examples.home.loved.label')}</strong> {$t('practices.decisionFilter.examples.home.loved.answer')}</p>
            <p><strong class="text-blue-200">{$t('practices.decisionFilter.examples.home.biosphere.label')}</strong> {$t('practices.decisionFilter.examples.home.biosphere.answer')}</p>
            <p><strong class="text-purple-200">{$t('practices.decisionFilter.examples.home.child.label')}</strong> {$t('practices.decisionFilter.examples.home.child.answer')}</p>
          </div>
          <p class="pt-2"><strong class="text-emerald-300">{$t('practices.decisionFilter.examples.home.insight.label')}</strong> {$t('practices.decisionFilter.examples.home.insight.answer')}</p>
        </div>
      </div>

      <!-- Example 3 -->
      <div class="rounded-xl border border-purple-500/50 bg-slate-900/30 p-8">
        <h3 class="mb-4 text-2xl font-bold text-purple-300">{$t('practices.decisionFilter.examples.conflict.title')}</h3>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('practices.decisionFilter.examples.conflict.decision')}</strong> {$t('practices.decisionFilter.examples.conflict.context')}</p>
          <div class="ml-4 space-y-2 border-l-2 border-purple-500 pl-4 text-sm">
            <p><strong class="text-cyan-200">{$t('practices.decisionFilter.examples.conflict.tomorrow.label')}</strong> {$t('practices.decisionFilter.examples.conflict.tomorrow.answer')}</p>
            <p><strong class="text-blue-200">{$t('practices.decisionFilter.examples.conflict.loved.label')}</strong> {$t('practices.decisionFilter.examples.conflict.loved.answer')}</p>
            <p><strong class="text-purple-200">{$t('practices.decisionFilter.examples.conflict.alien.label')}</strong> {$t('practices.decisionFilter.examples.conflict.alien.answer')}</p>
          </div>
          <p class="pt-2"><strong class="text-emerald-300">{$t('practices.decisionFilter.examples.conflict.insight.label')}</strong> {$t('practices.decisionFilter.examples.conflict.insight.answer')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Benefits -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.decisionFilter.benefits.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-cyan-300">
          {$t('practices.decisionFilter.benefits.clarity.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.decisionFilter.benefits.clarity.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-blue-300">
          {$t('practices.decisionFilter.benefits.wisdom.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.decisionFilter.benefits.wisdom.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-purple-300">
          {$t('practices.decisionFilter.benefits.alignment.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.decisionFilter.benefits.alignment.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-emerald-300">
          {$t('practices.decisionFilter.benefits.regret.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.decisionFilter.benefits.regret.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Tips -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.decisionFilter.tips.title')}</h2>
    
    <div class="space-y-4">
      {#each Array(6) as _, i}
        <div class="flex gap-4">
          <div class="shrink-0 text-2xl">⭐</div>
          <p class="text-lg text-slate-300">
            {$t(`practices.decisionFilter.tips.tip${i + 1}`)}
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
      title={$t('decisionFilter.meta.title')}
      description={$t('decisionFilter.meta.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.decisionFilter.quote.text')}"
    </blockquote>
    <cite class="text-lg text-cyan-400">— {$t('practices.decisionFilter.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('practices.decisionFilter.related.title')}
    </h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">
          {$t('practices.decisionFilter.related.meditation.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.decisionFilter.related.meditation.description')}
        </p>
      </a>
      
      <a 
        href="{base}/practices/cosmic-consumption"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-emerald-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🛒</div>
        <h3 class="mb-2 text-lg font-bold text-emerald-300">
          {$t('practices.decisionFilter.related.consumption.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.decisionFilter.related.consumption.description')}
        </p>
      </a>
      
      <a 
        href="{base}/tools/cosmic-zoom"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-cyan-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔬</div>
        <h3 class="mb-2 text-lg font-bold text-cyan-300">
          {$t('practices.decisionFilter.related.zoom.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.decisionFilter.related.zoom.description')}
        </p>
      </a>
    </div>
  </div>
</section>
