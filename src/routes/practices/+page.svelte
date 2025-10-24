<script lang="ts">
  import { t } from '$lib/i18n';
  
  const practices = $derived([
    {
      title: $t('practicesPage.practices.cosmicMorning.title'),
      icon: '☀️',
      description: $t('practicesPage.practices.cosmicMorning.description'),
      timeframe: $t('practicesPage.practices.cosmicMorning.timeframe'),
      link: '/practices/cosmic-morning',
      color: 'blue'
    },
    {
      title: $t('practicesPage.practices.viewFromAbove.title'),
      icon: '🧘',
      description: $t('practicesPage.practices.viewFromAbove.description'),
      timeframe: $t('practicesPage.practices.viewFromAbove.timeframe'),
      link: '/practices/view-from-above',
      color: 'purple'
    },
    {
      title: $t('practicesPage.practices.cosmicConsumption.title'),
      icon: '🛒',
      description: $t('practicesPage.practices.cosmicConsumption.description'),
      timeframe: $t('practicesPage.practices.cosmicConsumption.timeframe'),
      link: '/practices/cosmic-consumption',
      color: 'green'
    },
    {
      title: $t('practicesPage.practices.decisionFilter.title'),
      icon: '🎯',
      description: $t('practicesPage.practices.decisionFilter.description'),
      timeframe: $t('practicesPage.practices.decisionFilter.timeframe'),
      link: '/practices/decision-filter',
      color: 'blue'
    },
    {
      title: $t('practicesPage.practices.gratitude.title'),
      icon: '🙏',
      description: $t('practicesPage.practices.gratitude.description'),
      timeframe: $t('practicesPage.practices.gratitude.timeframe'),
      link: '/practices/cosmic-gratitude',
      color: 'purple'
    },
    {
      title: $t('practicesPage.practices.scaleShifting.title'),
      icon: '🔄',
      description: $t('practicesPage.practices.scaleShifting.description'),
      timeframe: $t('practicesPage.practices.scaleShifting.timeframe'),
      link: '/practices/scale-shifting',
      color: 'blue'
    },
    {
      title: $t('practicesPage.practices.alienAnthropologist.title'),
      icon: '👽',
      description: $t('practicesPage.practices.alienAnthropologist.description'),
      timeframe: $t('practicesPage.practices.alienAnthropologist.timeframe'),
      link: '/practices/alien-anthropologist',
      color: 'purple'
    },
    {
      title: $t('practicesPage.practices.paleBlue.title'),
      icon: '🌌',
      description: $t('practicesPage.practices.paleBlue.description'),
      timeframe: $t('practicesPage.practices.paleBlue.timeframe'),
      link: '/practices/pale-blue-dot',
      color: 'blue'
    }
  ]);
  
  const colorClasses = {
    blue: {
      border: 'border-blue-500',
      text: 'text-blue-300',
      hover: 'hover:border-blue-400'
    },
    purple: {
      border: 'border-purple-500',
      text: 'text-purple-300',
      hover: 'hover:border-purple-400'
    },
    green: {
      border: 'border-green-500',
      text: 'text-green-300',
      hover: 'hover:border-green-400'
    }
  };
</script>

<svelte:head>
  <title>{$t('nav.practices')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('practicesPage.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('practicesPage.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('practicesPage.intro')}
    </p>
  </div>
</section>

<!-- Practices Grid -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each practices as practice}
        {@const colors = colorClasses[practice.color]}
        <a 
          href={practice.link}
          class="group rounded-xl border {colors.border} bg-slate-900/50 p-8 transition {colors.hover} hover:bg-slate-800"
        >
          <div class="mb-4 text-5xl">{practice.icon}</div>
          <h3 class="mb-3 text-2xl font-bold {colors.text} group-hover:brightness-110">
            {practice.title}
          </h3>
          <p class="mb-4 leading-relaxed text-slate-300">
            {practice.description}
          </p>
          
          <div class="flex items-center gap-2 text-sm text-slate-400">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{practice.timeframe}</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- How to Practice -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practicesPage.howTo.title')}</h2>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practicesPage.howTo.start.title')}</h3>
        <p class="text-slate-300">
          {$t('practicesPage.howTo.start.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('practicesPage.howTo.consistency.title')}</h3>
        <p class="text-slate-300">
          {$t('practicesPage.howTo.consistency.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('practicesPage.howTo.integrate.title')}</h3>
        <p class="text-slate-300">
          {$t('practicesPage.howTo.integrate.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('practicesPage.howTo.journal.title')}</h3>
        <p class="text-slate-300">
          {$t('practicesPage.howTo.journal.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Daily Structure -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('practicesPage.dailyStructure.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">🌅</div>
        <h3 class="mb-2 text-xl font-bold text-blue-300">{$t('practicesPage.dailyStructure.morning.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('practicesPage.dailyStructure.morning.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">☀️</div>
        <h3 class="mb-2 text-xl font-bold text-purple-300">{$t('practicesPage.dailyStructure.day.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('practicesPage.dailyStructure.day.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">🌙</div>
        <h3 class="mb-2 text-xl font-bold text-green-300">{$t('practicesPage.dailyStructure.evening.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('practicesPage.dailyStructure.evening.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('practicesPage.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('practicesPage.quote.author')}</cite>
  </div>
</section>
