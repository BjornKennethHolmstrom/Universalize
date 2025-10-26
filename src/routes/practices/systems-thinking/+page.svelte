<!-- src/routes/practices/systems-thinking/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{$t('practices.systemsThinking.meta.title')} - Universalize</title>
  <meta name="description" content={$t('practices.systemsThinking.meta.description')} />
</svelte:head>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="{base}/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.systemsThinking.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-purple-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🕸️</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('practices.systemsThinking.hero.title')}</h1>
    <p class="mb-4 text-xl text-purple-200">
      {$t('practices.systemsThinking.hero.subtitle')}
    </p>
    <div class="mx-auto flex max-w-md items-center justify-center gap-6 text-slate-400">
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>{$t('practices.systemsThinking.hero.mode')}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>{$t('practices.systemsThinking.hero.frequency')}</span>
      </div>
    </div>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.systemsThinking.intro.paragraph1')}</p>
      <p>{$t('practices.systemsThinking.intro.paragraph2')}</p>
      <p>{$t('practices.systemsThinking.intro.paragraph3')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-800/50 p-6 italic text-slate-300">
        "{$t('practices.systemsThinking.intro.quote')}"
      </div>
      
      <p>{$t('practices.systemsThinking.intro.paragraph4')}</p>
    </div>
  </div>
</section>

<!-- Core Principles -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.principles.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="text-3xl">🔄</div>
          <h3 class="text-2xl font-bold text-purple-300">{$t('practices.systemsThinking.principles.interconnection.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.principles.interconnection.description')}</p>
      </div>

      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="text-3xl">⚡</div>
          <h3 class="text-2xl font-bold text-blue-300">{$t('practices.systemsThinking.principles.feedback.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.principles.feedback.description')}</p>
      </div>

      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="text-3xl">🌊</div>
          <h3 class="text-2xl font-bold text-green-300">{$t('practices.systemsThinking.principles.emergence.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.principles.emergence.description')}</p>
      </div>

      <div class="rounded-xl border border-yellow-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="text-3xl">⏱️</div>
          <h3 class="text-2xl font-bold text-yellow-300">{$t('practices.systemsThinking.principles.delays.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.principles.delays.description')}</p>
      </div>

      <div class="rounded-xl border border-pink-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="text-3xl">🎯</div>
          <h3 class="text-2xl font-bold text-pink-300">{$t('practices.systemsThinking.principles.leverage.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.principles.leverage.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.practice.title')}</h2>
    
    <div class="space-y-8">
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            1
          </div>
          <h3 class="text-2xl font-bold text-purple-300">{$t('practices.systemsThinking.practice.step1.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.systemsThinking.practice.step1.description')}</p>
        <ul class="space-y-2 text-slate-300">
          <li class="flex gap-3">
            <span class="text-purple-400">•</span>
            <span>{$t('practices.systemsThinking.practice.step1.question1')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-400">•</span>
            <span>{$t('practices.systemsThinking.practice.step1.question2')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <span>{$t('practices.systemsThinking.practice.step1.question3')}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            2
          </div>
          <h3 class="text-2xl font-bold text-blue-300">{$t('practices.systemsThinking.practice.step2.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.systemsThinking.practice.step2.description')}</p>
        <div class="space-y-4">
          <div class="rounded-lg bg-slate-900/50 p-4">
            <h4 class="mb-2 font-bold text-green-300">{$t('practices.systemsThinking.practice.step2.reinforcing.title')}</h4>
            <p class="text-sm text-slate-400">{$t('practices.systemsThinking.practice.step2.reinforcing.description')}</p>
          </div>
          <div class="rounded-lg bg-slate-900/50 p-4">
            <h4 class="mb-2 font-bold text-blue-300">{$t('practices.systemsThinking.practice.step2.balancing.title')}</h4>
            <p class="text-sm text-slate-400">{$t('practices.systemsThinking.practice.step2.balancing.description')}</p>
          </div>
        </div>
      </div>

      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            3
          </div>
          <h3 class="text-2xl font-bold text-green-300">{$t('practices.systemsThinking.practice.step3.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.practice.step3.description')}</p>
      </div>

      <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-white">
            4
          </div>
          <h3 class="text-2xl font-bold text-yellow-300">{$t('practices.systemsThinking.practice.step4.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.practice.step4.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Systems to Explore -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.systems.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🌍</div>
          <h3 class="text-xl font-bold text-green-300">{$t('practices.systemsThinking.systems.climate.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.systems.climate.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">💰</div>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.systemsThinking.systems.economy.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.systems.economy.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🧠</div>
          <h3 class="text-xl font-bold text-purple-300">{$t('practices.systemsThinking.systems.body.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.systems.body.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🏙️</div>
          <h3 class="text-xl font-bold text-yellow-300">{$t('practices.systemsThinking.systems.cities.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.systems.cities.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🌱</div>
          <h3 class="text-xl font-bold text-green-300">{$t('practices.systemsThinking.systems.ecosystems.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.systems.ecosystems.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">👥</div>
          <h3 class="text-xl font-bold text-pink-300">{$t('practices.systemsThinking.systems.social.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.systemsThinking.systems.social.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Common System Patterns -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.patterns.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.systemsThinking.patterns.intro')}</p>
      
      <div class="my-8 space-y-6">
        <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.systemsThinking.patterns.tragedy.title')}</h3>
          <p class="text-slate-300">{$t('practices.systemsThinking.patterns.tragedy.description')}</p>
        </div>

        <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.systemsThinking.patterns.fixes.title')}</h3>
          <p class="text-slate-300">{$t('practices.systemsThinking.patterns.fixes.description')}</p>
        </div>

        <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.systemsThinking.patterns.limits.title')}</h3>
          <p class="text-slate-300">{$t('practices.systemsThinking.patterns.limits.description')}</p>
        </div>

        <div class="rounded-xl border border-yellow-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('practices.systemsThinking.patterns.escalation.title')}</h3>
          <p class="text-slate-300">{$t('practices.systemsThinking.patterns.escalation.description')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why It Works -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.why.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.systemsThinking.why.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('practices.systemsThinking.why.benefits.title')}</h3>
        <ul class="space-y-3 text-slate-300">
          <li class="flex gap-3">
            <span class="mt-1 text-green-400">✓</span>
            <span><strong class="text-white">{$t('practices.systemsThinking.why.benefits.unintended.title')}</strong> {$t('practices.systemsThinking.why.benefits.unintended.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-blue-400">✓</span>
            <span><strong class="text-white">{$t('practices.systemsThinking.why.benefits.leverage.title')}</strong> {$t('practices.systemsThinking.why.benefits.leverage.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-purple-400">✓</span>
            <span><strong class="text-white">{$t('practices.systemsThinking.why.benefits.longterm.title')}</strong> {$t('practices.systemsThinking.why.benefits.longterm.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-yellow-400">✓</span>
            <span><strong class="text-white">{$t('practices.systemsThinking.why.benefits.interconnection.title')}</strong> {$t('practices.systemsThinking.why.benefits.interconnection.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-pink-400">✓</span>
            <span><strong class="text-white">{$t('practices.systemsThinking.why.benefits.humility.title')}</strong> {$t('practices.systemsThinking.why.benefits.humility.description')}</span>
          </li>
        </ul>
      </div>
      
      <p>{$t('practices.systemsThinking.why.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Advanced Practice -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.systemsThinking.advanced.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.systemsThinking.advanced.mapping.title')}</h3>
        <p class="text-slate-300">{$t('practices.systemsThinking.advanced.mapping.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.systemsThinking.advanced.simulation.title')}</h3>
        <p class="text-slate-300">{$t('practices.systemsThinking.advanced.simulation.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.systemsThinking.advanced.reading.title')}</h3>
        <p class="text-slate-300">{$t('practices.systemsThinking.advanced.reading.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-yellow-300">{$t('practices.systemsThinking.advanced.group.title')}</h3>
        <p class="text-slate-300">{$t('practices.systemsThinking.advanced.group.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.systemsThinking.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('practices.systemsThinking.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practices.systemsThinking.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/practices/scale-shifting"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔄</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('practices.systemsThinking.related.scale.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.systemsThinking.related.scale.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/alien-anthropologist"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">👽</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('practices.systemsThinking.related.alien.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.systemsThinking.related.alien.description')}</p>
      </a>
      
      <a 
        href="{base}/pillars/patterns"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌀</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.systemsThinking.related.patterns.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.systemsThinking.related.patterns.description')}</p>
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
      <span>{$t('practices.systemsThinking.backToPractices')}</span>
    </a>
  </div>
</section>
