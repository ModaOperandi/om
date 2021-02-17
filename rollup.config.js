import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import postcss from '@moda/rollup-plugin-postcss';
import packageImporter from 'node-sass-package-importer';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'hidden'
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: 'hidden'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    babel({ babelHelpers: 'bundled', extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    postcss({
      extract: 'styles.css',
      minimize: true,
      use: {
        sass: {
          importer: [
            packageImporter(),
            url => (url === '~om' ? { file: path.join(__dirname, 'src/index.scss') } : null)
          ]
        }
      }
    })
  ]
};
