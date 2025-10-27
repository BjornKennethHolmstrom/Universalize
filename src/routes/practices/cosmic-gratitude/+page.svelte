<!-- src/routes/practices/cosmic-gratitude/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
</script>

<SEO
  title={$t('cosmicGratitude.meta.title')}
  description={$t('cosmicGratitude.meta.description')}
  keywords="gratitude practice, cosmic perspective, evening ritual, mindfulness, wellbeing"
  image="/practices/cosmic-gratitude-preview.jpg"
/>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.cosmicGratitude.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-purple-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🙏</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('practices.cosmicGratitude.hero.title')}</h1>
    <p class="mb-4 text-xl text-purple-200">
      {$t('practices.cosmicGratitude.hero.subtitle')}
    </p>
    <div class="mx-auto flex max-w-md items-center justify-center gap-6 text-slate-400">
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{$t('practices.cosmicGratitude.hero.duration')}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <span>{$t('practices.cosmicGratitude.hero.bestTime')}</span>
      </div>
    </div>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicGratitude.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.cosmicGratitude.intro.paragraph1')}</p>
      <p>{$t('practices.cosmicGratitude.intro.paragraph2')}</p>
      <p>{$t('practices.cosmicGratitude.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicGratitude.practice.title')}</h2>
    
    <div class="space-y-8">
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            1
          </div>
          <h3 class="text-2xl font-bold text-purple-300">{$t('practices.cosmicGratitude.practice.step1.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.cosmicGratitude.practice.step1.description')}</p>
        <div class="rounded-lg bg-slate-800/50 p-4 text-sm italic text-slate-400">
          "{$t('practices.cosmicGratitude.practice.step1.prompt')}"
        </div>
      </div>

      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            2
          </div>
          <h3 class="text-2xl font-bold text-blue-300">{$t('practices.cosmicGratitude.practice.step2.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.cosmicGratitude.practice.step2.description')}</p>
        <ul class="space-y-2 text-slate-300">
          <li class="flex gap-3">
            <span class="text-purple-400">•</span>
            <span>{$t('practices.cosmicGratitude.practice.step2.item1')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-400">•</span>
            <span>{$t('practices.cosmicGratitude.practice.step2.item2')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <span>{$t('practices.cosmicGratitude.practice.step2.item3')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-yellow-400">•</span>
            <span>{$t('practices.cosmicGratitude.practice.step2.item4')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-pink-400">•</span>
            <span>{$t('practices.cosmicGratitude.practice.step2.item5')}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            3
          </div>
          <h3 class="text-2xl font-bold text-green-300">{$t('practices.cosmicGratitude.practice.step3.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.cosmicGratitude.practice.step3.description')}</p>
        <div class="space-y-3 text-slate-300">
          <p><strong class="text-white">{$t('practices.cosmicGratitude.practice.step3.breath.title')}</strong> {$t('practices.cosmicGratitude.practice.step3.breath.description')}</p>
          <p><strong class="text-white">{$t('practices.cosmicGratitude.practice.step3.water.title')}</strong> {$t('practices.cosmicGratitude.practice.step3.water.description')}</p>
          <p><strong class="text-white">{$t('practices.cosmicGratitude.practice.step3.atoms.title')}</strong> {$t('practices.cosmicGratitude.practice.step3.atoms.description')}</p>
        </div>
      </div>

      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            4
          </div>
          <h3 class="text-2xl font-bold text-purple-300">{$t('practices.cosmicGratitude.practice.step4.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.cosmicGratitude.practice.step4.description')}</p>
        <div class="rounded-lg bg-slate-800/50 p-4 text-sm italic text-slate-400">
          "{$t('practices.cosmicGratitude.practice.step4.prompt')}"
        </div>
      </div>

      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            5
          </div>
          <h3 class="text-2xl font-bold text-blue-300">{$t('practices.cosmicGratitude.practice.step5.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.cosmicGratitude.practice.step5.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Variations -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicGratitude.variations.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.cosmicGratitude.variations.morning.title')}</h3>
        <p class="text-slate-300">{$t('practices.cosmicGratitude.variations.morning.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.cosmicGratitude.variations.written.title')}</h3>
        <p class="text-slate-300">{$t('practices.cosmicGratitude.variations.written.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.cosmicGratitude.variations.walking.title')}</h3>
        <p class="text-slate-300">{$t('practices.cosmicGratitude.variations.walking.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.cosmicGratitude.variations.family.title')}</h3>
        <p class="text-slate-300">{$t('practices.cosmicGratitude.variations.family.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Why It Works -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.cosmicGratitude.why.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.cosmicGratitude.why.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('practices.cosmicGratitude.why.benefits.title')}</h3>
        <ul class="space-y-3 text-slate-300">
          <li class="flex gap-3">
            <span class="mt-1 text-purple-400">✓</span>
            <span><strong class="text-white">{$t('practices.cosmicGratitude.why.benefits.perspective.title')}</strong> {$t('practices.cosmicGratitude.why.benefits.perspective.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-blue-400">✓</span>
            <span><strong class="text-white">{$t('practices.cosmicGratitude.why.benefits.wellbeing.title')}</strong> {$t('practices.cosmicGratitude.why.benefits.wellbeing.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-green-400">✓</span>
            <span><strong class="text-white">{$t('practices.cosmicGratitude.why.benefits.connection.title')}</strong> {$t('practices.cosmicGratitude.why.benefits.connection.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-yellow-400">✓</span>
            <span><strong class="text-white">{$t('practices.cosmicGratitude.why.benefits.action.title')}</strong> {$t('practices.cosmicGratitude.why.benefits.action.description')}</span>
          </li>
        </ul>
      </div>
      
      <p>{$t('practices.cosmicGratitude.why.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Share Section -->
<section class="bg-slate-900 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <ShareButtons 
      title={$t('cosmicGratitude.meta.title')}
      description={$t('cosmicGratitude.meta.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.cosmicGratitude.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('practices.cosmicGratitude.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practices.cosmicGratitude.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/cosmic-morning"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">☀️</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.cosmicGratitude.related.morning.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.cosmicGratitude.related.morning.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('practices.cosmicGratitude.related.meditation.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.cosmicGratitude.related.meditation.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/pale-blue-dot"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌌</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.cosmicGratitude.related.paleBlue.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.cosmicGratitude.related.paleBlue.description')}</p>
      </a>
    </div>
  </div>
</section>

<!-- Back Navigation -->
<section class="border-t border-slate-800 bg-slate-950 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.cosmicGratitude.backToPractices')}</span>
    </a>
  </div>
</section>
