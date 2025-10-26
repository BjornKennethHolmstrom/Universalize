<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';

  const pillars = $derived([
    {
      id: 'mind',
      title: $t('pillars.mind.title'),
      subtitle: $t('pillars.mind.subtitle'),
      icon: '🧠',
      description: $t('pillars.mind.description'),
      link: `${base}/pillars/mind`,
      color: 'blue',
      topics: [
        $t('pillarsPage.mind.topics.0'),
        $t('pillarsPage.mind.topics.1'),
        $t('pillarsPage.mind.topics.2'),
        $t('pillarsPage.mind.topics.3')
      ]
    },
    {
      id: 'ethics',
      title: $t('pillars.ethics.title'),
      subtitle: $t('pillars.ethics.subtitle'),
      icon: '💚',
      description: $t('pillars.ethics.description'),
      link: `${base}/pillars/ethics`,
      color: 'green',
      topics: [
        $t('pillarsPage.ethics.topics.0'),
        $t('pillarsPage.ethics.topics.1'),
        $t('pillarsPage.ethics.topics.2'),
        $t('pillarsPage.ethics.topics.3')
      ]
    },
    {
      id: 'patterns',
      title: $t('pillars.patterns.title'),
      subtitle: $t('pillars.patterns.subtitle'),
      icon: '🌐',
      description: $t('pillars.patterns.description'),
      link: `${base}/pillars/patterns`,
      color: 'purple',
      topics: [
        $t('pillarsPage.patterns.topics.0'),
        $t('pillarsPage.patterns.topics.1'),
        $t('pillarsPage.patterns.topics.2'),
        $t('pillarsPage.patterns.topics.3')
      ]
    },
    {
      id: 'aesthetics',
      title: $t('pillars.aesthetics.title'),
      subtitle: $t('pillars.aesthetics.subtitle'),
      icon: '🎨',
      description: $t('pillars.aesthetics.description'),
      link: `${base}/pillars/aesthetics`,
      color: 'purple',
      topics: [
        $t('pillarsPage.aesthetics.topics.0'),
        $t('pillarsPage.aesthetics.topics.1'),
        $t('pillarsPage.aesthetics.topics.2'),
        $t('pillarsPage.aesthetics.topics.3')
      ]
    },
    {
      id: 'challenges',
      title: $t('pillars.challenges.title'),
      subtitle: $t('pillars.challenges.subtitle'),
      icon: '🌍',
      description: $t('pillars.challenges.description'),
      link: `${base}/pillars/challenges`,
      color: 'blue',
      topics: [
        $t('pillarsPage.challenges.topics.0'),
        $t('pillarsPage.challenges.topics.1'),
        $t('pillarsPage.challenges.topics.2'),
        $t('pillarsPage.challenges.topics.3')
      ]
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
  <title>{$t('nav.pillars')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('pillarsPage.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('pillarsPage.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('pillarsPage.intro')}
    </p>
  </div>
</section>

<!-- Pillars Grid -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each pillars as pillar}
        {@const colors = colorClasses[pillar.color]}
        <a 
          href={pillar.link}
          class="group rounded-xl border {colors.border} bg-slate-900/50 p-8 transition {colors.hover} hover:bg-slate-800"
        >
          <div class="mb-4 text-5xl">{pillar.icon}</div>
          <h3 class="mb-2 text-2xl font-bold {colors.text} group-hover:brightness-110">
            {pillar.title}
          </h3>
          <div class="mb-4 text-sm font-medium text-slate-400">
            {pillar.subtitle}
          </div>
          <p class="mb-4 leading-relaxed text-slate-300">
            {pillar.description}
          </p>
          
          <div class="border-t border-slate-700 pt-4">
            <div class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {$t('pillarsPage.exploreTopics')}
            </div>
            <ul class="space-y-1 text-sm text-slate-400">
              {#each pillar.topics as topic}
                <li>• {topic}</li>
              {/each}
            </ul>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Integration Note -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-8">
      <h2 class="mb-4 text-2xl font-bold text-white">{$t('pillarsPage.integration.title')}</h2>
      <p class="mb-4 text-lg leading-relaxed text-slate-300">
        {$t('pillarsPage.integration.paragraph1')}
      </p>
      <p class="text-lg leading-relaxed text-slate-300">
        {$t('pillarsPage.integration.paragraph2')}
      </p>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('pillarsPage.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('pillarsPage.quote.author')}</cite>
  </div>
</section>
