<!-- src/routes/resources/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  
  const resourceCategories = $derived([
    {
      title: $t('resourcesPage.categories.books.title'),
      icon: '📚',
      description: $t('resourcesPage.categories.books.description'),
      color: 'blue',
      resources: [
        {
          title: $t('resourcesPage.categories.books.items.cosmos.title'),
          author: $t('resourcesPage.categories.books.items.cosmos.author'),
          description: $t('resourcesPage.categories.books.items.cosmos.description'),
          link: 'https://en.wikipedia.org/wiki/Cosmos_(Sagan_book)'
        },
        {
          title: $t('resourcesPage.categories.books.items.paleBlueDot.title'),
          author: $t('resourcesPage.categories.books.items.paleBlueDot.author'),
          description: $t('resourcesPage.categories.books.items.paleBlueDot.description'),
          link: 'https://en.wikipedia.org/wiki/Pale_Blue_Dot'
        },
        {
          title: $t('resourcesPage.categories.books.items.universeStory.title'),
          author: $t('resourcesPage.categories.books.items.universeStory.author'),
          description: $t('resourcesPage.categories.books.items.universeStory.description'),
          link: 'https://en.wikipedia.org/wiki/The_Universe_Story'
        },
        {
          title: $t('resourcesPage.categories.books.items.overviewEffect.title'),
          author: $t('resourcesPage.categories.books.items.overviewEffect.author'),
          description: $t('resourcesPage.categories.books.items.overviewEffect.description'),
          link: 'https://en.wikipedia.org/wiki/Overview_effect'
        }
      ]
    },
    {
      title: $t('resourcesPage.categories.videos.title'),
      icon: '🎥',
      description: $t('resourcesPage.categories.videos.description'),
      color: 'purple',
      resources: [
        {
          title: $t('resourcesPage.categories.videos.items.cosmosSeries.title'),
          author: $t('resourcesPage.categories.videos.items.cosmosSeries.author'),
          description: $t('resourcesPage.categories.videos.items.cosmosSeries.description'),
          link: 'https://www.imdb.com/title/tt0081846/' // 1980 series
        },
        {
          title: $t('resourcesPage.categories.videos.items.overviewEffect.title'),
          author: $t('resourcesPage.categories.videos.items.overviewEffect.author'),
          description: $t('resourcesPage.categories.videos.items.overviewEffect.description'),
          link: 'https://www.youtube.com/watch?v=CHMIfOecrlo' // A short film by Planetary Collective
        },
        {
          title: $t('resourcesPage.categories.videos.items.powersOfTen.title'),
          author: $t('resourcesPage.categories.videos.items.powersOfTen.author'),
          description: $t('resourcesPage.categories.videos.items.powersOfTen.description'),
          link: 'https://www.youtube.com/watch?v=0fKBhvDjuy0' // 1977 Eames film
        }
      ]
    },
    {
      title: $t('resourcesPage.categories.papers.title'),
      icon: '📄',
      description: $t('resourcesPage.categories.papers.description'),
      color: 'green',
      resources: [
        {
          title: $t('resourcesPage.categories.papers.items.overviewEffectResearch.title'),
          author: $t('resourcesPage.categories.papers.items.overviewEffectResearch.author'),
          description: $t('resourcesPage.categories.papers.items.overviewEffectResearch.description'),
          link: 'https://en.wikipedia.org/wiki/Overview_effect' // "The Overview Effect: Awe and Self-Transcendent Experience..."
        },
        {
          title: $t('resourcesPage.categories.papers.items.cosmicConsciousness.title'),
          author: $t('resourcesPage.categories.papers.items.cosmicConsciousness.author'),
          description: $t('resourcesPage.categories.papers.items.cosmicConsciousness.description'),
          link: 'https://en.wikipedia.org/wiki/Cosmic_Consciousness' // Richard Maurice Bucke's 1901 book
        },
        {
          title: $t('resourcesPage.categories.papers.items.planetaryBoundaries.title'),
          author: $t('resourcesPage.categories.papers.items.planetaryBoundaries.author'),
          description: $t('resourcesPage.categories.papers.items.planetaryBoundaries.description'),
          link: 'https://www.stockholmresilience.org/research/planetary-boundaries.html'
        },
        {
          title: $t('resourcesPage.categories.papers.items.universalEthics.title'),
          author: $t('resourcesPage.categories.papers.items.universalEthics.author'),
          description: $t('resourcesPage.categories.papers.items.universalEthics.description'),
          link: 'https://www.un.org/en/universal-declaration-human-rights/' // A foundational document
        }
      ]
    },
    {
      title: $t('resourcesPage.categories.organizations.title'),
      icon: '🌐',
      description: $t('resourcesPage.categories.organizations.description'),
      color: 'blue',
      resources: [
        {
          title: $t('resourcesPage.categories.organizations.items.planetarySociety.title'),
          author: $t('resourcesPage.categories.organizations.items.planetarySociety.author'),
          description: $t('resourcesPage.categories.organizations.items.planetarySociety.description'),
          link: 'https://www.planetary.org/'
        },
        {
          title: $t('resourcesPage.categories.organizations.items.setiInstitute.title'),
          author: $t('resourcesPage.categories.organizations.items.setiInstitute.author'),
          description: $t('resourcesPage.categories.organizations.items.setiInstitute.description'),
          link: 'https://www.seti.org/'
        },
        {
          title: $t('resourcesPage.categories.organizations.items.buckminsterFullerInstitute.title'),
          author: $t('resourcesPage.categories.organizations.items.buckminsterFullerInstitute.author'),
          description: $t('resourcesPage.categories.organizations.items.buckminsterFullerInstitute.description'),
          link: 'https://www.bfi.org/'
        },
        {
          title: $t('resourcesPage.categories.organizations.items.longNowFoundation.title'),
          author: $t('resourcesPage.categories.organizations.items.longNowFoundation.author'),
          description: $t('resourcesPage.categories.organizations.items.longNowFoundation.description'),
          link: 'https://longnow.org/'
        }
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
  <title>{$t('nav.resources')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('resourcesPage.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('resourcesPage.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('resourcesPage.intro')}
    </p>
  </div>
</section>

<!-- Resource Categories -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-8 md:grid-cols-2">
      {#each resourceCategories as category}
        {@const colors = colorClasses[category.color]}
        <div class="rounded-xl border {colors.border} bg-slate-900/50 p-8">
          <div class="mb-4 flex items-center gap-4">
            <div class="text-4xl">{category.icon}</div>
            <h3 class="text-2xl font-bold {colors.text}">{category.title}</h3>
          </div>
          <p class="mb-6 leading-relaxed text-slate-300">
            {category.description}
          </p>
          
          <div class="space-y-4">
            {#each category.resources as resource}
              <a 
                href={resource.link}
                target="_blank"
                class="group block rounded-lg border border-slate-700 bg-slate-800/30 p-4 transition hover:border-slate-600 hover:bg-slate-800/50"
              >
                <h4 class="mb-1 font-semibold text-white group-hover:text-blue-300">
                  {resource.title}
                </h4>
                <div class="mb-2 text-sm text-slate-400">
                  {resource.author}
                </div>
                <p class="text-sm leading-relaxed text-slate-300">
                  {resource.description}
                </p>
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Additional Resources -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('resourcesPage.additionalResources.title')}
    </h2>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('resourcesPage.additionalResources.communities.title')}
        </h3>
        <p class="mb-4 text-slate-300">
          {$t('resourcesPage.additionalResources.communities.description')}
        </p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>• {$t('resourcesPage.additionalResources.communities.items.0')}</li>
          <li>• {$t('resourcesPage.additionalResources.communities.items.1')}</li>
          <li>• {$t('resourcesPage.additionalResources.communities.items.2')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">
          {$t('resourcesPage.additionalResources.courses.title')}
        </h3>
        <p class="mb-4 text-slate-300">
          {$t('resourcesPage.additionalResources.courses.description')}
        </p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>• {$t('resourcesPage.additionalResources.courses.items.0')}</li>
          <li>• {$t('resourcesPage.additionalResources.courses.items.1')}</li>
          <li>• {$t('resourcesPage.additionalResources.courses.items.2')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">
          {$t('resourcesPage.additionalResources.media.title')}
        </h3>
        <p class="mb-4 text-slate-300">
          {$t('resourcesPage.additionalResources.media.description')}
        </p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>• {$t('resourcesPage.additionalResources.media.items.0')}</li>
          <li>• {$t('resourcesPage.additionalResources.media.items.1')}</li>
          <li>• {$t('resourcesPage.additionalResources.media.items.2')}</li>
        </ul>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('resourcesPage.additionalResources.tools.title')}
        </h3>
        <p class="mb-4 text-slate-300">
          {$t('resourcesPage.additionalResources.tools.description')}
        </p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>• {$t('resourcesPage.additionalResources.tools.items.0')}</li>
          <li>• {$t('resourcesPage.additionalResources.tools.items.1')}</li>
          <li>• {$t('resourcesPage.additionalResources.tools.items.2')}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Contribution Callout -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <div class="rounded-xl border border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 text-center">
      <h2 class="mb-4 text-2xl font-bold text-white">
        {$t('resourcesPage.contribution.title')}
      </h2>
      <p class="mb-6 text-lg leading-relaxed text-slate-300">
        {$t('resourcesPage.contribution.description')}
      </p>
      <a 
        href="mailto:contribute@universalize.org"
        class="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
      >
        {$t('resourcesPage.contribution.cta')}
      </a>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('resourcesPage.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('resourcesPage.quote.author')}</cite>
  </div>
</section>
