import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				wannaride: {
					primary: '#f5c343',
					secondary: '#94c9fe',
					accent: '#0b2a3a',
					neutral: '#0b2a3a',
					'base-100': '#ffffff',
					info: '#94c9fe',
					success: '#36d399',
					warning: '#fbbd23',
					error: '#f87272'
				}
			}
		]
	}
};
