import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

const config = [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
                sourcemap: true
            },
            {
                file: "dist/index.module.js",
                format: "esm",
                sourcemap: true,
              },
        ],
        plugins: [
            external(),
            resolve({ extensions: ['.js', '.jsx'] }),
            commonjs(),
            postcss(),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: ["@babel/preset-env",
                [
                  "@babel/preset-react",
                  { runtime: "automatic" },
                  "@babel/plugin-transform-react-jsx",
                ],],
                // extensions: ['.js', '.jsx']
            }),
            terser()
        ]
    }
]

export default config