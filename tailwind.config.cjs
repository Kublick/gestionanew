/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#B3A7D9',
				secondary: '#EAE6F4',
				accent: '#6D8C82',
				whatsapp: '#25d366',
				texto: '#70648F'
			},
			fontFamily: {
				bebas: ['Bebas Neue', 'sans-serif'],
				montserrat: ['Montserrat', 'serif'],
				mitalic: ['Montserrat Italic', 'serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			backgroundImage: {
				'hero-image': "url('/imagen_inicio.webp')",
				'sesion-image': "url('/imagen_sesion.webp')"
			}
		}
	},
	plugins: []
}
