<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  
  const currentYear = new Date().getFullYear();

  const footerSections = $derived([
    {
      title: $t('footer.sections.explore'),
      links: [
        { name: $t('footer.links.fivePillars'), href: '/pillars' },
        { name: $t('footer.links.toolsPractices'), href: '/tools' },
        { name: $t('footer.links.aboutUniversalize'), href: '/about' },
        { name: $t('footer.links.resources'), href: '/resources' }
      ]
    },
    {
      title: $t('footer.sections.connect'),
      links: [
        { name: $t('footer.links.theTrilogy'), href: '/trilogy' },
        { name: $t('footer.links.spiralize'), href: 'https://spiralize.org', external: true },
        { name: $t('footer.links.nondualize'), href: 'https://nondualize.org', external: true },
        { name: $t('footer.links.communize'), href: 'https://communize.org', external: true },
        { name: $t('footer.links.ggf'), href: 'https://globalgovernanceframeworks.org', external: true }
      ]
    },
    {
      title: $t('footer.sections.contribute'),
      links: [
        { name: $t('footer.links.github'), href: 'https://github.com/BjornKennethHolmstrom/Universalize', external: true },
        { name: $t('footer.links.suggestContent'), href: '/contribute' },
        { name: $t('footer.links.reportIssues'), href: 'https://github.com/BjornKennethHolmstrom/Universalize/issues', external: true }
      ]
    }
  ]);
</script>

<footer class="border-t border-slate-800 bg-slate-950">
  <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <!-- Main footer content -->
    <div class="grid gap-8 lg:grid-cols-4">
      <!-- Branding section -->
      <div class="lg:col-span-1">
        <div class="mb-4 flex items-center gap-3">
          <img src="/logo.svg" alt="Universalize logo" class="h-10 w-10" />
          <span class="text-xl font-bold text-white">Universalize</span>
        </div>
        <p class="mb-4 text-sm leading-relaxed text-slate-400">
          {$t('footer.description')}
        </p>
        <div class="flex gap-4">
          <a 
            href="https://github.com/BjornKennethHolmstrom/Universalize" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 transition hover:text-blue-400"
            aria-label="GitHub"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Footer navigation sections -->
      {#each footerSections as section}
        <div>
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            {section.title}
          </h3>
          <ul class="space-y-3">
            {#each section.links as link}
              <li>
                <a
                  href={link.href}
                  class="text-sm text-slate-400 transition hover:text-blue-400"
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.name}
                  {#if link.external}
                    <svg class="ml-1 inline h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Bottom section -->
    <div class="mt-12 border-t border-slate-800 pt-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-slate-400">
          © {currentYear} {$t('footer.copyright')}. {$t('footer.license')}
          <a 
            href="https://creativecommons.org/licenses/by-sa/4.0/" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-300"
          >
            CC BY-SA 4.0
          </a>
        </p>
        <div class="flex items-center gap-2 text-sm text-slate-400">
          <span>{$t('footer.createdBy')}</span>
          <a 
            href="https://github.com/BjornKennethHolmstrom" 
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-400 hover:text-blue-300"
          >
            Björn Kenneth Holmström
          </a>
        </div>
      </div>
      
      <!-- Cosmic tagline -->
      <div class="mt-6 text-center">
        <p class="text-sm italic text-slate-500">
          "{$t('quote.sagan')}" — {$t('quote.saganAuthor')}
        </p>
      </div>
    </div>
  </div>
</footer>
