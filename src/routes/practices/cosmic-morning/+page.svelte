<!-- src/routes/practices/cosmic-morning/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
</script>

<SEO
  title={$t('practices.cosmicMorning.meta.title')}
  description={$t('practices.cosmicMorning.meta.description')}
  keywords="cosmic morning, mindfulness, daily practice, universal perspective, earth systems"
  image="/practices/cosmic-morning-preview.jpg"
/>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.cosmicMorning.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-amber-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">☀️</div>
    <h1 class="mb-4 text-5xl font-bold text-white">{$t('practices.cosmicMorning.hero.title')}</h1>
    <p class="mb-6 text-xl text-amber-200">
      {$t('practices.cosmicMorning.hero.subtitle')}
    </p>
    <div class="flex items-center justify-center gap-4 text-sm text-slate-400">
      <span class="flex items-center gap-2">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {$t('practices.cosmicMorning.hero.duration')}
      </span>
      <span>•</span>
      <span>{$t('practices.cosmicMorning.hero.frequency')}</span>
    </div>
  </div>
</section>

<!-- Overview -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('practices.cosmicMorning.overview.title')}</h2>
    <div class="space-y-4 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.cosmicMorning.overview.paragraph1')}</p>
      <p>{$t('practices.cosmicMorning.overview.paragraph2')}</p>
      <p>{$t('practices.cosmicMorning.overview.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicMorning.thePractice.title')}</h2>
    
    <div class="space-y-8">
      <!-- Step 1 -->
      <div class="rounded-xl border border-amber-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-slate-900">
            1
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-amber-300">
              {$t('practices.cosmicMorning.thePractice.step1.title')}
            </h3>
            <p class="mb-3 text-slate-300">{$t('practices.cosmicMorning.thePractice.step1.description')}</p>
            <div class="rounded-lg bg-slate-800/50 p-4">
              <p class="text-sm italic text-slate-400">
                {$t('practices.cosmicMorning.thePractice.step1.example')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            2
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-blue-300">
              {$t('practices.cosmicMorning.thePractice.step2.title')}
            </h3>
            <p class="mb-3 text-slate-300">{$t('practices.cosmicMorning.thePractice.step2.description')}</p>
            <div class="rounded-lg bg-slate-800/50 p-4">
              <p class="text-sm italic text-slate-400">
                {$t('practices.cosmicMorning.thePractice.step2.example')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-slate-900">
            3
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-green-300">
              {$t('practices.cosmicMorning.thePractice.step3.title')}
            </h3>
            <p class="mb-3 text-slate-300">{$t('practices.cosmicMorning.thePractice.step3.description')}</p>
            <div class="rounded-lg bg-slate-800/50 p-4">
              <p class="text-sm italic text-slate-400">
                {$t('practices.cosmicMorning.thePractice.step3.example')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            4
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-purple-300">
              {$t('practices.cosmicMorning.thePractice.step4.title')}
            </h3>
            <p class="mb-3 text-slate-300">{$t('practices.cosmicMorning.thePractice.step4.description')}</p>
            <div class="rounded-lg bg-slate-800/50 p-4">
              <p class="text-sm italic text-slate-400">
                {$t('practices.cosmicMorning.thePractice.step4.example')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Going Deeper -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicMorning.deeper.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('practices.cosmicMorning.deeper.coffee.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.cosmicMorning.deeper.coffee.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">
          {$t('practices.cosmicMorning.deeper.breath.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.cosmicMorning.deeper.breath.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">
          {$t('practices.cosmicMorning.deeper.water.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.cosmicMorning.deeper.water.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-amber-300">
          {$t('practices.cosmicMorning.deeper.body.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.cosmicMorning.deeper.body.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicMorning.benefits.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-blue-300">
          {$t('practices.cosmicMorning.benefits.gratitude.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicMorning.benefits.gratitude.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-green-300">
          {$t('practices.cosmicMorning.benefits.interconnection.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicMorning.benefits.interconnection.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-purple-300">
          {$t('practices.cosmicMorning.benefits.presence.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicMorning.benefits.presence.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-amber-300">
          {$t('practices.cosmicMorning.benefits.intention.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicMorning.benefits.intention.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Tips -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicMorning.tips.title')}</h2>
    
    <div class="space-y-4">
      {#each Array(5) as _, i}
        <div class="flex gap-4">
          <div class="shrink-0 text-2xl">✨</div>
          <p class="text-lg text-slate-300">
            {$t(`practices.cosmicMorning.tips.tip${i + 1}`)}
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
      title={$t('practices.cosmicMorning.meta.title')}
      description={$t('practices.cosmicMorning.meta.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.cosmicMorning.quote.text')}"
    </blockquote>
    <cite class="text-lg text-amber-400">— {$t('practices.cosmicMorning.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('practices.cosmicMorning.related.title')}
    </h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/cosmic-consumption"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🛒</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">
          {$t('practices.cosmicMorning.related.consumption.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.cosmicMorning.related.consumption.description')}
        </p>
      </a>
      
      <a 
        href="{base}/practices/cosmic-gratitude"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🙏</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">
          {$t('practices.cosmicMorning.related.gratitude.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.cosmicMorning.related.gratitude.description')}
        </p>
      </a>
      
      <a 
        href="{base}/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">
          {$t('practices.cosmicMorning.related.meditation.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.cosmicMorning.related.meditation.description')}
        </p>
      </a>
    </div>
  </div>
</section>
