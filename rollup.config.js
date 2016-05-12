import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/main.js',
	dest: 'out/main.js',
	sourceMap: true,
	plugins: [ babel() ]
}