import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "icon-256x256.png", "icon-384x384.svg" ],
  manifest: {
    name: "Weather app",
    short_name: "Weather app",
    description: "An app that can show the weather forecast for your city.",
    icons: [
      
      
      
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
        purpose: "icon",
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



