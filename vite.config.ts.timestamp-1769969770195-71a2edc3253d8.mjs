// vite.config.ts
import { defineConfig } from "file:///C:/Users/bhumi/Desktop/patelimpex-26962-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/bhumi/Desktop/patelimpex-26962-main/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/bhumi/Desktop/patelimpex-26962-main/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\bhumi\\Desktop\\patelimpex-26962-main";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 3001
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-components": ["@radix-ui/react-dialog", "@radix-ui/react-popover", "@radix-ui/react-accordion"],
          "routing": ["react-router-dom"],
          "data-fetching": ["@tanstack/react-query"],
          "icons": ["lucide-react"]
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return "assets/[name]-[hash][extname]";
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    },
    chunkSizeWarningLimit: 1e3
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react", "@tanstack/react-query"],
    exclude: ["@tanstack/react-query-devtools"]
  },
  // Enhanced performance optimizations
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
    target: "es2020",
    legalComments: "none"
  },
  // Add compression and caching headers configuration
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxiaHVtaVxcXFxEZXNrdG9wXFxcXHBhdGVsaW1wZXgtMjY5NjItbWFpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYmh1bWlcXFxcRGVza3RvcFxcXFxwYXRlbGltcGV4LTI2OTYyLW1haW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2JodW1pL0Rlc2t0b3AvcGF0ZWxpbXBleC0yNjk2Mi1tYWluL3ZpdGUuY29uZmlnLnRzXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgIHBvcnQ6IDMwMDEsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1vZGUgPT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICBjb21wb25lbnRUYWdnZXIoKSxcbiAgXS5maWx0ZXIoQm9vbGVhbiksXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAncmVhY3QtdmVuZG9yJzogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAndWktY29tcG9uZW50cyc6IFsnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsICdAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlcicsICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJ10sXG4gICAgICAgICAgJ3JvdXRpbmcnOiBbJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAnZGF0YS1mZXRjaGluZyc6IFsnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J10sXG4gICAgICAgICAgJ2ljb25zJzogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoIWFzc2V0SW5mby5uYW1lKSByZXR1cm4gJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJztcbiAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKC9jc3MvaS50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL3N0eWxlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgIH0sXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ2x1Y2lkZS1yZWFjdCcsICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXSxcbiAgICBleGNsdWRlOiBbJ0B0YW5zdGFjay9yZWFjdC1xdWVyeS1kZXZ0b29scyddLFxuICB9LFxuICAvLyBFbmhhbmNlZCBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25zXG4gIGVzYnVpbGQ6IHtcbiAgICBkcm9wOiBtb2RlID09PSAncHJvZHVjdGlvbicgPyBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSA6IFtdLFxuICAgIHRhcmdldDogJ2VzMjAyMCcsXG4gICAgbGVnYWxDb21tZW50czogJ25vbmUnLFxuICB9LFxuICAvLyBBZGQgY29tcHJlc3Npb24gYW5kIGNhY2hpbmcgaGVhZGVycyBjb25maWd1cmF0aW9uXG4gIHByZXZpZXc6IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICdwdWJsaWMsIG1heC1hZ2U9MzE1MzYwMDAnLFxuICAgICAgJ1gtRnJhbWUtT3B0aW9ucyc6ICdTQU1FT1JJR0lOJyxcbiAgICAgICdYLUNvbnRlbnQtVHlwZS1PcHRpb25zJzogJ25vc25pZmYnLFxuICAgICAgJ1N0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHknOiAnbWF4LWFnZT0zMTUzNjAwMDsgaW5jbHVkZVN1YkRvbWFpbnMnLFxuICAgICAgJ0Nyb3NzLU9yaWdpbi1PcGVuZXItUG9saWN5JzogJ3NhbWUtb3JpZ2luLWFsbG93LXBvcHVwcycsXG4gICAgfSxcbiAgfSxcbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSmhDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVMsaUJBQ1QsZ0JBQWdCO0FBQUEsRUFDbEIsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixnQkFBZ0IsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUNyQyxpQkFBaUIsQ0FBQywwQkFBMEIsMkJBQTJCLDJCQUEyQjtBQUFBLFVBQ2xHLFdBQVcsQ0FBQyxrQkFBa0I7QUFBQSxVQUM5QixpQkFBaUIsQ0FBQyx1QkFBdUI7QUFBQSxVQUN6QyxTQUFTLENBQUMsY0FBYztBQUFBLFFBQzFCO0FBQUEsUUFDQSxnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksQ0FBQyxVQUFVLEtBQU0sUUFBTztBQUM1QixnQkFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLEdBQUc7QUFDckMsZ0JBQU0sTUFBTSxLQUFLLEtBQUssU0FBUyxDQUFDO0FBQ2hDLGNBQUksa0NBQWtDLEtBQUssR0FBRyxHQUFHO0FBQy9DLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGNBQUksT0FBTyxLQUFLLEdBQUcsR0FBRztBQUNwQixtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsRUFDekI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTLGFBQWEsZ0JBQWdCLHVCQUF1QjtBQUFBLElBQ3ZFLFNBQVMsQ0FBQyxnQ0FBZ0M7QUFBQSxFQUM1QztBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNLFNBQVMsZUFBZSxDQUFDLFdBQVcsVUFBVSxJQUFJLENBQUM7QUFBQSxJQUN6RCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsRUFDakI7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1AsaUJBQWlCO0FBQUEsTUFDakIsbUJBQW1CO0FBQUEsTUFDbkIsMEJBQTBCO0FBQUEsTUFDMUIsNkJBQTZCO0FBQUEsTUFDN0IsOEJBQThCO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
