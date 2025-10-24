<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { currentLanguage, languages, switchLanguage, t } from '$lib/i18n';
  
  let mobileMenuOpen = $state(false);

  const navigation = $derived([
    { name: $t('nav.home'), href: '/' },
    { name: $t('nav.explore'), href: '/explore' },
    { name: $t('nav.pillars'), href: '/pillars' },
    { name: $t('nav.tools'), href: '/tools' },
    { name: $t('nav.practices'), href: '/practices' },
    { name: $t('nav.about'), href: '/about' }
  ]);

  const relatedSites = [
    { name: 'Spiralize', href: 'https://spiralize.org', logo: '/logo-spiralize.svg' },
    { name: 'Nondualize', href: 'https://nondualize.org', logo: '/logo-nondualize.svg' },
    { name: 'Communize', href: 'https://communize.org', logo: '/logo-communize.svg' },
    { name: 'Global Governance Frameworks', href: 'https://globalgovernanceframeworks.org', logo: '/logo-ggf.svg' }
  ];
  
  function handleLanguageChange(lang: string) {
    switchLanguage(lang);
  }
</script>

<header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
  <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Global">
    <!-- Logo -->
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 flex items-center gap-3 p-1.5">
        <img src="/logo.svg" alt="Universalize logo" class="h-10 w-10" />
        <span class="text-xl font-bold text-white">Universalize</span>
      </a>
    </div>

    <!-- Mobile menu button -->
    <div class="flex items-center gap-3 lg:hidden">
      <!-- Mobile language switcher -->
      <div class="flex gap-1">
        {#each Object.entries(languages) as [code, name]}
          <button
            onclick={() => handleLanguageChange(code)}
            class="rounded px-2 py-1 text-sm font-medium transition
              {$currentLanguage === code 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-blue-400'}"
            aria-label={`Switch to ${name}`}
          >
            {code.toUpperCase()}
          </button>
        {/each}
      </div>
      
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-400"
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
      >
        <span class="sr-only">Open main menu</span>
        {#if !mobileMenuOpen}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        {:else}
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Desktop navigation -->
    <div class="hidden lg:flex lg:gap-x-8">
      {#each navigation as item}
        <a 
          href={item.href} 
          class="text-sm font-semibold leading-6 text-slate-300 transition hover:text-blue-400"
        >
          {item.name}
        </a>
      {/each}
    </div>

    <!-- Desktop right side -->
    <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-6">
      <!-- Language switcher -->
      <div class="flex gap-2">
        {#each Object.entries(languages) as [code, name]}
          <button
            onclick={() => handleLanguageChange(code)}
            class="rounded px-3 py-1.5 text-sm font-medium transition
              {$currentLanguage === code 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-blue-400'}"
            aria-label={`Switch to ${name}`}
            title={name}
          >
            {code.toUpperCase()}
          </button>
        {/each}
      </div>
      
      <!-- Related sites dropdown -->
      <div class="group relative">
        <button class="flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-blue-400">
          {$t('nav.relatedSites')}
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <div class="absolute right-0 top-full hidden w-72 rounded-lg border border-slate-700 bg-slate-900 py-2 shadow-xl group-hover:block">
          {#each relatedSites as site}
            <a 
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-blue-400"
            >
              <img src={site.logo} alt={`${site.name} logo`} class="h-6 w-6" />
              <span>{site.name}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div class="lg:hidden">
      <div class="space-y-1 px-6 pb-4">
        {#each navigation as item}
          <a
            href={item.href}
            class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-900 hover:text-blue-400"
            onclick={() => mobileMenuOpen = false}
          >
            {item.name}
          </a>
        {/each}
        
        <div class="border-t border-slate-800 pt-4">
          <div class="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {$t('nav.relatedSites')}
          </div>
          {#each relatedSites as site}
            <a
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-900 hover:text-blue-400"
            >
              <img src={site.logo} alt={`${site.name} logo`} class="h-6 w-6" />
              <span>{site.name}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</header>
