import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // La cible de navigateur par défaut est maintenant 'baseline-widely-available'
  // Vous pouvez la personnaliser si nécessaire
  // build: {
  //   target: 'baseline-widely-available'
  // }
})
