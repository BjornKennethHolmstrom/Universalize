<!-- src/routes/practices/alien-anthropologist/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<svelte:head>
  <title>{$t('practices.alienAnthropologist.meta.title')} - Universalize</title>
  <meta name="description" content={$t('practices.alienAnthropologist.meta.description')} />
</svelte:head>

<!-- Back Navigation -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-8">
  <div class="mx-auto max-w-4xl">
    <a 
      href="/practices" 
      class="inline-flex items-center gap-2 text-lg text-blue-300 transition hover:text-blue-200"
    >
      <span>←</span>
      <span>{$t('practices.alienAnthropologist.backToPractices')}</span>
    </a>
  </div>
</section>

<!-- Hero -->
<section class="bg-gradient-to-b from-green-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">👽</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('practices.alienAnthropologist.hero.title')}</h1>
    <p class="mb-4 text-xl text-green-200">
      {$t('practices.alienAnthropologist.hero.subtitle')}
    </p>
    <div class="mx-auto flex max-w-md items-center justify-center gap-6 text-slate-400">
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>{$t('practices.alienAnthropologist.hero.mode')}</span>
      </div>
      <div class="flex items-center gap-2">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>{$t('practices.alienAnthropologist.hero.frequency')}</span>
      </div>
    </div>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.alienAnthropologist.intro.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.alienAnthropologist.intro.paragraph1')}</p>
      <p>{$t('practices.alienAnthropologist.intro.paragraph2')}</p>
      <p>{$t('practices.alienAnthropologist.intro.paragraph3')}</p>
      
      <div class="my-8 rounded-xl border border-green-500 bg-slate-800/50 p-6 italic text-slate-300">
        "{$t('practices.alienAnthropologist.intro.prompt')}"
      </div>
      
      <p>{$t('practices.alienAnthropologist.intro.paragraph4')}</p>
    </div>
  </div>
</section>

<!-- The Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.alienAnthropologist.practice.title')}</h2>
    
    <div class="space-y-8">
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            1
          </div>
          <h3 class="text-2xl font-bold text-green-300">{$t('practices.alienAnthropologist.practice.step1.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.alienAnthropologist.practice.step1.description')}</p>
        <div class="rounded-lg bg-slate-800/50 p-4 text-sm italic text-slate-400">
          "{$t('practices.alienAnthropologist.practice.step1.prompt')}"
        </div>
      </div>

      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            2
          </div>
          <h3 class="text-2xl font-bold text-blue-300">{$t('practices.alienAnthropologist.practice.step2.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.alienAnthropologist.practice.step2.description')}</p>
        <ul class="space-y-2 text-slate-300">
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.practice.step2.behavior.title')}</strong> {$t('practices.alienAnthropologist.practice.step2.behavior.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-400">•</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.practice.step2.objects.title')}</strong> {$t('practices.alienAnthropologist.practice.step2.objects.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-purple-400">•</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.practice.step2.rituals.title')}</strong> {$t('practices.alienAnthropologist.practice.step2.rituals.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-yellow-400">•</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.practice.step2.language.title')}</strong> {$t('practices.alienAnthropologist.practice.step2.language.description')}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white">
            3
          </div>
          <h3 class="text-2xl font-bold text-purple-300">{$t('practices.alienAnthropologist.practice.step3.title')}</h3>
        </div>
        <p class="mb-4 text-slate-300">{$t('practices.alienAnthropologist.practice.step3.description')}</p>
        <div class="rounded-lg bg-slate-800/50 p-4 text-sm italic text-slate-400">
          "{$t('practices.alienAnthropologist.practice.step3.prompt')}"
        </div>
      </div>

      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <div class="mb-4 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            4
          </div>
          <h3 class="text-2xl font-bold text-green-300">{$t('practices.alienAnthropologist.practice.step4.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.practice.step4.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Scenarios to Practice -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.alienAnthropologist.scenarios.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">☕</div>
          <h3 class="text-xl font-bold text-green-300">{$t('practices.alienAnthropologist.scenarios.coffee.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.scenarios.coffee.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🚦</div>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.alienAnthropologist.scenarios.traffic.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.scenarios.traffic.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🛒</div>
          <h3 class="text-xl font-bold text-purple-300">{$t('practices.alienAnthropologist.scenarios.grocery.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.scenarios.grocery.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">💼</div>
          <h3 class="text-xl font-bold text-green-300">{$t('practices.alienAnthropologist.scenarios.meeting.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.scenarios.meeting.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">📱</div>
          <h3 class="text-xl font-bold text-blue-300">{$t('practices.alienAnthropologist.scenarios.phone.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.scenarios.phone.description')}</p>
      </div>

      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-3 flex items-center gap-3">
          <div class="text-3xl">🎭</div>
          <h3 class="text-xl font-bold text-purple-300">{$t('practices.alienAnthropologist.scenarios.argument.title')}</h3>
        </div>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.scenarios.argument.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Observing Yourself -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.alienAnthropologist.self.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.alienAnthropologist.self.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-green-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-green-300">{$t('practices.alienAnthropologist.self.questions.title')}</h3>
        <ul class="space-y-3 text-slate-300">
          <li class="flex gap-3">
            <span class="text-green-400">•</span>
            <span>{$t('practices.alienAnthropologist.self.questions.q1')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-blue-400">•</span>
            <span>{$t('practices.alienAnthropologist.self.questions.q2')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-purple-400">•</span>
            <span>{$t('practices.alienAnthropologist.self.questions.q3')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-yellow-400">•</span>
            <span>{$t('practices.alienAnthropologist.self.questions.q4')}</span>
          </li>
          <li class="flex gap-3">
            <span class="text-pink-400">•</span>
            <span>{$t('practices.alienAnthropologist.self.questions.q5')}</span>
          </li>
        </ul>
      </div>
      
      <p>{$t('practices.alienAnthropologist.self.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Why It Works -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.alienAnthropologist.why.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('practices.alienAnthropologist.why.paragraph1')}</p>
      
      <div class="my-8 rounded-xl border border-blue-500 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('practices.alienAnthropologist.why.benefits.title')}</h3>
        <ul class="space-y-3 text-slate-300">
          <li class="flex gap-3">
            <span class="mt-1 text-green-400">✓</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.why.benefits.defamiliarize.title')}</strong> {$t('practices.alienAnthropologist.why.benefits.defamiliarize.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-blue-400">✓</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.why.benefits.ego.title')}</strong> {$t('practices.alienAnthropologist.why.benefits.ego.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-purple-400">✓</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.why.benefits.compassion.title')}</strong> {$t('practices.alienAnthropologist.why.benefits.compassion.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-yellow-400">✓</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.why.benefits.humor.title')}</strong> {$t('practices.alienAnthropologist.why.benefits.humor.description')}</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 text-pink-400">✓</span>
            <span><strong class="text-white">{$t('practices.alienAnthropologist.why.benefits.creativity.title')}</strong> {$t('practices.alienAnthropologist.why.benefits.creativity.description')}</span>
          </li>
        </ul>
      </div>
      
      <p>{$t('practices.alienAnthropologist.why.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- Advanced Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('practices.alienAnthropologist.advanced.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.alienAnthropologist.advanced.journal.title')}</h3>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.advanced.journal.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practices.alienAnthropologist.advanced.perspectives.title')}</h3>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.advanced.perspectives.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practices.alienAnthropologist.advanced.scifi.title')}</h3>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.advanced.scifi.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practices.alienAnthropologist.advanced.share.title')}</h3>
        <p class="text-slate-300">{$t('practices.alienAnthropologist.advanced.share.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practices.alienAnthropologist.quote.text')}"
    </blockquote>
    <cite class="text-lg text-green-400">— {$t('practices.alienAnthropologist.quote.author')}</cite>
  </div>
</section>

<!-- Related Practices -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practices.alienAnthropologist.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="/practices/scale-shifting"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-blue-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🔄</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('practices.alienAnthropologist.related.scale.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.alienAnthropologist.related.scale.description')}</p>
      </a>
      
      <a 
        href="/practices/view-from-above"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-purple-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🧘</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('practices.alienAnthropologist.related.meditation.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.alienAnthropologist.related.meditation.description')}</p>
      </a>
      
      <a 
        href="/explore/overview-effect"
        class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-green-500 hover:bg-slate-700"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('practices.alienAnthropologist.related.overview.title')}</h3>
        <p class="text-sm text-slate-400">{$t('practices.alienAnthropologist.related.overview.description')}</p>
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
      <span>{$t('practices.alienAnthropologist.backToPractices')}</span>
    </a>
  </div>
</section>
