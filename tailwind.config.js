/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				51: 'repeat(51, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				7: 'repeat(7, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
}
