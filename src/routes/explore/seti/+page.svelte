<!-- src/routes/explore/seti/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  
  const searchTypes = $derived([
    {
      title: $t('searchIntelligence.types.seti.title'),
      icon: '📡',
      description: $t('searchIntelligence.types.seti.description'),
      status: $t('searchIntelligence.types.seti.status'),
      color: 'blue'
    },
    {
      title: $t('searchIntelligence.types.biosignatures.title'),
      icon: '🔬',
      description: $t('searchIntelligence.types.biosignatures.description'),
      status: $t('searchIntelligence.types.biosignatures.status'),
      color: 'green'
    },
    {
      title: $t('searchIntelligence.types.ai.title'),
      icon: '🤖',
      description: $t('searchIntelligence.types.ai.description'),
      status: $t('searchIntelligence.types.ai.status'),
      color: 'purple'
    },
    {
      title: $t('searchIntelligence.types.animal.title'),
      icon: '🐬',
      description: $t('searchIntelligence.types.animal.description'),
      status: $t('searchIntelligence.types.animal.status'),
      color: 'blue'
    }
  ]);
  
  const implications = $derived([
    {
      question: $t('searchIntelligence.implications.0.question'),
      description: $t('searchIntelligence.implications.0.description')
    },
    {
      question: $t('searchIntelligence.implications.1.question'),
      description: $t('searchIntelligence.implications.1.description')
    },
    {
      question: $t('searchIntelligence.implications.2.question'),
      description: $t('searchIntelligence.implications.2.description')
    },
    {
      question: $t('searchIntelligence.implications.3.question'),
      description: $t('searchIntelligence.implications.3.description')
    }
  ]);
  
  const colorClasses = {
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    green: 'border-green-500'
  };
</script>

<svelte:head>
  <title>{$t('searchIntelligence.meta.title')} - Universalize</title>
  <meta name="description" content={$t('searchIntelligence.meta.description')} />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 px-6 py-24">
  <!-- Signal wave visual effect -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    <div class="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 animate-pulse bg-gradient-to-r from-transparent via-purple-500 to-transparent" style="animation-delay: 0.5s;"></div>
  </div>
  
  <div class="relative mx-auto max-w-4xl text-center">
    <div class="mb-8 text-7xl">🔭</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('searchIntelligence.hero.title')}</h1>
    <p class="mb-8 text-xl text-purple-200">
      {$t('searchIntelligence.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('searchIntelligence.hero.description')}
    </p>
  </div>
</section>

<!-- The Great Question -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('searchIntelligence.greatQuestion.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{@html $t('searchIntelligence.greatQuestion.paragraph1')}</p>
      <p>{$t('searchIntelligence.greatQuestion.paragraph2')}</p>
      
      <div class="my-8 rounded-xl border border-purple-500 bg-slate-800/50 p-8">
        <h3 class="mb-4 text-2xl font-bold text-purple-300">{$t('searchIntelligence.greatQuestion.fermi.title')}</h3>
        <p class="mb-4 text-slate-300">{$t('searchIntelligence.greatQuestion.fermi.question')}</p>
        <div class="space-y-3 text-sm text-slate-400">
          <p><strong class="text-white">{$t('searchIntelligence.greatQuestion.fermi.theory1.title')}</strong> {$t('searchIntelligence.greatQuestion.fermi.theory1.description')}</p>
          <p><strong class="text-white">{$t('searchIntelligence.greatQuestion.fermi.theory2.title')}</strong> {$t('searchIntelligence.greatQuestion.fermi.theory2.description')}</p>
          <p><strong class="text-white">{$t('searchIntelligence.greatQuestion.fermi.theory3.title')}</strong> {$t('searchIntelligence.greatQuestion.fermi.theory3.description')}</p>
        </div>
      </div>
      
      <p>{$t('searchIntelligence.greatQuestion.paragraph3')}</p>
    </div>
  </div>
</section>

<!-- Four Types of Search -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">{$t('searchIntelligence.typesTitle')}</h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      {#each searchTypes as type}
        <div class="rounded-xl border {colorClasses[type.color]} bg-slate-900/50 p-8">
          <div class="mb-4 text-5xl">{type.icon}</div>
          <h3 class="mb-3 text-2xl font-bold text-blue-300">{type.title}</h3>
          <p class="mb-4 leading-relaxed text-slate-300">{type.description}</p>
          <div class="rounded-lg bg-slate-800/50 px-4 py-2">
            <span class="text-sm font-semibold text-slate-400">{$t('searchIntelligence.statusLabel')}: </span>
            <span class="text-sm text-slate-300">{type.status}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- What Would Contact Mean -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('searchIntelligence.contact.title')}</h2>
    
    <div class="space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('searchIntelligence.contact.paragraph1')}</p>
      
      <div class="my-8 grid gap-6 md:grid-cols-2">
        <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('searchIntelligence.contact.scenarios.signal.title')}</h3>
          <p class="text-sm text-slate-300">{$t('searchIntelligence.contact.scenarios.signal.description')}</p>
        </div>
        
        <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-green-300">{$t('searchIntelligence.contact.scenarios.biosignature.title')}</h3>
          <p class="text-sm text-slate-300">{$t('searchIntelligence.contact.scenarios.biosignature.description')}</p>
        </div>
        
        <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('searchIntelligence.contact.scenarios.ai.title')}</h3>
          <p class="text-sm text-slate-300">{$t('searchIntelligence.contact.scenarios.ai.description')}</p>
        </div>
        
        <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('searchIntelligence.contact.scenarios.visit.title')}</h3>
          <p class="text-sm text-slate-300">{$t('searchIntelligence.contact.scenarios.visit.description')}</p>
        </div>
      </div>
      
      <p>{$t('searchIntelligence.contact.paragraph2')}</p>
    </div>
  </div>
</section>

<!-- GGF Frameworks -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('searchIntelligence.frameworks.title')}</h2>
    
    <div class="space-y-6">
      <!-- Frontier Governance Protocol -->
      <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8">
        <div class="mb-6 flex items-start gap-4">
          <img src="/logo-ggf.svg" alt="Global Governance Frameworks" class="h-16 w-16" />
          <div>
            <h3 class="mb-2 text-2xl font-bold text-blue-300">{$t('searchIntelligence.frameworks.frontier.title')}</h3>
            <a 
              href="https://globalgovernanceframeworks.org/frameworks/frontier-governance"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-blue-400 hover:text-blue-300"
            >
              {$t('searchIntelligence.frameworks.frontier.link')} →
            </a>
          </div>
        </div>
        
        <div class="space-y-4 text-slate-300">
          <p>{@html $t('searchIntelligence.frameworks.frontier.description')}</p>
          <p>{$t('searchIntelligence.frameworks.frontier.directive')}</p>
        </div>
      </div>
      
      <!-- Discovery Commons -->
      <div class="rounded-xl border border-green-500 bg-gradient-to-br from-green-900/30 to-blue-900/30 p-8">
        <div class="mb-6 flex items-start gap-4">
          <img src="/logo-ggf.svg" alt="Global Governance Frameworks" class="h-16 w-16" />
          <div>
            <h3 class="mb-2 text-2xl font-bold text-green-300">{$t('searchIntelligence.frameworks.discovery.title')}</h3>
            <a 
              href="https://globalgovernanceframeworks.org/frameworks/discovery-commons"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-green-400 hover:text-green-300"
            >
              {$t('searchIntelligence.frameworks.discovery.link')} →
            </a>
          </div>
        </div>
        
        <div class="space-y-4 text-slate-300">
          <p>{$t('searchIntelligence.frameworks.discovery.description')}</p>
          <p>{$t('searchIntelligence.frameworks.discovery.seti')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Philosophical Implications -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('searchIntelligence.implicationsTitle')}</h2>
    
    <div class="space-y-6">
      {#each implications as item}
        <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
          <h3 class="mb-3 text-xl font-bold text-purple-300">{item.question}</h3>
          <p class="text-slate-300">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- The Drake Equation -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('searchIntelligence.drake.title')}</h2>
    
    <div class="mb-8 rounded-xl border border-purple-500 bg-slate-800/50 p-8">
      <div class="mb-6 overflow-x-auto">
        <div class="min-w-max text-center font-mono text-xl text-purple-300">
          N = R★ × fp × ne × fl × fi × fc × L
        </div>
      </div>
      
      <p class="mb-6 text-slate-300">{$t('searchIntelligence.drake.description')}</p>
      
      <div class="space-y-3 text-sm text-slate-400">
        <p><strong class="text-white">R★</strong> = {$t('searchIntelligence.drake.variables.r')}</p>
        <p><strong class="text-white">fp</strong> = {$t('searchIntelligence.drake.variables.fp')}</p>
        <p><strong class="text-white">ne</strong> = {$t('searchIntelligence.drake.variables.ne')}</p>
        <p><strong class="text-white">fl</strong> = {$t('searchIntelligence.drake.variables.fl')}</p>
        <p><strong class="text-white">fi</strong> = {$t('searchIntelligence.drake.variables.fi')}</p>
        <p><strong class="text-white">fc</strong> = {$t('searchIntelligence.drake.variables.fc')}</p>
        <p><strong class="text-white">L</strong> = {$t('searchIntelligence.drake.variables.l')}</p>
      </div>
    </div>
    
    <p class="text-lg text-slate-300">{$t('searchIntelligence.drake.conclusion')}</p>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('searchIntelligence.quote.text')}"
    </blockquote>
    <cite class="text-lg text-purple-400">— {$t('searchIntelligence.quote.author')}</cite>
  </div>
</section>

<!-- Call to Action -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h2 class="mb-6 text-3xl font-bold text-white">{$t('searchIntelligence.cta.title')}</h2>
    <p class="mb-8 text-lg leading-relaxed text-slate-300">
      {$t('searchIntelligence.cta.description')}
    </p>
    
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a 
        href="/pillars/mind"
        class="rounded-lg bg-purple-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-purple-500"
      >
        {$t('searchIntelligence.cta.mind')}
      </a>
      <a 
        href="/pillars/challenges"
        class="rounded-lg border-2 border-purple-400 px-8 py-3 text-lg font-semibold text-purple-200 transition hover:bg-purple-900/30"
      >
        {$t('searchIntelligence.cta.challenges')}
      </a>
    </div>
  </div>
</section>
