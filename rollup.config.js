import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';

let includePathOptions = {
    include: {
        "components": "src/components/component.js",
        "gameState": "src/states/gameState.js",
        "model": "src/components/model.js"
    },
    paths: ['src'],
    external: [],
    extensions: ['.js', '.json', '.html']
};

export default {
  entry: 'src/main.js',
  dest: 'build/index.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
        include: 'src/**'
    }),
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    includePaths(includePathOptions),
  ],
};
