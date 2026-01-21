import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/build/',
    build: {
        manifest: 'manifest.json',
        outDir: 'public/build',
        emptyOutDir: true,
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    theme: {
    extend: {
      colors: {
        // helpful accents if you want to match the screenshots
        rose: {
          600: '#fb7185',
          500: '#f43f5e',
        },
        // add other custom tokens if desired
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
});
