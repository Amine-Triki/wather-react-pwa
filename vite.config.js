import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "icon-256x256.png", "icon-384x384.svg" , "icon-144x144.svg"],
  manifest: {
    name: "Weather Ups",
    short_name: "Weather Ups",
    description: "An app that can show the weather forecast for your city.",
    icons: [
      {
        src: "assets/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "assets/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
   
      {
        src: "assets/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "icon 256 256",
      },
      {
        src: "assets/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};



// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});



