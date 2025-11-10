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
    
    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('./service-worker.js');
        console.log('Service Worker registered successfully:', registration.scope);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    }
  });
  
  // Reload translations when language changes
  $effect(() => {
    loadTranslations($currentLanguage);
  });
</script>

<svelte:head>
  <title>Universalize - Embrace the cosmic perspective</title>
  <meta name="description" content="Free, open resource for exploring universal perspectives and cosmic consciousness" />
  
  <!-- Preconnect to external resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Universalize - Embrace the cosmic perspective" />
  <meta property="og:description" content="Free, open resource for exploring universal perspectives and cosmic consciousness" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content="Universalize - Embrace the cosmic perspective" />
  <meta property="twitter:description" content="Free, open resource for exploring universal perspectives and cosmic consciousness" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-slate-950">
  <Header />
  
  <main class="flex-1">
    <slot />
  </main>
  
  <Footer />
</div>
