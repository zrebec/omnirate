module.exports = {
	content: ['./src/**/*.{vue,js}'],
	safelist: [], // this classes will be always generated withount matter if is used or not
	theme: {
		extend: {
			colors: {},
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(calc( 25% - 1rem ), 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
			},
		},
		variants: {},
		plugins: [],
	},
	plugins: [],
};
