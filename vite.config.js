// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://dianantodorova.github.io/Tic-Tac-Toe-Game/', // Replace with your repository name
});
