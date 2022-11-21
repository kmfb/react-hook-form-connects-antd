import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        // sourcemap: true,
      },
    ],
    external: ['src/stories/*'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      styles(),
      typescript({
        tsconfig: './tsconfig.json',
        clean: true,
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      terser({
        compress: {
          drop_console: true,
        },
      }),
    ],
  },
];
