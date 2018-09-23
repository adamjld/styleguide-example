import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import localResolve from 'rollup-plugin-local-resolve';
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";

const env = process.env.NODE_ENV;
const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: {
    file: {
      es: pkg.module,
      cjs: pkg.main
    }[env],
    format: env
  },
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    localResolve(),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    }),
    commonjs(),
    filesize()
  ]
};