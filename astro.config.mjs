// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. INJECT YOUR GITHUB PAGES URL HERE
  site: 'https://mplata2891.github.io',

  // 2. REPOSITORY ROUTING (Read carefully)
  // If your GitHub repository is named EXACTLY "<YOUR_USERNAME>.github.io", leave this commented out.
  // If your repository is named something else (like "portfolio" or "m1-k3"), uncomment this line and put the repo name here:
  // base: '/<YOUR_REPO_NAME>',

  vite: {
    plugins: [tailwindcss()]
  }
});