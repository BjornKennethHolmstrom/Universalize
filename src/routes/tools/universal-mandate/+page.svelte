<script lang="ts">
  import { t } from '$lib/i18n';
  
  let currentStep = $state(0);
  let responses = $state({
    inheritance: '',
    needs: '',
    intersection: '',
    mandate: '',
    immediate: '',
    shortTerm: '',
    longTerm: ''
  });
  
  const steps = $derived([
    { id: 'intro', title: 'Introduction' },
    { id: 'inheritance', title: 'Part 1: Your cosmic inheritance' },
    { id: 'needs', title: 'Part 2: The needs of this moment' },
    { id: 'intersection', title: 'Part 3: The intersection' },
    { id: 'mandate', title: 'Part 4: Articulating your mandate' },
    { id: 'action', title: 'Part 5: From mandate to action' },
    { id: 'completion', title: 'Completion' }
  ]);
  
  function nextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  function previousStep() {
    if (currentStep > 0) {
      currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  function goToStep(index: number) {
    currentStep = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function downloadPDF() {
    // Simple text export for now - could be enhanced with proper PDF generation
    const content = `
MY UNIVERSAL MANDATE
====================

PART 1: MY COSMIC INHERITANCE
${responses.inheritance}

PART 2: THE NEEDS OF THIS MOMENT
${responses.needs}

PART 3: THE INTERSECTION
${responses.intersection}

PART 4: MY UNIVERSAL MANDATE
${responses.mandate}

PART 5: COMMITMENTS TO ACTION
Immediate (this week): ${responses.immediate}
Short-term (this month): ${responses.shortTerm}
Long-term (this year): ${responses.longTerm}

Date: ${new Date().toLocaleDateString()}
    `.trim();
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-universal-mandate.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<svelte:head>
  <title>{$t('universalMandate.meta.title')} - Universalize</title>
  <meta name="description" content={$t('universalMandate.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">✨</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('universalMandate.hero.title')}</h1>
    <p class="text-xl text-purple-200">
      {$t('universalMandate.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Progress Indicator -->
<section class="border-b border-slate-800 bg-slate-950 px-6 py-6">
  <div class="mx-auto max-w-5xl">
    <div class="flex items-center justify-between">
      {#each steps as step, index}
        <button
          onclick={() => goToStep(index)}
          class="flex flex-col items-center gap-2 transition"
          class:opacity-100={index <= currentStep}
          class:opacity-30={index > currentStep}
        >
          <div 
            class="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition"
            class:border-blue-500={index === currentStep}
            class:bg-blue-500={index === currentStep}
            class:text-white={index === currentStep}
            class:border-slate-600={index !== currentStep && index <= currentStep}
            class:bg-slate-800={index !== currentStep && index < currentStep}
            class:text-slate-400={index !== currentStep}
          >
            {index + 1}
          </div>
          <span class="hidden text-xs text-slate-400 md:block">{step.title.split(':')[0]}</span>
        </button>
        {#if index < steps.length - 1}
          <div 
            class="h-0.5 flex-1 bg-slate-800"
            class:bg-blue-500={index < currentStep}
          ></div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- Main Content -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    
    <!-- Step 0: Introduction -->
    {#if currentStep === 0}
      <div class="space-y-8">
        <div>
          <p class="mb-6 text-lg leading-relaxed text-slate-300">
            {$t('universalMandate.intro')}
          </p>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h2 class="mb-4 text-2xl font-bold text-white">{$t('universalMandate.what.title')}</h2>
          <div class="space-y-4 text-slate-300">
            <p>{$t('universalMandate.what.paragraph1')}</p>
            <p>{$t('universalMandate.what.paragraph2')}</p>
            <p>{$t('universalMandate.what.paragraph3')}</p>
          </div>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
          <h2 class="mb-6 text-2xl font-bold text-white">{$t('universalMandate.whyMatters.title')}</h2>
          <div class="space-y-6">
            <div>
              <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('universalMandate.whyMatters.meaning.title')}</h3>
              <p class="text-slate-300">{$t('universalMandate.whyMatters.meaning.description')}</p>
            </div>
            <div>
              <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('universalMandate.whyMatters.choices.title')}</h3>
              <p class="text-slate-300">{$t('universalMandate.whyMatters.choices.description')}</p>
            </div>
            <div>
              <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('universalMandate.whyMatters.energy.title')}</h3>
              <p class="text-slate-300">{$t('universalMandate.whyMatters.energy.description')}</p>
            </div>
            <div>
              <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('universalMandate.whyMatters.responsibility.title')}</h3>
              <p class="text-slate-300">{$t('universalMandate.whyMatters.responsibility.description')}</p>
            </div>
          </div>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h2 class="mb-4 text-2xl font-bold text-white">{$t('universalMandate.process.title')}</h2>
          <p class="text-slate-300">{$t('universalMandate.process.intro')}</p>
        </div>
      </div>
    {/if}
    
    <!-- Step 1: Cosmic Inheritance -->
    {#if currentStep === 1}
      <div class="space-y-8">
        <div>
          <h2 class="mb-2 text-3xl font-bold text-white">{$t('universalMandate.process.step1.title')}</h2>
          <p class="mb-6 text-xl text-purple-300">{$t('universalMandate.process.step1.subtitle')}</p>
          <p class="text-lg text-slate-300">{$t('universalMandate.process.step1.intro')}</p>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('universalMandate.process.step1.prompts.title')}</h3>
          <ul class="space-y-3 text-slate-300">
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.gifts')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.experiences')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.knowledge')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.resources')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.wounds')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.privileges')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step1.prompts.limitations')}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <label class="mb-3 block text-lg font-semibold text-white">
            {$t('universalMandate.process.step1.write')}
          </label>
          <textarea
            bind:value={responses.inheritance}
            class="min-h-[300px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            placeholder="Write your reflections here..."
          ></textarea>
        </div>
      </div>
    {/if}
    
    <!-- Step 2: Needs of This Moment -->
    {#if currentStep === 2}
      <div class="space-y-8">
        <div>
          <h2 class="mb-2 text-3xl font-bold text-white">{$t('universalMandate.process.step2.title')}</h2>
          <p class="mb-6 text-xl text-purple-300">{$t('universalMandate.process.step2.subtitle')}</p>
          <p class="text-lg text-slate-300">{$t('universalMandate.process.step2.intro')}</p>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('universalMandate.process.step2.prompts.title')}</h3>
          <ul class="space-y-3 text-slate-300">
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.heartbreak')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.alive')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.missing')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.leverage')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.vision')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.urgency')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step2.prompts.communities')}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <label class="mb-3 block text-lg font-semibold text-white">
            {$t('universalMandate.process.step2.write')}
          </label>
          <textarea
            bind:value={responses.needs}
            class="min-h-[300px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            placeholder="Write your reflections here..."
          ></textarea>
        </div>
      </div>
    {/if}
    
    <!-- Step 3: The Intersection -->
    {#if currentStep === 3}
      <div class="space-y-8">
        <div>
          <h2 class="mb-2 text-3xl font-bold text-white">{$t('universalMandate.process.step3.title')}</h2>
          <p class="mb-6 text-xl text-purple-300">{$t('universalMandate.process.step3.subtitle')}</p>
          <p class="text-lg text-slate-300">{$t('universalMandate.process.step3.intro')}</p>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('universalMandate.process.step3.prompts.title')}</h3>
          <ul class="space-y-3 text-slate-300">
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.overlap')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.unique')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.positioned')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.service')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.legacy')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.generations')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step3.prompts.now')}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <label class="mb-3 block text-lg font-semibold text-white">
            {$t('universalMandate.process.step3.write')}
          </label>
          <textarea
            bind:value={responses.intersection}
            class="min-h-[300px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            placeholder="Write your reflections here..."
          ></textarea>
        </div>
      </div>
    {/if}
    
    <!-- Step 4: Articulating Your Mandate -->
    {#if currentStep === 4}
      <div class="space-y-8">
        <div>
          <h2 class="mb-2 text-3xl font-bold text-white">{$t('universalMandate.process.step4.title')}</h2>
          <p class="mb-6 text-xl text-purple-300">{$t('universalMandate.process.step4.subtitle')}</p>
          <p class="text-lg text-slate-300">{$t('universalMandate.process.step4.intro')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
          <h3 class="mb-4 text-xl font-bold text-white">{$t('universalMandate.process.step4.guidelines.title')}</h3>
          <ul class="space-y-3 text-slate-300">
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step4.guidelines.active')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step4.guidelines.specific')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step4.guidelines.authentic')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step4.guidelines.ambitious')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step4.guidelines.service')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step4.guidelines.scales')}</span>
            </li>
          </ul>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-lg font-bold text-purple-300">{$t('universalMandate.process.step4.examples.title')}</h3>
          <ul class="space-y-4 text-sm text-slate-400">
            <li class="italic">{$t('universalMandate.process.step4.examples.example1')}</li>
            <li class="italic">{$t('universalMandate.process.step4.examples.example2')}</li>
            <li class="italic">{$t('universalMandate.process.step4.examples.example3')}</li>
            <li class="italic">{$t('universalMandate.process.step4.examples.example4')}</li>
            <li class="italic">{$t('universalMandate.process.step4.examples.example5')}</li>
          </ul>
        </div>
        
        <div>
          <label class="mb-3 block text-lg font-semibold text-white">
            {$t('universalMandate.process.step4.draft')}
          </label>
          <textarea
            bind:value={responses.mandate}
            class="min-h-[200px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            placeholder="I am here to..."
          ></textarea>
        </div>
      </div>
    {/if}
    
    <!-- Step 5: From Mandate to Action -->
    {#if currentStep === 5}
      <div class="space-y-8">
        <div>
          <h2 class="mb-2 text-3xl font-bold text-white">{$t('universalMandate.process.step5.title')}</h2>
          <p class="mb-6 text-xl text-purple-300">{$t('universalMandate.process.step5.subtitle')}</p>
          <p class="text-lg text-slate-300">{$t('universalMandate.process.step5.intro')}</p>
        </div>
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-xl font-bold text-blue-300">{$t('universalMandate.process.step5.prompts.title')}</h3>
          <ul class="space-y-3 text-slate-300">
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.today')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.month')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.year')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.obstacles')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.support')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-purple-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.measure')}</span>
            </li>
            <li class="flex gap-3">
              <span class="text-blue-400">•</span>
              <span>{$t('universalMandate.process.step5.prompts.review')}</span>
            </li>
          </ul>
        </div>
        
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white">{$t('universalMandate.process.step5.commitments.title')}</h3>
          
          <div>
            <label class="mb-2 block font-semibold text-blue-300">
              {$t('universalMandate.process.step5.commitments.immediate')}
            </label>
            <textarea
              bind:value={responses.immediate}
              class="min-h-[100px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              placeholder="This week I will..."
            ></textarea>
          </div>
          
          <div>
            <label class="mb-2 block font-semibold text-purple-300">
              {$t('universalMandate.process.step5.commitments.shortTerm')}
            </label>
            <textarea
              bind:value={responses.shortTerm}
              class="min-h-[100px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-purple-500 focus:outline-none"
              placeholder="This month I will..."
            ></textarea>
          </div>
          
          <div>
            <label class="mb-2 block font-semibold text-blue-300">
              {$t('universalMandate.process.step5.commitments.longTerm')}
            </label>
            <textarea
              bind:value={responses.longTerm}
              class="min-h-[100px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              placeholder="This year I will..."
            ></textarea>
          </div>
        </div>
        
        <p class="text-slate-300">{$t('universalMandate.process.step5.write')}</p>
      </div>
    {/if}
    
    <!-- Step 6: Completion -->
    {#if currentStep === 6}
      <div class="space-y-8">
        <div class="text-center">
          <div class="mb-6 text-6xl">🌟</div>
          <h2 class="mb-6 text-3xl font-bold text-white">{$t('universalMandate.completion.title')}</h2>
        </div>
        
        <div class="space-y-6 text-lg text-slate-300">
          <p>{$t('universalMandate.completion.paragraph1')}</p>
          <p>{$t('universalMandate.completion.paragraph2')}</p>
          <p>{$t('universalMandate.completion.paragraph3')}</p>
        </div>
        
        {#if responses.mandate}
          <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
            <h3 class="mb-4 text-xl font-bold text-white">Your universal mandate:</h3>
            <p class="text-xl italic leading-relaxed text-blue-200">{responses.mandate}</p>
          </div>
        {/if}
        
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-xl font-bold text-purple-300">{$t('universalMandate.completion.save.title')}</h3>
          <p class="mb-6 text-slate-300">{$t('universalMandate.completion.save.description')}</p>
          <button
            onclick={downloadPDF}
            class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            {$t('universalMandate.download.button')}
          </button>
        </div>
        
        <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-8">
          <h3 class="mb-4 text-xl font-bold text-white">{$t('universalMandate.reflection.title')}</h3>
          <div class="space-y-4 text-slate-300">
            <p>{$t('universalMandate.reflection.paragraph1')}</p>
            <p>{$t('universalMandate.reflection.paragraph2')}</p>
            <p>{$t('universalMandate.reflection.paragraph3')}</p>
            <p>{$t('universalMandate.reflection.paragraph4')}</p>
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Navigation Buttons -->
    <div class="mt-12 flex items-center justify-between border-t border-slate-800 pt-8">
      <button
        onclick={previousStep}
        disabled={currentStep === 0}
        class="rounded-lg border-2 border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 disabled:hover:border-slate-600 disabled:hover:text-slate-300"
      >
        ← Previous
      </button>
      
      <span class="text-slate-400">
        Step {currentStep + 1} of {steps.length}
      </span>
      
      <button
        onclick={nextStep}
        disabled={currentStep === steps.length - 1}
        class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600"
      >
        Next →
      </button>
    </div>
  </div>
</section>

<!-- Examples Section -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('universalMandate.examples.title')}</h2>
    <p class="mb-12 text-center text-slate-400">{$t('universalMandate.examples.intro')}</p>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('universalMandate.examples.sagan.name')}</h3>
        <p class="mb-3 italic text-slate-400">{$t('universalMandate.examples.sagan.mandate')}</p>
        <p class="text-sm text-slate-300">{$t('universalMandate.examples.sagan.action')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('universalMandate.examples.wangari.name')}</h3>
        <p class="mb-3 italic text-slate-400">{$t('universalMandate.examples.wangari.mandate')}</p>
        <p class="text-sm text-slate-300">{$t('universalMandate.examples.wangari.action')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('universalMandate.examples.buddha.name')}</h3>
        <p class="mb-3 italic text-slate-400">{$t('universalMandate.examples.buddha.mandate')}</p>
        <p class="text-sm text-slate-300">{$t('universalMandate.examples.buddha.action')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('universalMandate.examples.parks.name')}</h3>
        <p class="mb-3 italic text-slate-400">{$t('universalMandate.examples.parks.mandate')}</p>
        <p class="text-sm text-slate-300">{$t('universalMandate.examples.parks.action')}</p>
      </div>
    </div>
    
    <p class="mt-8 text-center text-sm italic text-slate-400">{$t('universalMandate.examples.note')}</p>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('universalMandate.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('universalMandate.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('universalMandate.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="/practices"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">🌅</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('universalMandate.related.practices.title')}</h3>
        <p class="text-sm text-slate-400">{$t('universalMandate.related.practices.description')}</p>
      </a>
      
      <a 
        href="/pillars/ethics"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-green-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">💚</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('universalMandate.related.ethics.title')}</h3>
        <p class="text-sm text-slate-400">{$t('universalMandate.related.ethics.description')}</p>
      </a>
      
      <a 
        href="/pillars/challenges"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">🌍</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('universalMandate.related.challenges.title')}</h3>
        <p class="text-sm text-slate-400">{$t('universalMandate.related.challenges.description')}</p>
      </a>
    </div>
  </div>
</section>
