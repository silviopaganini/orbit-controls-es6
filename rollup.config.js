import pkg from './package.json'
import babel from 'rollup-plugin-babel'

export default [
  {
    input: 'src/index.js',
    external: [ 'three' ],
    plugins: [
      babel({ presets: ['@babel/preset-env'], babelrc: false })
    ],
    output: [
      {
        name: 'orbitControls',
        file: pkg.browser,
        format: 'umd',
        globals: {
          'three': 'three'
        }
      }
    ]
  },
  {
    input: 'src/index.js',
    external: [ 'three' ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
