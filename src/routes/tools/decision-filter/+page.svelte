<!-- src/routes/tools/decision-filter/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  
  // Decision state
  let decision = $state('');
  let currentStep = $state(0);
  let answers = $state<Record<string, string>>({});
  let showResults = $state(false);
  
  const perspectives = $derived([
    {
      id: 'self',
      title: $t('decisionFilter.perspectives.self.title'),
      icon: '🧍',
      question: $t('decisionFilter.perspectives.self.question'),
      prompts: [
        $t('decisionFilter.perspectives.self.prompts.0'),
        $t('decisionFilter.perspectives.self.prompts.1'),
        $t('decisionFilter.perspectives.self.prompts.2')
      ]
    },
    {
      id: 'community',
      title: $t('decisionFilter.perspectives.community.title'),
      icon: '👥',
      question: $t('decisionFilter.perspectives.community.question'),
      prompts: [
        $t('decisionFilter.perspectives.community.prompts.0'),
        $t('decisionFilter.perspectives.community.prompts.1'),
        $t('decisionFilter.perspectives.community.prompts.2')
      ]
    },
    {
      id: 'ecosystem',
      title: $t('decisionFilter.perspectives.ecosystem.title'),
      icon: '🌿',
      question: $t('decisionFilter.perspectives.ecosystem.question'),
      prompts: [
        $t('decisionFilter.perspectives.ecosystem.prompts.0'),
        $t('decisionFilter.perspectives.ecosystem.prompts.1'),
        $t('decisionFilter.perspectives.ecosystem.prompts.2')
      ]
    },
    {
      id: 'future',
      title: $t('decisionFilter.perspectives.future.title'),
      icon: '⏳',
      question: $t('decisionFilter.perspectives.future.question'),
      prompts: [
        $t('decisionFilter.perspectives.future.prompts.0'),
        $t('decisionFilter.perspectives.future.prompts.1'),
        $t('decisionFilter.perspectives.future.prompts.2')
      ]
    },
    {
      id: 'alien',
      title: $t('decisionFilter.perspectives.alien.title'),
      icon: '👽',
      question: $t('decisionFilter.perspectives.alien.question'),
      prompts: [
        $t('decisionFilter.perspectives.alien.prompts.0'),
        $t('decisionFilter.perspectives.alien.prompts.1'),
        $t('decisionFilter.perspectives.alien.prompts.2')
      ]
    },
    {
      id: 'cosmic',
      title: $t('decisionFilter.perspectives.cosmic.title'),
      icon: '🌌',
      question: $t('decisionFilter.perspectives.cosmic.question'),
      prompts: [
        $t('decisionFilter.perspectives.cosmic.prompts.0'),
        $t('decisionFilter.perspectives.cosmic.prompts.1'),
        $t('decisionFilter.perspectives.cosmic.prompts.2')
      ]
    }
  ]);
  
  function startProcess() {
    if (decision.trim()) {
      currentStep = 1;
      answers = {};
      showResults = false;
    }
  }
  
  function nextStep() {
    if (currentStep < perspectives.length) {
      currentStep++;
    } else {
      showResults = true;
    }
  }
  
  function previousStep() {
    if (currentStep > 1) {
      currentStep--;
    }
  }
  
  function restart() {
    decision = '';
    currentStep = 0;
    answers = {};
    showResults = false;
  }
  
  $effect(() => {
    // Scroll to top when step changes
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
</script>

<svelte:head>
  <title>{$t('decisionFilter.meta.title')} - Universalize</title>
  <meta name="description" content={$t('decisionFilter.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">🎯</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('decisionFilter.hero.title')}</h1>
    <p class="mb-8 text-xl text-blue-200">
      {$t('decisionFilter.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('decisionFilter.hero.description')}
    </p>
  </div>
</section>

<!-- What is it -->
{#if currentStep === 0}
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('decisionFilter.what.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('decisionFilter.what.paragraph1')}</p>
      <p>{$t('decisionFilter.what.paragraph2')}</p>
    </div>
    
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">⏰</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('decisionFilter.what.benefits.time.title')}</h3>
        <p class="text-sm text-slate-400">{$t('decisionFilter.what.benefits.time.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">👁️</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('decisionFilter.what.benefits.perspective.title')}</h3>
        <p class="text-sm text-slate-400">{$t('decisionFilter.what.benefits.perspective.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
        <div class="mb-3 text-3xl">💡</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('decisionFilter.what.benefits.wisdom.title')}</h3>
        <p class="text-sm text-slate-400">{$t('decisionFilter.what.benefits.wisdom.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- How it works -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('decisionFilter.howItWorks.title')}</h2>
    
    <div class="space-y-6">
      {#each perspectives as perspective, i}
        <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
          <div class="flex items-start gap-4">
            <div class="text-4xl">{perspective.icon}</div>
            <div class="flex-1">
              <div class="mb-2 flex items-center gap-3">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 class="text-xl font-bold text-blue-300">{perspective.title}</h3>
              </div>
              <p class="text-slate-300">{perspective.question}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Start section -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-2xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('decisionFilter.start.title')}</h2>
    
    <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-8">
      <label for="decision" class="mb-3 block text-lg font-semibold text-blue-300">
        {$t('decisionFilter.start.label')}
      </label>
      <textarea
        id="decision"
        bind:value={decision}
        placeholder={$t('decisionFilter.start.placeholder')}
        class="mb-6 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        rows="4"
      ></textarea>
      
      <button
        onclick={startProcess}
        disabled={!decision.trim()}
        class="w-full rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600"
      >
        {$t('decisionFilter.start.button')}
      </button>
    </div>
    
    <div class="mt-8 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
      <h3 class="mb-3 text-lg font-bold text-purple-300">{$t('decisionFilter.start.tips.title')}</h3>
      <ul class="space-y-2 text-sm text-slate-400">
        <li>• {$t('decisionFilter.start.tips.tip1')}</li>
        <li>• {$t('decisionFilter.start.tips.tip2')}</li>
        <li>• {$t('decisionFilter.start.tips.tip3')}</li>
        <li>• {$t('decisionFilter.start.tips.tip4')}</li>
      </ul>
    </div>
  </div>
</section>
{/if}

<!-- Question steps -->
{#if currentStep > 0 && currentStep <= perspectives.length && !showResults}
  {@const perspective = perspectives[currentStep - 1]}
  <section class="min-h-screen bg-slate-900 px-6 py-20">
    <div class="mx-auto max-w-3xl">
      <!-- Progress -->
      <div class="mb-8">
        <div class="mb-2 flex items-center justify-between text-sm text-slate-400">
          <span>{$t('decisionFilter.progress.step')} {currentStep} {$t('decisionFilter.progress.of')} {perspectives.length}</span>
          <span>{Math.round((currentStep / perspectives.length) * 100)}%</span>
        </div>
        <div class="h-2 overflow-hidden rounded-full bg-slate-800">
          <div 
            class="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
            style="width: {(currentStep / perspectives.length) * 100}%"
          ></div>
        </div>
      </div>
      
      <!-- Your decision -->
      <div class="mb-8 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <div class="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
          {$t('decisionFilter.yourDecision')}
        </div>
        <p class="text-lg text-white">{decision}</p>
      </div>
      
      <!-- Question card -->
      <div class="rounded-xl border border-blue-500 bg-slate-800 p-8">
        <div class="mb-6 flex items-center gap-4">
          <div class="text-6xl">{perspective.icon}</div>
          <div>
            <h2 class="text-3xl font-bold text-white">{perspective.title}</h2>
          </div>
        </div>
        
        <div class="mb-8 rounded-lg bg-slate-900/50 p-6">
          <p class="text-xl font-semibold text-blue-300">{perspective.question}</p>
        </div>
        
        <div class="mb-6">
          <label for={`answer-${perspective.id}`} class="mb-3 block text-lg font-semibold text-slate-300">
            {$t('decisionFilter.yourThoughts')}
          </label>
          <textarea
            id={`answer-${perspective.id}`}
            bind:value={answers[perspective.id]}
            placeholder={$t('decisionFilter.answerPlaceholder')}
            class="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            rows="8"
          ></textarea>
        </div>
        
        <!-- Reflection prompts -->
        <div class="mb-8 rounded-lg border border-slate-700 bg-slate-900/50 p-6">
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            {$t('decisionFilter.reflectionPrompts')}
          </h3>
          <ul class="space-y-2 text-sm text-slate-300">
            {#each perspective.prompts as prompt}
              <li class="flex items-start gap-2">
                <span class="mt-1 text-blue-400">→</span>
                <span>{prompt}</span>
              </li>
            {/each}
          </ul>
        </div>
        
        <!-- Navigation -->
        <div class="flex gap-4">
          <button
            onclick={previousStep}
            class="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:bg-slate-700"
          >
            {$t('decisionFilter.navigation.previous')}
          </button>
          <button
            onclick={nextStep}
            class="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            {currentStep === perspectives.length ? $t('decisionFilter.navigation.finish') : $t('decisionFilter.navigation.next')}
          </button>
        </div>
      </div>
    </div>
  </section>
{/if}

<!-- Results -->
{#if showResults}
  <section class="bg-slate-900 px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <div class="mb-12 text-center">
        <div class="mb-6 text-6xl">✨</div>
        <h2 class="mb-4 text-4xl font-bold text-white">{$t('decisionFilter.results.title')}</h2>
        <p class="text-xl text-slate-300">{$t('decisionFilter.results.subtitle')}</p>
      </div>
      
      <!-- Your decision summary -->
      <div class="mb-12 rounded-xl border border-blue-500 bg-slate-800/50 p-8">
        <h3 class="mb-4 text-2xl font-bold text-blue-300">{$t('decisionFilter.results.yourDecision')}</h3>
        <p class="text-xl text-white">{decision}</p>
      </div>
      
      <!-- Perspectives review -->
      <div class="mb-12 space-y-6">
        <h3 class="text-2xl font-bold text-white">{$t('decisionFilter.results.perspectivesTitle')}</h3>
        {#each perspectives as perspective}
          {#if answers[perspective.id]}
            <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <div class="mb-4 flex items-center gap-3">
                <div class="text-3xl">{perspective.icon}</div>
                <h4 class="text-xl font-bold text-blue-300">{perspective.title}</h4>
              </div>
              <p class="whitespace-pre-wrap text-slate-300">{answers[perspective.id]}</p>
            </div>
          {/if}
        {/each}
      </div>
      
      <!-- Synthesis -->
      <div class="mb-12 rounded-xl border border-purple-500 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8">
        <h3 class="mb-4 text-2xl font-bold text-white">{$t('decisionFilter.results.synthesis.title')}</h3>
        <div class="space-y-4 text-slate-300">
          <p>{$t('decisionFilter.results.synthesis.paragraph1')}</p>
          <ul class="space-y-2 pl-6">
            <li class="list-disc">{$t('decisionFilter.results.synthesis.question1')}</li>
            <li class="list-disc">{$t('decisionFilter.results.synthesis.question2')}</li>
            <li class="list-disc">{$t('decisionFilter.results.synthesis.question3')}</li>
            <li class="list-disc">{$t('decisionFilter.results.synthesis.question4')}</li>
          </ul>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="flex flex-col gap-4 sm:flex-row">
        <button
          onclick={restart}
          class="flex-1 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
        >
          {$t('decisionFilter.results.actions.newDecision')}
        </button>
        <button
          onclick={() => window.print()}
          class="flex-1 rounded-lg border border-slate-600 px-8 py-4 text-lg font-semibold text-slate-300 transition hover:bg-slate-800"
        >
          {$t('decisionFilter.results.actions.print')}
        </button>
      </div>
      
      <div class="mt-8 rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-center">
        <p class="text-slate-400">
          {$t('decisionFilter.results.shareNote')}
        </p>
      </div>
    </div>
  </section>
{/if}

<!-- Examples (shown only on initial page) -->
{#if currentStep === 0}
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('decisionFilter.examples.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('decisionFilter.examples.career.title')}</h3>
        <p class="mb-4 text-slate-300">{$t('decisionFilter.examples.career.description')}</p>
        <div class="space-y-2 text-sm text-slate-400">
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.immediate')}:</strong> {$t('decisionFilter.examples.career.immediate')}</p>
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.future')}:</strong> {$t('decisionFilter.examples.career.future')}</p>
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.ecosystem')}:</strong> {$t('decisionFilter.examples.career.ecosystem')}</p>
        </div>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('decisionFilter.examples.purchase.title')}</h3>
        <p class="mb-4 text-slate-300">{$t('decisionFilter.examples.purchase.description')}</p>
        <div class="space-y-2 text-sm text-slate-400">
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.immediate')}:</strong> {$t('decisionFilter.examples.purchase.immediate')}</p>
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.community')}:</strong> {$t('decisionFilter.examples.purchase.community')}</p>
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.cosmic')}:</strong> {$t('decisionFilter.examples.purchase.cosmic')}</p>
        </div>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('decisionFilter.examples.business.title')}</h3>
        <p class="mb-4 text-slate-300">{$t('decisionFilter.examples.business.description')}</p>
        <div class="space-y-2 text-sm text-slate-400">
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.immediate')}:</strong> {$t('decisionFilter.examples.business.immediate')}</p>
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.future')}:</strong> {$t('decisionFilter.examples.business.future')}</p>
          <p><strong class="text-slate-300">{$t('decisionFilter.examples.labels.alien')}:</strong> {$t('decisionFilter.examples.business.alien')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('decisionFilter.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('decisionFilter.quote.author')}</cite>
  </div>
</section>
{/if}

<style>
  @media print {
    nav, footer, button {
      display: none !important;
    }
  }
</style>
