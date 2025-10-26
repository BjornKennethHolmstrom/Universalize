<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  
  let currentPerspective = $state<string | null>(null);
  let reflectionText = $state('');
  let showCategories = $state(false);

  // Use $derived for reactive values
  const currentQuestions = $derived(
    currentPerspective 
      ? $t(`perspectiveShifter.perspectives.${currentPerspective}.questions`)
      : []
  );
  
  // All perspective keys
  const allPerspectives = [
    'alienAnthropologist',
    'futureHistorian',
    'quantumParticle',
    'ancientTree',
    'oceanWave',
    'mountainRange',
    'cosmicVoid',
    'bacterium',
    'photon',
    'mycelialNetwork',
    'nebula',
    'blackHole',
    'glacier',
    'earthAsOrganism',
    'ancestor',
    'futureDescendant',
    'atom',
    'river',
    'domesticatedAnimal',
    'artificialIntelligence'
  ];
  
  // Category groupings
  const categories = {
    cosmic: ['photon', 'nebula', 'blackHole', 'cosmicVoid', 'mountainRange'],
    living: ['ancientTree', 'bacterium', 'mycelialNetwork', 'river', 'glacier', 'earthAsOrganism'],
    time: ['futureHistorian', 'ancestor', 'futureDescendant', 'mountainRange'],
    quantum: ['quantumParticle', 'atom', 'photon', 'bacterium'],
    observation: ['alienAnthropologist', 'domesticatedAnimal', 'artificialIntelligence', 'futureHistorian'],
    process: ['oceanWave', 'river', 'glacier', 'mycelialNetwork']
  };
  
  function getRandomPerspective() {
    const randomIndex = Math.floor(Math.random() * allPerspectives.length);
    currentPerspective = allPerspectives[randomIndex];
    reflectionText = '';
  }
  
  function selectPerspective(key: string) {
    currentPerspective = key;
    reflectionText = '';
    showCategories = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function getIcon(perspectiveKey: string): string {
    const icons: Record<string, string> = {
      alienAnthropologist: '👽',
      futureHistorian: '📜',
      quantumParticle: '⚛️',
      ancientTree: '🌳',
      oceanWave: '🌊',
      mountainRange: '⛰️',
      cosmicVoid: '🌌',
      bacterium: '🦠',
      photon: '💡',
      mycelialNetwork: '🍄',
      nebula: '☁️',
      blackHole: '⚫',
      glacier: '🧊',
      earthAsOrganism: '🌍',
      ancestor: '👴',
      futureDescendant: '👶',
      atom: '⚛️',
      river: '〰️',
      domesticatedAnimal: '🐕',
      artificialIntelligence: '🤖'
    };
    return icons[perspectiveKey] || '✨';
  }

</script>

<svelte:head>
  <title>{$t('perspectiveShifter.meta.title')} - Universalize</title>
  <meta name="description" content={$t('perspectiveShifter.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">👁️</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('perspectiveShifter.hero.title')}</h1>
    <p class="text-xl text-purple-200">
      {$t('perspectiveShifter.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('perspectiveShifter.intro')}
    </p>
    
    <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
      <h2 class="mb-4 text-2xl font-bold text-white">{$t('perspectiveShifter.what.title')}</h2>
      <div class="space-y-4 text-slate-300">
        <p>{$t('perspectiveShifter.what.paragraph1')}</p>
        <p>{$t('perspectiveShifter.what.paragraph2')}</p>
        <p>{$t('perspectiveShifter.what.paragraph3')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Why Shift Perspective -->
<section class="bg-slate-950 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('perspectiveShifter.why.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('perspectiveShifter.why.creativity.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.why.creativity.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('perspectiveShifter.why.empathy.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.why.empathy.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('perspectiveShifter.why.wisdom.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.why.wisdom.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('perspectiveShifter.why.delight.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.why.delight.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- How to Use -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('perspectiveShifter.howTo.title')}</h2>
    
    <div class="space-y-4">
      <div class="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">1</div>
        <p class="text-slate-300">{$t('perspectiveShifter.howTo.step1')}</p>
      </div>
      <div class="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">2</div>
        <p class="text-slate-300">{$t('perspectiveShifter.howTo.step2')}</p>
      </div>
      <div class="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">3</div>
        <p class="text-slate-300">{$t('perspectiveShifter.howTo.step3')}</p>
      </div>
      <div class="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">4</div>
        <p class="text-slate-300">{$t('perspectiveShifter.howTo.step4')}</p>
      </div>
      <div class="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">5</div>
        <p class="text-slate-300">{$t('perspectiveShifter.howTo.step5')}</p>
      </div>
      <div class="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">6</div>
        <p class="text-slate-300">{$t('perspectiveShifter.howTo.step6')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Interactive Tool -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-5xl">
    
    <!-- Get Random Perspective Button -->
    <div class="mb-12 text-center">
      <button
        onclick={getRandomPerspective}
        class="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-xl font-bold text-white transition hover:from-blue-500 hover:to-purple-500"
      >
        {currentPerspective ? $t('perspectiveShifter.newPrompt') : $t('perspectiveShifter.getPrompt')}
      </button>
      
      <button
        onclick={() => showCategories = !showCategories}
        class="ml-4 rounded-lg border-2 border-blue-600 px-6 py-4 text-lg font-semibold text-blue-400 transition hover:bg-blue-900/30"
      >
        {showCategories ? 'Hide' : 'Browse'} categories
      </button>
    </div>
    
    <!-- Categories -->
    {#if showCategories}
      <div class="mb-12 rounded-xl border border-slate-700 bg-slate-900/50 p-8">
        <h3 class="mb-6 text-center text-2xl font-bold text-white">{$t('perspectiveShifter.categories.title')}</h3>
        <p class="mb-8 text-center text-slate-400">{$t('perspectiveShifter.categories.intro')}</p>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {#each Object.entries(categories) as [category, perspectives]}
            <div class="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
              <h4 class="mb-2 font-bold text-blue-300">
                {$t(`perspectiveShifter.categories.${category}.title`)}
              </h4>
              <p class="mb-3 text-sm text-slate-400">
                {$t(`perspectiveShifter.categories.${category}.description`)}
              </p>
              <div class="flex flex-wrap gap-2">
                {#each perspectives as p}
                  <button
                    onclick={() => selectPerspective(p)}
                    class="rounded bg-slate-700 px-2 py-1 text-sm text-slate-300 transition hover:bg-blue-600 hover:text-white"
                  >
                    {getIcon(p)}
                  </button>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Current Perspective Display -->
    {#if currentPerspective}
      <div class="rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 backdrop-blur">
        <div class="mb-6 text-center">
          <div class="mb-4 text-6xl">{getIcon(currentPerspective)}</div>
          <h2 class="mb-2 text-3xl font-bold text-white">
            {$t(`perspectiveShifter.perspectives.${currentPerspective}.name`)}
          </h2>
          <p class="text-lg italic text-blue-300">
            {$t(`perspectiveShifter.perspectives.${currentPerspective}.tagline`)}
          </p>
        </div>
        
        <div class="mb-6 rounded-lg bg-slate-900/50 p-6">
          <p class="text-lg leading-relaxed text-slate-200">
            {$t(`perspectiveShifter.perspectives.${currentPerspective}.description`)}
          </p>
        </div>
        
        <div class="mb-6">
          <h3 class="mb-4 text-xl font-bold text-purple-300">{$t(`perspectiveShifter.questionsToExplore`)}</h3>
          <ul class="space-y-3">
            {#if Array.isArray(currentQuestions) && currentQuestions.length > 0}
              {#each currentQuestions as question}
                <li class="flex gap-3 text-slate-300">
                  <span class="text-blue-400">•</span>
                  <span>{question}</span>
                </li>
              {/each}
            {:else if currentPerspective}
              <li class="text-slate-400">{$t(`perspectiveShifter.noQuestions`)}</li>
            {/if}
          </ul>
        </div>
        
        <div class="rounded-lg border border-blue-500 bg-slate-900/50 p-6">
          <p class="text-lg italic text-blue-200">
            <strong>Prompt:</strong> {$t(`perspectiveShifter.perspectives.${currentPerspective}.prompt`)}
          </p>
        </div>
      </div>
      
      <!-- Reflection Space -->
      <div class="mt-8 rounded-xl border border-slate-700 bg-slate-900/50 p-8">
        <h3 class="mb-4 text-xl font-bold text-white">{$t('perspectiveShifter.reflection.title')}</h3>
        <label class="mb-3 block text-slate-400">
          {$t('perspectiveShifter.reflection.label')}
        </label>
        <textarea
          bind:value={reflectionText}
          class="min-h-[200px] w-full rounded-lg border border-slate-700 bg-slate-800 p-4 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          placeholder={$t('perspectiveShifter.reflection.placeholder')}
        ></textarea>
      </div>
    {/if}
  </div>
</section>

<!-- Making it a Practice -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('perspectiveShifter.practice.title')}</h2>
    <p class="mb-12 text-center text-lg text-slate-300">{$t('perspectiveShifter.practice.paragraph1')}</p>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-lg font-bold text-blue-300">{$t('perspectiveShifter.practice.daily.title')}</h3>
        <p class="text-sm text-slate-300">{$t('perspectiveShifter.practice.daily.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-lg font-bold text-purple-300">{$t('perspectiveShifter.practice.stuck.title')}</h3>
        <p class="text-sm text-slate-300">{$t('perspectiveShifter.practice.stuck.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-lg font-bold text-green-300">{$t('perspectiveShifter.practice.empathy.title')}</h3>
        <p class="text-sm text-slate-300">{$t('perspectiveShifter.practice.empathy.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-lg font-bold text-blue-300">{$t('perspectiveShifter.practice.creativity.title')}</h3>
        <p class="text-sm text-slate-300">{$t('perspectiveShifter.practice.creativity.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-lg font-bold text-purple-300">{$t('perspectiveShifter.practice.decisions.title')}</h3>
        <p class="text-sm text-slate-300">{$t('perspectiveShifter.practice.decisions.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-lg font-bold text-green-300">{$t('perspectiveShifter.practice.awe.title')}</h3>
        <p class="text-sm text-slate-300">{$t('perspectiveShifter.practice.awe.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Deepening the Practice -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('perspectiveShifter.deepening.title')}</h2>
    <p class="mb-12 text-center text-lg text-slate-300">{$t('perspectiveShifter.deepening.paragraph1')}</p>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('perspectiveShifter.deepening.tips.genuine.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.deepening.tips.genuine.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('perspectiveShifter.deepening.tips.slow.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.deepening.tips.slow.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('perspectiveShifter.deepening.tips.physical.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.deepening.tips.physical.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('perspectiveShifter.deepening.tips.write.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.deepening.tips.write.description')}</p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('perspectiveShifter.deepening.tips.multiple.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.deepening.tips.multiple.description')}</p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('perspectiveShifter.deepening.tips.return.title')}</h3>
        <p class="text-slate-300">{$t('perspectiveShifter.deepening.tips.return.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('perspectiveShifter.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('perspectiveShifter.quote.author')}</cite>
  </div>
</section>

<!-- Related Content -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('perspectiveShifter.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/tools/cosmic-zoom"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">🔬</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('perspectiveShifter.related.cosmicZoom.title')}</h3>
        <p class="text-sm text-slate-400">{$t('perspectiveShifter.related.cosmicZoom.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/alien-anthropologist"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-purple-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">👽</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('perspectiveShifter.related.practices.title')}</h3>
        <p class="text-sm text-slate-400">{$t('perspectiveShifter.related.practices.description')}</p>
      </a>
      
      <a 
        href="{base}/tools/universal-mandate"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-green-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">✨</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('perspectiveShifter.related.mandate.title')}</h3>
        <p class="text-sm text-slate-400">{$t('perspectiveShifter.related.mandate.description')}</p>
      </a>
    </div>
  </div>
</section>
