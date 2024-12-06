/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,css}'],
	theme: {
		colors: {
			coffee: {
				100: '#ece0d1',
				200: '#dbc1ac',
				300: '#967259',
				400: '#634832',
				500: '#38220f',
			}
		},
		extend: {
			boxShadow: {
				retro: '5px 5px',
			},
		},
	},
	plugins: [],
};