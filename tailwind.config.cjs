/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,css}'],
	theme: {
		colors: {
			'coffee-100': '#ece0d1',
			'coffee-200': '#dbc1ac',
			'coffee-300': '#967259',
			'coffee-400': '#634832',
			'coffee-500': '#38220f',
		},
		extend: {
			boxShadow: {
				retro: '5px 5px',
			},
		},
	},
	plugins: [],
};