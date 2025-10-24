<!-- /src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { currentLanguage, loadTranslations } from '$lib/i18n';
  
  // Initialize translations on mount
  onMount(async () => {
    await loadTranslations($currentLanguage);
  });
  
  // Reload translations when language changes
  $effect(() => {
    loadTranslations($currentLanguage);
  });
</script>

<div class="flex min-h-screen flex-col bg-slate-950">
  <Header />
  
  <main class="flex-1">
    <slot />
  </main>
  
  <Footer />
</div>
