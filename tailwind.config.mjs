/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: '#FCFCFC',
				secondary: '#E4E4E4',
				contrast: '#001234',
				info: '#0059FF',
				success: '#007700',
				error: '#C50000',
				mainHover: '#B3B3B3',
				contrastHover: '#001F59',
				infoHover: '#0042BE',
				successHover: '#006200',
				errorHover: '#A10000',
				font: '#1C1C1C',
				fontInvert: '#FCFCFC'
			},
			borderRadius: {
				custom: '15px'
			},
			fontSize: {
				base: '32px'
			}
		},
	},
	plugins: [],
}
