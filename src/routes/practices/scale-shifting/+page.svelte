<!-- src/routes/practices/scale-shifting/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{$t('practices.scaleShifting.meta.title')} - Universalize</title>
  <meta name="description" content={$t('practices.scaleShifting.meta.description')} />
</svelte:head>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.scaleShifting.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-blue-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🔄</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('practices.scaleShifting.hero.title')}</h1>
    <p class="mb-4 text-xl text-blue-200">
      {$t('practices.scaleShifting.hero.subtitle')}
    </p>
    <div class="mx-auto flex max-w-md items-center justify-center gap-6 text-slate-400">
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{$t('practices.scaleShifting.hero.duration')}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>{$t('practices.scaleShifting.hero.frequency')}</span>
      </div>
    </div>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.scaleShifting.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.scaleShifting.intro.paragraph1')}</p>
      <p>{$t('practices.scaleShifting.intro.paragraph2')}</p>
      <p>{$t('practices.scaleShifting.intro.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-4 text-3xl font-bold text-white">{$t('practices.scaleShifting.practice.title')}</h2>
    <p class="mb-8 text-lg text-slate-400">{$t('practices.scaleShifting.practice.subtitle')}</p>
    
    <div class="space-y-8">
      <!-- Zooming In -->
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <h3 class="mb-6 text-2xl font-bold text-blue-300">{$t('practices.scaleShifting.practice.zoomIn.title')}</h3>
        
        <div class="space-y-4">
          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              1
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomIn.step1.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomIn.step1.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              2
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomIn.step2.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomIn.step2.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              3
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomIn.step3.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomIn.step3.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              4
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomIn.step4.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomIn.step4.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
              5
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomIn.step5.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomIn.step5.description')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Zooming Out -->
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <h3 class="mb-6 text-2xl font-bold text-purple-300">{$t('practices.scaleShifting.practice.zoomOut.title')}</h3>
        
        <div class="space-y-4">
          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              1
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step1.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step1.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              2
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step2.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step2.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              3
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step3.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step3.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              4
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step4.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step4.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              5
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step5.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step5.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              6
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step6.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step6.description')}</p>
            </div>
          </div>

          <div class="flex gap-4 rounded-lg bg-slate-800/50 p-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
              7
            </div>
            <div>
              <h4 class="mb-1 font-bold text-white">{$t('practices.scaleShifting.practice.zoomOut.step7.title')}</h4>
              <p class="text-sm text-slate-300">{$t('practices.scaleShifting.practice.zoomOut.step7.description')}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- The Shift -->
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-2xl font-bold text-green-300">{$t('practices.scaleShifting.practice.shift.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.practice.shift.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- When to Practice -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.scaleShifting.when.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">😰</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.scaleShifting.when.stress.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.when.stress.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🍽️</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.scaleShifting.when.eating.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.when.eating.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🚶</div>
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.scaleShifting.when.walking.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.when.walking.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">💭</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.scaleShifting.when.bored.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.when.bored.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">😡</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.scaleShifting.when.conflict.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.when.conflict.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">🌌</div>
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.scaleShifting.when.awe.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.when.awe.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Why It Works -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.scaleShifting.why.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.scaleShifting.why.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('practices.scaleShifting.why.benefits.title')}</h3>
        <ul class="space-y-3 text-slate-300">
          <li class="flex gap-3">
            <span class="mt-1 text-blue-400">✓</span>
            <span><strong class="text-white">{$t('practices.scaleShifting.why.benefits.perspective.title')}</strong> {$t('practices.scaleShifting.why.benefits.perspective.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-purple-400">✓</span>
            <span><strong class="text-white">{$t('practices.scaleShifting.why.benefits.anxiety.title')}</strong> {$t('practices.scaleShifting.why.benefits.anxiety.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-green-400">✓</span>
            <span><strong class="text-white">{$t('practices.scaleShifting.why.benefits.connection.title')}</strong> {$t('practices.scaleShifting.why.benefits.connection.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-yellow-400">✓</span>
            <span><strong class="text-white">{$t('practices.scaleShifting.why.benefits.wonder.title')}</strong> {$t('practices.scaleShifting.why.benefits.wonder.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-pink-400">✓</span>
            <span><strong class="text-white">{$t('practices.scaleShifting.why.benefits.flexibility.title')}</strong> {$t('practices.scaleShifting.why.benefits.flexibility.description')}</span>
          </li>
        </ul>
      </div>
      
      <p>{$t('practices.scaleShifting.why.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Advanced Variations -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.scaleShifting.advanced.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.scaleShifting.advanced.rapid.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.advanced.rapid.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.scaleShifting.advanced.time.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.advanced.time.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.scaleShifting.advanced.others.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.advanced.others.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.scaleShifting.advanced.guided.title')}</h3>
        <p class="text-slate-300">{$t('practices.scaleShifting.advanced.guided.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.scaleShifting.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('practices.scaleShifting.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practices.scaleShifting.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.scaleShifting.related.meditation.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.scaleShifting.related.meditation.description')}</p>
      </a>
      
      <a 
        href="{base}/tools/cosmic-zoom"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔬</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('practices.scaleShifting.related.tool.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.scaleShifting.related.tool.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/alien-anthropologist"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">👽</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('practices.scaleShifting.related.alien.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.scaleShifting.related.alien.description')}</p>
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
      <span>{$t('practices.scaleShifting.backToPractices')}</span>
    </a>
  </div>
</section>
