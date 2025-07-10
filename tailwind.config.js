/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // این خط برای فعال‌سازی حالت دارک به صورت کلاس
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
