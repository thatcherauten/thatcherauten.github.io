module.exports = {
    darkMode: ['class', '[class~="p-dark"]'],
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
    ],
    plugins: [require('tailwindcss-primeui')]
};