import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.gestionatupsicologia.com',
    integrations: [
        svelte(),
        react(),
        // Keep noindex pages (payment, thank-you, registration, members-only) out of the sitemap
        sitemap({ filter: (page) => !/gracias|confirmacion|registro|vip|formulario|planes|oferta/.test(page) }),
    ],
    vite: {
        plugins: [tailwind()],
    }
})
