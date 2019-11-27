import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import resolve from 'rollup-plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    url(),
    svgr(),
    resolve(),
    localResolve(),
    commonjs(),
    external(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      modules: true,
      plugins: [autoprefixer],
      use: ['sass'],
      extract: 'dist/styles.css',
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.(tsx|ts)'],
    }),
  ],
};
