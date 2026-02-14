
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: true,
    target: 'es2020', // Modern ES6+ target for better performance
    rollupOptions: {
      output: {
        // Improved chunking strategy for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['@radix-ui/react-dialog', '@radix-ui/react-popover', '@radix-ui/react-accordion'],
          'routing': ['react-router-dom'],
          'data-fetching': ['@tanstack/react-query'],
          'icons': ['lucide-react'],
        },
        // Better asset naming for caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 800,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', '@tanstack/react-query'],
    exclude: ['@tanstack/react-query-devtools'],
  },
  // Enhanced performance optimizations
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    target: 'es2020',
    legalComments: 'none',
  },
  // Add compression and caching headers configuration
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    },
  },
}));
