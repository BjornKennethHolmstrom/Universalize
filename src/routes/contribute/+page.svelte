<!-- src/routes/contribute/+page.svelte -->
<script lang="ts">
  import { t } from '$lib/i18n';
  import { base } from '$app/paths';
  
  const contributionTypes = $derived([
    {
      title: $t('contributePage.waysToContribute.content.title'),
      icon: '📝',
      description: $t('contributePage.waysToContribute.content.description'),
      examples: [
        $t('contributePage.waysToContribute.content.examples.0'),
        $t('contributePage.waysToContribute.content.examples.1'),
        $t('contributePage.waysToContribute.content.examples.2'),
        $t('contributePage.waysToContribute.content.examples.3')
      ],
      color: 'blue'
    },
    {
      title: $t('contributePage.waysToContribute.technical.title'),
      icon: '💻',
      description: $t('contributePage.waysToContribute.technical.description'),
      examples: [
        $t('contributePage.waysToContribute.technical.examples.0'),
        $t('contributePage.waysToContribute.technical.examples.1'),
        $t('contributePage.waysToContribute.technical.examples.2'),
        $t('contributePage.waysToContribute.technical.examples.3')
      ],
      color: 'purple'
    },
    {
      title: $t('contributePage.waysToContribute.design.title'),
      icon: '🎨',
      description: $t('contributePage.waysToContribute.design.description'),
      examples: [
        $t('contributePage.waysToContribute.design.examples.0'),
        $t('contributePage.waysToContribute.design.examples.1'),
        $t('contributePage.waysToContribute.design.examples.2'),
        $t('contributePage.waysToContribute.design.examples.3')
      ],
      color: 'green'
    },
    {
      title: $t('contributePage.waysToContribute.community.title'),
      icon: '🌐',
      description: $t('contributePage.waysToContribute.community.description'),
      examples: [
        $t('contributePage.waysToContribute.community.examples.0'),
        $t('contributePage.waysToContribute.community.examples.1'),
        $t('contributePage.waysToContribute.community.examples.2'),
        $t('contributePage.waysToContribute.community.examples.3')
      ],
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

  // Form state
  let formData = {
    name: '',
    email: '',
    contributionType: '',
    message: ''
  };

  let isSubmitting = false;
  let submitStatus = ''; // 'success' or 'error'

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = '';

    try {
      const response = await fetch('https://formspree.io/f/xzzkzepr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        submitStatus = 'success';
        formData = { name: '', email: '', contributionType: '', message: '' };
      } else {
        submitStatus = 'error';
      }
    } catch (error) {
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>{$t('nav.contribute')} - Universalize</title>
</svelte:head>

<!-- Hero -->
<section class="bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-bold text-white">{$t('contributePage.hero.title')}</h1>
    <p class="text-xl text-blue-200">
      {$t('contributePage.hero.subtitle')}
    </p>
  </div>
</section>

<!-- Introduction -->
<section class="bg-slate-900 px-6 py-16">
  <div class="mx-auto max-w-4xl text-center">
    <p class="text-lg leading-relaxed text-slate-300">
      {$t('contributePage.intro')}
    </p>
  </div>
</section>

<!-- Why Contribute -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">
      {$t('contributePage.whyContribute.title')}
    </h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('contributePage.whyContribute.collective.title')}
        </h3>
        <p class="text-slate-300">
          {$t('contributePage.whyContribute.collective.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-purple-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-purple-300">
          {$t('contributePage.whyContribute.diverse.title')}
        </h3>
        <p class="text-slate-300">
          {$t('contributePage.whyContribute.diverse.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-green-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-green-300">
          {$t('contributePage.whyContribute.impact.title')}
        </h3>
        <p class="text-slate-300">
          {$t('contributePage.whyContribute.impact.description')}
        </p>
      </div>
      
      <div class="rounded-xl border border-blue-500 bg-slate-900/50 p-6">
        <h3 class="mb-3 text-xl font-bold text-blue-300">
          {$t('contributePage.whyContribute.learning.title')}
        </h3>
        <p class="text-slate-300">
          {$t('contributePage.whyContribute.learning.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Ways to Contribute -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">
      {$t('contributePage.waysToContribute.title')}
    </h2>
    
    <div class="grid gap-8 md:grid-cols-2">
      {#each contributionTypes as type}
        {@const colors = colorClasses[type.color]}
        <div class="rounded-xl border {colors.border} bg-slate-800/50 p-8">
          <div class="mb-4 flex items-center gap-4">
            <div class="text-4xl">{type.icon}</div>
            <h3 class="text-2xl font-bold {colors.text}">{type.title}</h3>
          </div>
          <p class="mb-6 leading-relaxed text-slate-300">
            {type.description}
          </p>
          
          <div class="space-y-2">
            <div class="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {$t('contributePage.waysToContribute.examples')}
            </div>
            <ul class="space-y-2 text-sm text-slate-400">
              {#each type.examples as example}
                <li class="flex items-start gap-2">
                  <span class="mt-1 text-xs">•</span>
                  <span>{example}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contribution Form -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-2xl">
    <h2 class="mb-8 text-center text-3xl font-bold text-white">
      {$t('contributePage.form.title')}
    </h2>
    
    <form on:submit={handleSubmit} class="space-y-6">
      <!-- Name -->
      <div>
        <label for="name" class="mb-2 block text-sm font-medium text-slate-300">
          {$t('contributePage.form.name.label')}
        </label>
        <input
          id="name"
          type="text"
          bind:value={formData.name}
          required
          class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="{$t('contributePage.form.name.placeholder')}"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-slate-300">
          {$t('contributePage.form.email.label')}
        </label>
        <input
          id="email"
          type="email"
          bind:value={formData.email}
          required
          class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="{$t('contributePage.form.email.placeholder')}"
        />
      </div>

      <!-- Contribution Type -->
      <div>
        <label for="contributionType" class="mb-2 block text-sm font-medium text-slate-300">
          {$t('contributePage.form.contributionType.label')}
        </label>
        <select
          id="contributionType"
          bind:value={formData.contributionType}
          required
          class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          <option value="">{$t('contributePage.form.contributionType.placeholder')}</option>
          <option value="content">{$t('contributePage.waysToContribute.content.title')}</option>
          <option value="technical">{$t('contributePage.waysToContribute.technical.title')}</option>
          <option value="design">{$t('contributePage.waysToContribute.design.title')}</option>
          <option value="community">{$t('contributePage.waysToContribute.community.title')}</option>
          <option value="other">{$t('contributePage.form.contributionType.other')}</option>
        </select>
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="mb-2 block text-sm font-medium text-slate-300">
          {$t('contributePage.form.message.label')}
        </label>
        <textarea
          id="message"
          bind:value={formData.message}
          required
          rows="6"
          class="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="{$t('contributePage.form.message.placeholder')}"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        disabled={isSubmitting}
        class="w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {#if isSubmitting}
          {$t('contributePage.form.submitting')}
        {:else}
          {$t('contributePage.form.submit')}
        {/if}
      </button>

      <!-- Status Messages -->
      {#if submitStatus === 'success'}
        <div class="rounded-lg bg-green-500/20 p-4 text-green-300">
          {$t('contributePage.form.success')}
        </div>
      {:else if submitStatus === 'error'}
        <div class="rounded-lg bg-red-500/20 p-4 text-red-300">
          {$t('contributePage.form.error')}
        </div>
      {/if}
    </form>
  </div>
</section>

<!-- Alternative Contact Methods -->
<section class="bg-slate-900 px-6 py-20">
  <div class="mx-auto max-w-4xl">
    <h2 class="mb-12 text-center text-3xl font-bold text-white">
      {$t('contributePage.alternativeContact.title')}
    </h2>
    
    <div class="grid gap-8 md:grid-cols-3">
      <!-- Email -->
      <a 
        href="mailto:contribute@universalize.org"
        class="group rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-center transition hover:border-blue-500 hover:bg-slate-800"
      >
        <div class="mb-4 text-4xl">📧</div>
        <h3 class="mb-2 text-xl font-bold text-blue-300">Email</h3>
        <p class="text-sm text-slate-400">
          contribute@universalize.org
        </p>
      </a>

      <!-- GitHub -->
      <a 
        href="https://github.com/BjornKennethHolmstrom/Universalize"
        target="_blank"
        class="group rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-center transition hover:border-purple-500 hover:bg-slate-800"
      >
        <div class="mb-4 text-4xl">🐙</div>
        <h3 class="mb-2 text-xl font-bold text-purple-300">GitHub</h3>
        <p class="text-sm text-slate-400">
          View the source code
        </p>
      </a>

      <!-- Community -->
      <div class="rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-center">
        <div class="mb-4 text-4xl">🌐</div>
        <h3 class="mb-2 text-xl font-bold text-green-300">{$t('contributePage.alternativeContact.community.title')}</h3>
        <p class="text-sm text-slate-400">
          {$t('contributePage.alternativeContact.community.description')}
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Quote -->
<section class="bg-slate-950 px-6 py-20">
  <div class="mx-auto max-w-3xl text-center">
    <blockquote class="mb-8 text-2xl italic leading-relaxed text-slate-300">
      "{$t('contributePage.quote.text')}"
    </blockquote>
    <cite class="text-lg text-blue-400">— {$t('contributePage.quote.author')}</cite>
  </div>
</section>
