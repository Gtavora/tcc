import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Porta do servidor local (não influencia o Vercel)
  },
  build: {
    outDir: 'dist', // O diretório onde os arquivos de build serão gerados
    sourcemap: true, // Gera um mapa de origem para depuração
  },
});
