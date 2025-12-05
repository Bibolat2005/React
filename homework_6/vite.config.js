import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'homework_6',
        short_name: 'homework_6',
        start_url: '/',
        display: 'standalone',
        theme_color: '#0b5cff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/character/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'rick-and-morty-api',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60
              },
              networkTimeoutSeconds: 5
            }
          }
        ]
      }
    })
  ]
})