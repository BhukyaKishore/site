/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e293b', // slate-800
                secondary: '#475569', // slate-600
                accent: {
                    light: '#60a5fa', // blue-400
                    DEFAULT: '#3b82f6', // blue-500
                    dark: '#2563eb', // blue-600
                },
                'tech-blue': '#3b82f6',
                'off-white': '#f8f9fa',
                surface: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-accent': 'linear-gradient(135deg, #0066cc 0%, #0099ff 100%)',
            }
        },
    },
    plugins: [],
}
