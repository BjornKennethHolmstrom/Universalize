<!-- src/routes/pillars/challenges/topics/[topic]/+page.svelte -->
<script lang="ts">
  import { currentLanguage } from '$lib/i18n';
  
  // Svelte 5 runes mode - use $props() instead of export let
  let { data } = $props();
  
  let Component = $state(data.Component);
  let metadata = $state(data.metadata);
  let topic = data.topic;
  
  // Reactively load the correct language version when language changes
  $effect(() => {
    async function loadLanguageVersion() {
      try {
        let module;
        
        if ($currentLanguage === 'sv') {
          try {
            // Try Swedish version first
            module = await import(`../${topic}.sv.svx`);
          } catch (err) {
            console.warn(`Swedish version not found for ${topic}, using English`);
            // Fall back to English
            module = await import(`../${topic}.svx`);
          }
        } else {
          // Load English version
          module = await import(`../${topic}.svx`);
        }
        
        Component = module.default;
        metadata = module.metadata;
      } catch (err) {
        console.error(`Failed to load ${topic}:`, err);
      }
    }
    
    loadLanguageVersion();
  });
</script>

<svelte:head>
  <title>{metadata?.title || 'Topic'} - Universal Challenges - Universalize</title>
  {#if metadata?.description}
    <meta name="description" content={metadata.description} />
  {/if}
</svelte:head>

<!-- Article Container -->
<article class="min-h-screen bg-slate-900">
  <!-- Back Navigation -->
  <section class="border-t border-slate-800 bg-slate-950 px-6 py-12">
    <div class="mx-auto max-w-4xl">
      <a 
        href="/pillars/challenges" 
        class="inline-flex items-center gap-2 text-lg text-green-300 transition hover:text-green-200"
      >
        <span>←</span>
        <span>{$currentLanguage === 'sv' ? 'Tillbaka till universella utmaningar' : 'Back to Universal Challenges'}</span>
      </a>
    </div>
  </section>

  <!-- Hero -->
  <section class="bg-gradient-to-b from-green-950 via-emerald-950 to-slate-900 px-6 py-20">
    <div class="mx-auto max-w-4xl">
      {#if metadata?.icon}
        <div class="mb-6 text-6xl">{metadata.icon}</div>
      {/if}
      {#if metadata?.title}
        <h1 class="mb-4 text-5xl font-bold text-white">{metadata.title}</h1>
      {/if}
      {#if metadata?.description}
        <p class="text-xl text-green-200">{metadata.description}</p>
      {/if}
    </div>
  </section>
  
  <!-- Article Content -->
  <section class="px-6 py-16">
    <div class="prose prose-invert prose-lg mx-auto max-w-4xl">
      {#if Component}
        <Component />
      {/if}
    </div>
  </section>
  
  <!-- Back Navigation -->
  <section class="border-t border-slate-800 bg-slate-950 px-6 py-12">
    <div class="mx-auto max-w-4xl">
      <a 
        href="/pillars/challenges" 
        class="inline-flex items-center gap-2 text-lg text-green-300 transition hover:text-green-200"
      >
        <span>←</span>
        <span>{$currentLanguage === 'sv' ? 'Tillbaka till universella utmaningar' : 'Back to Universal Challenges'}</span>
      </a>
    </div>
  </section>
</article>

<style>
  /* Custom prose styles for the markdown content */
  :global(.prose) {
    --tw-prose-body: rgb(203 213 225);
    --tw-prose-headings: rgb(255 255 255);
    --tw-prose-links: rgb(96 165 250);
    --tw-prose-bold: rgb(255 255 255);
    --tw-prose-code: rgb(216 180 254);
    --tw-prose-quotes: rgb(148 163 184);
    --tw-prose-quote-borders: rgb(34 197 94);
    --tw-prose-hr: rgb(51 65 85);
  }
  
  :global(.prose h2) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.875rem;
    font-weight: 700;
    color: rgb(134 239 172);
  }
  
  :global(.prose h3) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(110 231 183);
  }
  
  :global(.prose h4) {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(226 232 240);
  }
  
  :global(.prose a) {
    color: rgb(96 165 250);
    text-decoration: none;
  }
  
  :global(.prose a:hover) {
    color: rgb(147 197 253);
    text-decoration: underline;
  }
  
  :global(.prose blockquote) {
    border-left: 4px solid rgb(34 197 94);
    background-color: rgba(30, 41, 59, 0.5);
    padding: 0.5rem 1rem 0.5rem 1.5rem;
    font-style: italic;
  }
  
  :global(.prose code) {
    border-radius: 0.25rem;
    background-color: rgb(30 41 59);
    padding: 0.25rem 0.5rem;
    color: rgb(216 180 254);
  }
  
  :global(.prose pre) {
    border-radius: 0.75rem;
    background-color: rgb(30 41 59);
    padding: 1.5rem;
  }
  
  :global(.prose ul) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  :global(.prose ol) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  :global(.prose li) {
    color: rgb(203 213 225);
  }
  
  :global(.prose strong) {
    font-weight: 700;
    color: rgb(255 255 255);
  }
  
  :global(.prose em) {
    font-style: italic;
    color: rgb(226 232 240);
  }
</style>
