/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: '#FCFCFC',
				secondary: '#E4E4E4',
				contrast: '#001234',
				font: '#1C1C1C',
				fontInvert: '#FCFCFC'
			},
			borderRadius: {
				custom: '15px'
			}
		},
	},
	plugins: [],
}
