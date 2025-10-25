import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, depends }) => {
  const { topic } = params;
  
  // This makes the load function rerun when language changes
  depends('app:language');
  
  try {
    // Try to determine language from various sources
    // The actual language will be handled by the component
    let module;
    
    // For now, just load English - the component will handle language switching
    module = await import(`../${topic}.svx`);
    
    return {
      Component: module.default,
      metadata: module.metadata,
      topic
    };
  } catch (e) {
    console.error(`Failed to load topic: ${topic}`, e);
    throw error(404, `Topic not found: ${topic}`);
  }
};

export const prerender = true;
