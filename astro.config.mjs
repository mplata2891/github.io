// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. INJECT YOUR GITHUB PAGES URL HERE
  site: 'https://mplata2891.github.io',
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});