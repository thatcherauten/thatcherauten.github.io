export default defineNuxtConfig({
    app: {
        baseURL: '/',
    },
    routeRules: {
        '/**': {
            headers: {
                'Content-Security-Policy': "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com"
            }
        }
    },
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

    primevue: {
        components: {
            prefix: "Prime",
        },
        options: {
            ripple: true,
            inputVariant: "filled",
        },
        usePrimeVue: true,
        importTheme: { from: "@/themes/site-theme.js" },
    },
    css: ["@/assets/css/tailwind.css", "primeicons/primeicons.css"],
    compatibilityDate: "2024-10-21",
});