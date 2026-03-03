import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  output: 'static',
  vite: {
    css: {
      modules: {
        scopeBehaviour: 'local'
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/variables" as *;`
        }
      }
    }
  }
});