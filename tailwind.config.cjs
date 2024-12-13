/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'], // Enable dark mode with class
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Ensure paths include all JSX/HTML files
	theme: {
		extend: {
			borderColor: {
				border: 'hsl(var(--border))', // Maps to your CSS variable
			},
			backgroundColor: {
				background: 'hsl(var(--background))', // Maps to your CSS variable
			},
			textColor: {
				foreground: 'hsl(var(--foreground))', // Maps to your CSS variable
			},
			colors: {
				// Color variables converted from CSS
				'first-color': 'hsl(92,43%,39%)',
				'first-color-alt': 'hsl(94,66%,22%)',
				'first-color-light': 'hsl(93,93%,33%)',
				'title-color': 'hsl(228, 8%, 98%)',
				'text-color': 'hsl(228, 8%, 70%)',
				'white-color': 'hsl(228, 8%, 98%)',
				'black-color': 'hsl(228, 6%, 4%)',
				'body-color': 'hsl(228, 6%, 8%)',
				'container-color': 'hsla(240,5%,12%,0.13)',
				'shadow-color': 'hsla(93, 54%, 54%, 0.4)',
			},
			fontFamily: {
				// Font family mapping
				montserrat: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				// Typography sizes
				normal: '.938rem',
				small: '.813rem',
				h1: '1rem',
				h2: '1.5rem',
				h3: '1.25rem',
				biggest: '2.25rem',
			},
			spacing: {
				// Example spacing utilities
				'section-padding': '5rem',
				'card-padding': '1.5rem',
			},
			boxShadow: {
				img: '0 0 48px var(--tw-shadow-color)', // Matches shadow-img
			},
			backgroundImage: {
				'gradient-card': 'linear-gradient(180deg, hsla(93, 8%, 8%), hsla(93, 40%, 30%))',
			},
			borderRadius: {
				xl: '2rem', // Matches `border-radius: 2rem`
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'), // Optional plugins
		require('tailwindcss-animate'),
	],
};
