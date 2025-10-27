<!-- src/routes/tools/deep-time/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
 
  // Timeline state
  let currentEra = $state(0);
  let isAnimating = $state(false);
  let selectedEvent: number | null = $state(null);
  
  // Timeline data - Major eras in Earth's history
  const eras = $derived([
    {
      id: 'formation',
      title: $t('deepTime.eras.formation.title'),
      icon: '🔥',
      yearsAgo: '4.54 billion years',
      yearsAgoNum: 4540000000,
      duration: $t('deepTime.eras.formation.duration'),
      description: $t('deepTime.eras.formation.description'),
      color: 'from-orange-600 to-red-700',
      events: [
        {
          name: $t('deepTime.eras.formation.events.0.name'),
          time: $t('deepTime.eras.formation.events.0.time'),
          description: $t('deepTime.eras.formation.events.0.description')
        },
        {
          name: $t('deepTime.eras.formation.events.1.name'),
          time: $t('deepTime.eras.formation.events.1.time'),
          description: $t('deepTime.eras.formation.events.1.description')
        },
        {
          name: $t('deepTime.eras.formation.events.2.name'),
          time: $t('deepTime.eras.formation.events.2.time'),
          description: $t('deepTime.eras.formation.events.2.description')
        }
      ]
    },
    {
      id: 'archean',
      title: $t('deepTime.eras.archean.title'),
      icon: '🦠',
      yearsAgo: '4.0-2.5 billion years',
      yearsAgoNum: 3250000000,
      duration: $t('deepTime.eras.archean.duration'),
      description: $t('deepTime.eras.archean.description'),
      color: 'from-pink-600 to-purple-700',
      events: [
        {
          name: $t('deepTime.eras.archean.events.0.name'),
          time: $t('deepTime.eras.archean.events.0.time'),
          description: $t('deepTime.eras.archean.events.0.description')
        },
        {
          name: $t('deepTime.eras.archean.events.1.name'),
          time: $t('deepTime.eras.archean.events.1.time'),
          description: $t('deepTime.eras.archean.events.1.description')
        },
        {
          name: $t('deepTime.eras.archean.events.2.name'),
          time: $t('deepTime.eras.archean.events.2.time'),
          description: $t('deepTime.eras.archean.events.2.description')
        }
      ]
    },
    {
      id: 'proterozoic',
      title: $t('deepTime.eras.proterozoic.title'),
      icon: '💚',
      yearsAgo: '2.5-0.54 billion years',
      yearsAgoNum: 1520000000,
      duration: $t('deepTime.eras.proterozoic.duration'),
      description: $t('deepTime.eras.proterozoic.description'),
      color: 'from-green-600 to-emerald-700',
      events: [
        {
          name: $t('deepTime.eras.proterozoic.events.0.name'),
          time: $t('deepTime.eras.proterozoic.events.0.time'),
          description: $t('deepTime.eras.proterozoic.events.0.description')
        },
        {
          name: $t('deepTime.eras.proterozoic.events.1.name'),
          time: $t('deepTime.eras.proterozoic.events.1.time'),
          description: $t('deepTime.eras.proterozoic.events.1.description')
        },
        {
          name: $t('deepTime.eras.proterozoic.events.2.name'),
          time: $t('deepTime.eras.proterozoic.events.2.time'),
          description: $t('deepTime.eras.proterozoic.events.2.description')
        }
      ]
    },
    {
      id: 'paleozoic',
      title: $t('deepTime.eras.paleozoic.title'),
      icon: '🐟',
      yearsAgo: '541-252 million years',
      yearsAgoNum: 396500000,
      duration: $t('deepTime.eras.paleozoic.duration'),
      description: $t('deepTime.eras.paleozoic.description'),
      color: 'from-blue-600 to-cyan-700',
      events: [
        {
          name: $t('deepTime.eras.paleozoic.events.0.name'),
          time: $t('deepTime.eras.paleozoic.events.0.time'),
          description: $t('deepTime.eras.paleozoic.events.0.description')
        },
        {
          name: $t('deepTime.eras.paleozoic.events.1.name'),
          time: $t('deepTime.eras.paleozoic.events.1.time'),
          description: $t('deepTime.eras.paleozoic.events.1.description')
        },
        {
          name: $t('deepTime.eras.paleozoic.events.2.name'),
          time: $t('deepTime.eras.paleozoic.events.2.time'),
          description: $t('deepTime.eras.paleozoic.events.2.description')
        }
      ]
    },
    {
      id: 'mesozoic',
      title: $t('deepTime.eras.mesozoic.title'),
      icon: '🦕',
      yearsAgo: '252-66 million years',
      yearsAgoNum: 159000000,
      duration: $t('deepTime.eras.mesozoic.duration'),
      description: $t('deepTime.eras.mesozoic.description'),
      color: 'from-yellow-600 to-orange-700',
      events: [
        {
          name: $t('deepTime.eras.mesozoic.events.0.name'),
          time: $t('deepTime.eras.mesozoic.events.0.time'),
          description: $t('deepTime.eras.mesozoic.events.0.description')
        },
        {
          name: $t('deepTime.eras.mesozoic.events.1.name'),
          time: $t('deepTime.eras.mesozoic.events.1.time'),
          description: $t('deepTime.eras.mesozoic.events.1.description')
        },
        {
          name: $t('deepTime.eras.mesozoic.events.2.name'),
          time: $t('deepTime.eras.mesozoic.events.2.time'),
          description: $t('deepTime.eras.mesozoic.events.2.description')
        }
      ]
    },
    {
      id: 'cenozoic',
      title: $t('deepTime.eras.cenozoic.title'),
      icon: '🦣',
      yearsAgo: '66 million years - 12,000 years',
      yearsAgoNum: 33000000,
      duration: $t('deepTime.eras.cenozoic.duration'),
      description: $t('deepTime.eras.cenozoic.description'),
      color: 'from-amber-600 to-yellow-700',
      events: [
        {
          name: $t('deepTime.eras.cenozoic.events.0.name'),
          time: $t('deepTime.eras.cenozoic.events.0.time'),
          description: $t('deepTime.eras.cenozoic.events.0.description')
        },
        {
          name: $t('deepTime.eras.cenozoic.events.1.name'),
          time: $t('deepTime.eras.cenozoic.events.1.time'),
          description: $t('deepTime.eras.cenozoic.events.1.description')
        },
        {
          name: $t('deepTime.eras.cenozoic.events.2.name'),
          time: $t('deepTime.eras.cenozoic.events.2.time'),
          description: $t('deepTime.eras.cenozoic.events.2.description')
        }
      ]
    },
    {
      id: 'holocene',
      title: $t('deepTime.eras.holocene.title'),
      icon: '🏛️',
      yearsAgo: '12,000 years - now',
      yearsAgoNum: 6000,
      duration: $t('deepTime.eras.holocene.duration'),
      description: $t('deepTime.eras.holocene.description'),
      color: 'from-indigo-600 to-blue-700',
      events: [
        {
          name: $t('deepTime.eras.holocene.events.0.name'),
          time: $t('deepTime.eras.holocene.events.0.time'),
          description: $t('deepTime.eras.holocene.events.0.description')
        },
        {
          name: $t('deepTime.eras.holocene.events.1.name'),
          time: $t('deepTime.eras.holocene.events.1.time'),
          description: $t('deepTime.eras.holocene.events.1.description')
        },
        {
          name: $t('deepTime.eras.holocene.events.2.name'),
          time: $t('deepTime.eras.holocene.events.2.time'),
          description: $t('deepTime.eras.holocene.events.2.description')
        }
      ]
    }
  ]);
  
  function nextEra() {
    if (currentEra < eras.length - 1 && !isAnimating) {
      isAnimating = true;
      currentEra++;
      selectedEvent = null;
      setTimeout(() => isAnimating = false, 500);
    }
  }
  
  function previousEra() {
    if (currentEra > 0 && !isAnimating) {
      isAnimating = true;
      currentEra--;
      selectedEvent = null;
      setTimeout(() => isAnimating = false, 500);
    }
  }
  
  function jumpToEra(index: number) {
    if (index !== currentEra && !isAnimating) {
      isAnimating = true;
      currentEra = index;
      selectedEvent = null;
      setTimeout(() => isAnimating = false, 500);
    }
  }
  
  function selectEvent(index: number) {
    selectedEvent = selectedEvent === index ? null : index;
  }
  
  // Calculate position on timeline (logarithmic scale for better visualization)
  function getTimelinePosition(yearsAgo: number): number {
    const maxYears = 4540000000; // Earth's age
    const minYears = 1;
    // Logarithmic scale
    return ((Math.log(yearsAgo) - Math.log(minYears)) / (Math.log(maxYears) - Math.log(minYears))) * 100;
  }
  
  onMount(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextEra();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        previousEra();
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  
  $effect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
</script>

<SEO
  title={$t('deepTime.meta.title')}
  description={$t('deepTime.meta.description')}
  keywords="deep time, geological time, earth history, cosmic perspective, 4.5 billion years"
  image="/tools/deep-time-preview.jpg"
/>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <div class="mb-6 text-6xl">⏳</div>
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('deepTime.hero.title')}</h1>
    <p class="mb-8 text-xl text-blue-200">
      {$t('deepTime.hero.subtitle')}
    </p>
    <p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
      {$t('deepTime.hero.description')}
    </p>
  </div>
</section>

<!-- Visual Timeline -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-8 text-center text-2xl font-bold text-white">{$t('deepTime.visualTimeline.title')}</h2>
    
    <!-- Interactive timeline bar -->
    <div class="relative mb-4 h-16 overflow-hidden rounded-xl bg-slate-950">
      {#each eras as era, i}
        {@const position = getTimelinePosition(era.yearsAgoNum)}
        {@const nextPosition = i < eras.length - 1 ? getTimelinePosition(eras[i + 1].yearsAgoNum) : 0}
        {@const width = position - nextPosition}
        
        <button
          onclick={() => jumpToEra(i)}
          class="absolute h-full transition-all hover:brightness-110"
          style="right: {nextPosition}%; width: {width}%;"
          class:ring-4={i === currentEra}
          class:ring-white={i === currentEra}
          class:opacity-50={i !== currentEra}
          title={era.title}
        >
          <div class="h-full bg-gradient-to-r {era.color}"></div>
        </button>
      {/each}
    </div>
    
    <div class="flex items-center justify-between text-xs text-slate-400">
      <span>{$t('deepTime.visualTimeline.start')}</span>
      <span>{$t('deepTime.visualTimeline.end')}</span>
    </div>
    
    <p class="mt-4 text-center text-sm text-slate-500">
      {$t('deepTime.visualTimeline.note')}
    </p>
  </div>
</section>

<!-- Main Era Display -->
<section class="min-h-screen bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-5xl">
    
    <!-- Progress -->
    <div class="mb-12">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-sm font-semibold text-slate-400">
          {$t('deepTime.progress.era')} {currentEra + 1} {$t('deepTime.progress.of')} {eras.length}
        </span>
        <span class="text-sm text-slate-400">{eras[currentEra].yearsAgo}</span>
      </div>
      
      <div class="h-2 overflow-hidden rounded-full bg-slate-800">
        <div 
          class="h-full bg-gradient-to-r {eras[currentEra].color} transition-all duration-500"
          style="width: {((currentEra + 1) / eras.length) * 100}%"
        ></div>
      </div>
      
      <!-- Era markers -->
      <div class="mt-3 flex justify-between">
        {#each eras as era, i}
          <button
            onclick={() => jumpToEra(i)}
            class="group flex flex-col items-center"
            title={era.title}
          >
            <div 
              class="mb-1 flex h-10 w-10 items-center justify-center rounded-full text-xl transition
                {i === currentEra 
                  ? 'scale-125 bg-gradient-to-br ' + era.color + ' shadow-lg' 
                  : i < currentEra 
                    ? 'bg-slate-700 opacity-50' 
                    : 'bg-slate-800 opacity-30'
                }
                group-hover:scale-110"
            >
              {era.icon}
            </div>
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Era Card -->
    <div class="mb-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
      <!-- Header -->
      <div class="bg-gradient-to-r {eras[currentEra].color} px-8 py-6">
        <div class="flex items-center gap-4">
          <div class="text-7xl">{eras[currentEra].icon}</div>
          <div class="flex-1">
            <div class="mb-1 text-sm font-semibold uppercase tracking-wide text-white/80">
              {eras[currentEra].yearsAgo}
            </div>
            <h2 class="text-4xl font-bold text-white">{eras[currentEra].title}</h2>
            <div class="mt-1 text-sm text-white/70">
              {eras[currentEra].duration}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-8">
        <!-- Description -->
        <div class="mb-8">
          <p class="text-xl leading-relaxed text-slate-300">
            {eras[currentEra].description}
          </p>
        </div>
        
        <!-- Key Events -->
        <div class="mb-8">
          <h3 class="mb-4 text-lg font-bold text-white">{$t('deepTime.keyEvents')}</h3>
          <div class="space-y-3">
            {#each eras[currentEra].events as event, i}
              <button
                onclick={() => selectEvent(i)}
                class="w-full rounded-lg border transition
                  {selectedEvent === i 
                    ? 'border-blue-500 bg-slate-800' 
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50'
                  }"
              >
                <div class="p-4">
                  <div class="flex items-start justify-between">
                    <div class="flex-1 text-left">
                      <div class="mb-1 font-semibold text-blue-300">{event.name}</div>
                      <div class="text-sm text-slate-400">{event.time}</div>
                    </div>
                    <div class="ml-4 text-slate-400 transition {selectedEvent === i ? 'rotate-90' : ''}">
                      →
                    </div>
                  </div>
                  
                  {#if selectedEvent === i}
                    <div class="mt-3 border-t border-slate-700 pt-3 text-sm text-slate-300">
                      {event.description}
                    </div>
                  {/if}
                </div>
              </button>
            {/each}
          </div>
        </div>
        
        <!-- Navigation -->
        <div class="flex gap-4">
          <button
            onclick={previousEra}
            disabled={currentEra === 0}
            class="flex-1 rounded-lg border border-slate-600 px-6 py-4 font-semibold text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            ← {$t('deepTime.navigation.earlier')}
          </button>
          
          {#if currentEra < eras.length - 1}
            <button
              onclick={nextEra}
              class="flex-1 rounded-lg bg-gradient-to-r {eras[currentEra + 1].color} px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              {$t('deepTime.navigation.later')} →
            </button>
          {:else}
            <button
              onclick={() => jumpToEra(0)}
              class="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              {$t('deepTime.navigation.restart')} ↻
            </button>
          {/if}
        </div>
        
        <div class="mt-4 text-center text-sm text-slate-500">
          {$t('deepTime.keyboardHint')}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Analogies -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.analogies.title')}</h2>
    <p class="mb-8 text-lg text-slate-300">{$t('deepTime.analogies.intro')}</p>
    
    <div class="space-y-6">
      <div class="rounded-xl border border-blue-500 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('deepTime.analogies.calendar.title')}</h3>
        <p class="mb-4 text-slate-300">{$t('deepTime.analogies.calendar.description')}</p>
        <div class="grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg bg-slate-900/50 p-3 text-sm">
            <div class="font-semibold text-blue-300">{$t('deepTime.analogies.calendar.jan1')}</div>
            <div class="text-slate-400">{$t('deepTime.analogies.calendar.jan1desc')}</div>
          </div>
          <div class="rounded-lg bg-slate-900/50 p-3 text-sm">
            <div class="font-semibold text-blue-300">{$t('deepTime.analogies.calendar.march')}</div>
            <div class="text-slate-400">{$t('deepTime.analogies.calendar.marchdesc')}</div>
          </div>
          <div class="rounded-lg bg-slate-900/50 p-3 text-sm">
            <div class="font-semibold text-blue-300">{$t('deepTime.analogies.calendar.dec13')}</div>
            <div class="text-slate-400">{$t('deepTime.analogies.calendar.dec13desc')}</div>
          </div>
          <div class="rounded-lg bg-slate-900/50 p-3 text-sm">
            <div class="font-semibold text-blue-300">{$t('deepTime.analogies.calendar.dec31')}</div>
            <div class="text-slate-400">{$t('deepTime.analogies.calendar.dec31desc')}</div>
          </div>
        </div>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('deepTime.analogies.clock.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.analogies.clock.description')}</p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-800/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('deepTime.analogies.armspan.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.analogies.armspan.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Why It Matters -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-3xl font-bold text-white">{$t('deepTime.matters.title')}</h2>
    
    <div class="mb-8 space-y-6 text-lg leading-relaxed text-slate-300">
      <p>{$t('deepTime.matters.paragraph1')}</p>
      <p>{$t('deepTime.matters.paragraph2')}</p>
    </div>
    
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">🙏</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('deepTime.matters.insights.humility.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.matters.insights.humility.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">🧬</div>
        <h3 class="mb-3 text-xl font-bold text-purple-300">{$t('deepTime.matters.insights.context.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.matters.insights.context.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">🌍</div>
        <h3 class="mb-3 text-xl font-bold text-green-300">{$t('deepTime.matters.insights.responsibility.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.matters.insights.responsibility.description')}</p>
      </div>
      
      <div class="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
        <div class="mb-3 text-3xl">⏰</div>
        <h3 class="mb-3 text-xl font-bold text-blue-300">{$t('deepTime.matters.insights.patience.title')}</h3>
        <p class="text-slate-300">{$t('deepTime.matters.insights.patience.description')}</p>
      </div>
    </div>
  </div>
</section>

<!-- Share Section -->
<section class="bg-slate-900 px-6 py-12">
  <div class="mx-auto max-w-4xl">
    <ShareButtons 
      title={$t('deepTime.meta.title')}
      description={$t('deepTime.meta.description')}
    />
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('deepTime.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('deepTime.quote.author')}</cite>
  </div>
</section>

<!-- Related -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">{$t('deepTime.related.title')}</h2>
    
    <div class="grid gap-6 md:grid-cols-3">
      <a 
        href="{base}/explore/universe-story"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">✨</div>
        <h3 class="mb-2 text-lg font-bold text-blue-300">{$t('deepTime.related.universeStory.title')}</h3>
        <p class="text-sm text-slate-400">{$t('deepTime.related.universeStory.description')}</p>
      </a>
      
      <a 
        href="{base}/tools/cosmic-address"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-purple-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">📍</div>
        <h3 class="mb-2 text-lg font-bold text-purple-300">{$t('deepTime.related.cosmicAddress.title')}</h3>
        <p class="text-sm text-slate-400">{$t('deepTime.related.cosmicAddress.description')}</p>
      </a>
      
      <a 
        href="{base}/practices/scale-shifting"
        class="rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition hover:border-green-500 hover:bg-slate-800"
      >
        <div class="mb-3 text-4xl">🔄</div>
        <h3 class="mb-2 text-lg font-bold text-green-300">{$t('deepTime.related.scaleShifting.title')}</h3>
        <p class="text-sm text-slate-400">{$t('deepTime.related.scaleShifting.description')}</p>
      </a>
    </div>
  </div>
</section>
