<!-- src/routes/practices/pale-blue-dot/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<svelte:head>
  <title>{$t('practices.paleBlue.meta.title')} - Universalize</title>
  <meta name="description" content={$t('practices.paleBlue.meta.description')} />
</svelte:head>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.paleBlue.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🌌</div>
    <h1 class="mb-4 text-5xl font-bold text-white">{$t('practices.paleBlue.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('practices.paleBlue.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.paleBlue.intro.paragraph1')}</p>
      <p>{$t('practices.paleBlue.intro.paragraph2')}</p>
      <p>{$t('practices.paleBlue.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Image -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practices.paleBlue.image.title')}</h2>
    
    <!-- Placeholder for the actual Pale Blue Dot image -->
    <div class="mb-8 overflow-hidden rounded-xl border border-blue-500 bg-black">
      <img 
        src="/images/pale-blue-dot.jpg" 
        alt="Earth from 6 billion kilometers away - the Pale Blue Dot"
        class="w-full"
      />
    </div>
    
    <p class="text-center italic text-slate-400">
      {$t('practices.paleBlue.image.caption')}
    </p>
  </div>
</section>

<!-- Carl Sagan's Meditation -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.paleBlue.meditation.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-8">
        <blockquote class="space-y-6 text-lg leading-relaxed text-slate-300">
          <p>{$t('practices.paleBlue.meditation.paragraph1')}</p>
          <p>{$t('practices.paleBlue.meditation.paragraph2')}</p>
          <p>{$t('practices.paleBlue.meditation.paragraph3')}</p>
          <p>{$t('practices.paleBlue.meditation.paragraph4')}</p>
          <p>{$t('practices.paleBlue.meditation.paragraph5')}</p>
        </blockquote>
        <cite class="mt-6 block text-right text-blue-400">
          — {$t('practices.paleBlue.meditation.author')}
        </cite>
      </div>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.paleBlue.practice.title')}</h2>
    
    <div class="mb-8 space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.paleBlue.practice.intro')}</p>
    </div>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">1️⃣</span>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.paleBlue.practice.step1.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.paleBlue.practice.step1.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">2️⃣</span>
          <h3 class="text-xl font-bold text-purple-300">{$t('practices.paleBlue.practice.step2.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.paleBlue.practice.step2.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">3️⃣</span>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.paleBlue.practice.step3.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.paleBlue.practice.step3.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">4️⃣</span>
          <h3 class="text-xl font-bold text-purple-300">{$t('practices.paleBlue.practice.step4.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.paleBlue.practice.step4.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <span class="text-2xl">5️⃣</span>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.paleBlue.practice.step5.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.paleBlue.practice.step5.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Reflection Prompts -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.paleBlue.prompts.title')}</h2>
    
    <div class="space-y-4">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <p class="text-lg text-slate-300">{$t('practices.paleBlue.prompts.prompt1')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <p class="text-lg text-slate-300">{$t('practices.paleBlue.prompts.prompt2')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <p class="text-lg text-slate-300">{$t('practices.paleBlue.prompts.prompt3')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <p class="text-lg text-slate-300">{$t('practices.paleBlue.prompts.prompt4')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <p class="text-lg text-slate-300">{$t('practices.paleBlue.prompts.prompt5')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Integration -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.paleBlue.integration.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.paleBlue.integration.regular.title')}</h3>
        <p class="text-slate-300">{$t('practices.paleBlue.integration.regular.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.paleBlue.integration.crisis.title')}</h3>
        <p class="text-slate-300">{$t('practices.paleBlue.integration.crisis.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.paleBlue.integration.share.title')}</h3>
        <p class="text-slate-300">{$t('practices.paleBlue.integration.share.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.paleBlue.integration.combine.title')}</h3>
        <p class="text-slate-300">{$t('practices.paleBlue.integration.combine.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Why This Matters -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.paleBlue.why.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.paleBlue.why.paragraph1')}</p>
      <p>{$t('practices.paleBlue.why.paragraph2')}</p>
      <p>{$t('practices.paleBlue.why.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practices.paleBlue.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="/explore/overview-effect"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.paleBlue.related.overviewEffect')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.paleBlue.related.overviewEffectDesc')}</p>
      </a>
      
      <a 
        href="/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('practices.paleBlue.related.viewFromAbove')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.paleBlue.related.viewFromAboveDesc')}</p>
      </a>
      
      <a 
        href="/pillars/challenges"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.paleBlue.related.challenges')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.paleBlue.related.challengesDesc')}</p>
      </a>
    </div>
  </div>
</section>

<!-- Back Navigation -->
<section class="border-t border-slate-800 bg-slate-950 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <a 
      href="/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.paleBlue.backToPractices')}</span>
    </a>
  </div>
</section>
