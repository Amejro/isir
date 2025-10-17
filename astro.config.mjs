// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';


// https://astro.build/config
export default defineConfig({
  site: 'https://Amejro.github.io',
  base: '/isir',
  integrations: [vue()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  vite: {
    plugins: [tailwindcss()]
    
  }
});