/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				background: "#121212",
				"secondary-background": "#212121",
				primary: "#272AB0",
				secondary: "#212265",
				alt: "#202033",
			},
		},
	},
	plugins: [],
};
