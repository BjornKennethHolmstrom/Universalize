<!-- src/routes/practices/cosmic-consumption/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{$t('practices.cosmicConsumption.meta.title')} - Universalize</title>
  <meta name="description" content={$t('practices.cosmicConsumption.meta.description')} />
</svelte:head>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.cosmicConsumption.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-emerald-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🛒</div>
    <h1 class="mb-4 text-5xl font-bold text-white">{$t('practices.cosmicConsumption.hero.title')}</h1>
    <p class="mb-6 text-xl text-emerald-200">
      {$t('practices.cosmicConsumption.hero.subtitle')}
    </p>
    <div class="flex items-center justify-center gap-4 text-sm text-slate-400">
      <span class="flex items-center gap-2">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {$t('practices.cosmicConsumption.hero.duration')}
      </span>
      <span>•</span>
      <span>{$t('practices.cosmicConsumption.hero.frequency')}</span>
    </div>
  </div>
</section>

<!-- Overview -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('practices.cosmicConsumption.overview.title')}</h2>
    <div class="space-y-4 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.cosmicConsumption.overview.paragraph1')}</p>
      <p>{$t('practices.cosmicConsumption.overview.paragraph2')}</p>
      <p>{$t('practices.cosmicConsumption.overview.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicConsumption.thePractice.title')}</h2>
    
    <div class="space-y-8">
      <!-- Question 1 -->
      <div class="rounded-xl border border-emerald-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xl font-bold text-slate-900">
            1
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-emerald-300">
              {$t('practices.cosmicConsumption.thePractice.question1.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.cosmicConsumption.thePractice.question1.description')}</p>
            <div class="space-y-2 rounded-lg bg-slate-800/50 p-4 text-sm text-slate-400">
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question1.example1.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question1.example1.trace')}</p>
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question1.example2.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question1.example2.trace')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Question 2 -->
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            2
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-blue-300">
              {$t('practices.cosmicConsumption.thePractice.question2.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.cosmicConsumption.thePractice.question2.description')}</p>
            <div class="space-y-2 rounded-lg bg-slate-800/50 p-4 text-sm text-slate-400">
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question2.example1.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question2.example1.labor')}</p>
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question2.example2.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question2.example2.labor')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Question 3 -->
      <div class="rounded-xl border border-amber-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-slate-900">
            3
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-amber-300">
              {$t('practices.cosmicConsumption.thePractice.question3.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.cosmicConsumption.thePractice.question3.description')}</p>
            <div class="space-y-2 rounded-lg bg-slate-800/50 p-4 text-sm text-slate-400">
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question3.example1.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question3.example1.impact')}</p>
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question3.example2.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question3.example2.impact')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Question 4 -->
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            4
          </div>
          <div class="flex-1">
            <h3 class="mb-3 text-2xl font-bold text-purple-300">
              {$t('practices.cosmicConsumption.thePractice.question4.title')}
            </h3>
            <p class="mb-4 text-slate-300">{$t('practices.cosmicConsumption.thePractice.question4.description')}</p>
            <div class="space-y-2 rounded-lg bg-slate-800/50 p-4 text-sm text-slate-400">
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question4.example1.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question4.example1.world')}</p>
              <p><strong class="text-slate-300">{$t('practices.cosmicConsumption.thePractice.question4.example2.item')}</strong> {$t('practices.cosmicConsumption.thePractice.question4.example2.world')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Categories -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicConsumption.categories.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-emerald-300">
          {$t('practices.cosmicConsumption.categories.food.title')}
        </h3>
        <p class="mb-3 text-slate-300">{$t('practices.cosmicConsumption.categories.food.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('practices.cosmicConsumption.categories.food.tip1')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.food.tip2')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.food.tip3')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('practices.cosmicConsumption.categories.clothing.title')}
        </h3>
        <p class="mb-3 text-slate-300">{$t('practices.cosmicConsumption.categories.clothing.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('practices.cosmicConsumption.categories.clothing.tip1')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.clothing.tip2')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.clothing.tip3')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-amber-300">
          {$t('practices.cosmicConsumption.categories.technology.title')}
        </h3>
        <p class="mb-3 text-slate-300">{$t('practices.cosmicConsumption.categories.technology.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('practices.cosmicConsumption.categories.technology.tip1')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.technology.tip2')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.technology.tip3')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">
          {$t('practices.cosmicConsumption.categories.energy.title')}
        </h3>
        <p class="mb-3 text-slate-300">{$t('practices.cosmicConsumption.categories.energy.description')}</p>
        <ul class="space-y-1 text-sm text-slate-400">
          <li>• {$t('practices.cosmicConsumption.categories.energy.tip1')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.energy.tip2')}</li>
          <li>• {$t('practices.cosmicConsumption.categories.energy.tip3')}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Systemic Change -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('practices.cosmicConsumption.systemic.title')}</h2>
    
    <div class="mb-8 space-y-4 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.cosmicConsumption.systemic.paragraph1')}</p>
      <p>{$t('practices.cosmicConsumption.systemic.paragraph2')}</p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-emerald-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-emerald-300">
          {$t('practices.cosmicConsumption.systemic.individual.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.cosmicConsumption.systemic.individual.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('practices.cosmicConsumption.systemic.collective.title')}
        </h3>
        <p class="text-sm text-slate-300">
          {$t('practices.cosmicConsumption.systemic.collective.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Benefits -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicConsumption.benefits.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-emerald-300">
          {$t('practices.cosmicConsumption.benefits.awareness.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicConsumption.benefits.awareness.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-blue-300">
          {$t('practices.cosmicConsumption.benefits.gratitude.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicConsumption.benefits.gratitude.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-amber-300">
          {$t('practices.cosmicConsumption.benefits.empowerment.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicConsumption.benefits.empowerment.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-purple-300">
          {$t('practices.cosmicConsumption.benefits.simplicity.title')}
        </h3>
        <p class="text-slate-300">
          {$t('practices.cosmicConsumption.benefits.simplicity.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Tips -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicConsumption.tips.title')}</h2>
    
    <div class="space-y-4">
      {#each Array(6) as _, i}
        <div class="flex gap-4">
          <div class="shrink-0 text-2xl">🌍</div>
          <p class="text-lg text-slate-300">
            {$t(`practices.cosmicConsumption.tips.tip${i + 1}`)}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.cosmicConsumption.quote.text')}"
    </blockquote>
    <cite class="text-lg text-emerald-400">— {$t('practices.cosmicConsumption.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('practices.cosmicConsumption.related.title')}
    </h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/cosmic-morning"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-amber-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">☀️</div>
        <h3 class="mb-2 text-lg font-bold text-amber-300">
          {$t('practices.cosmicConsumption.related.morning.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.cosmicConsumption.related.morning.description')}
        </p>
      </a>
      
      <a 
        href="{base}/tools/decision-filter"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🎯</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">
          {$t('practices.cosmicConsumption.related.decision.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.cosmicConsumption.related.decision.description')}
        </p>
      </a>
      
      <a 
        href="{base}/pillars/challenges"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">
          {$t('practices.cosmicConsumption.related.challenges.title')}
        </h3>
        <p class="text-sm text-slate-400">
          {$t('practices.cosmicConsumption.related.challenges.description')}
        </p>
      </a>
    </div>
  </div>
</section>
