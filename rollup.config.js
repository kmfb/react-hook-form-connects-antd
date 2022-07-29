import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import styles from "rollup-plugin-styles";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        // sourcemap: true,
      },
    ],
    external: ["src/stories/*"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      styles(),
      typescript({
        tsconfig: "./tsconfig.json",
        clean: true,
        exclude: ["**/__tests__", "**/*.test.ts"],
      }),
    ],
  },
];
