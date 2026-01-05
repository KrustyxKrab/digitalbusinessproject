/** @type {import('tailwindcss').Config} */
// Tailwind CSS v4 uses CSS-first configuration
// All theme customization is now in src/styles/global.css @theme block
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [require("@tailwindcss/typography")],
};
