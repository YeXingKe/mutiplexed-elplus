import path from 'path'
import fs from 'fs'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
// import vue from '@vitejs/plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'
import multiInput from 'rollup-plugin-multi-input'
import json from '@rollup/plugin-json'
// import { createRequire } from 'module'

// const require = createRequire(import.meta.url)
const pkg = require('../package.json')

// 获取所有组件入口
const getComponentEntries = () => {
  const componentsDir = path.resolve(__dirname, '../packages/components')
  return fs
    .readdirSync(componentsDir)
    .filter(name => {
      const componentPath = path.join(componentsDir, name)
      return fs.statSync(componentPath).isDirectory()
    })
    .map(name => ({
      name,
      input: `packages/components/${name}/index.ts`,
      outputDir: `dist/es/components/${name}`
    }))
}

// 生成样式代理文件
const createStyleProxies = () => {
  const components = getComponentEntries().map(c => c.name)
  const proxyDir = path.resolve(__dirname, '../dist/es/element-plus/components')

  if (!fs.existsSync(proxyDir)) {
    fs.mkdirSync(proxyDir, { recursive: true })
  }

  components.forEach(component => {
    const elComponent = component.replace(/^enhanced-/, '')
    const proxyContent = `@import "../../element-plus/es/components/${elComponent}/style/css";`
    fs.writeFileSync(path.join(proxyDir, `${component}.css`), proxyContent)
  })
}

// 基础配置
const baseConfig = {
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, '../packages') }]
    }),
    resolve({
      extensions: ['.js', '.ts', '.vue', '.json'],
      browser: true
    }),
    commonjs(),
    json({
      preferConst: true,   // 可选：用 const 声明导入的字段
      compact: false,      // 可选：是否压缩输出
      namedExports: true   // 可选：为 JSON 的每个顶级属性生成命名导出
    }),
    vue({
      target: 'browser',
      css: false,
      template: {
        isProduction: true,
        compilerOptions: {
          whitespace: 'condense'
        }
      }
    }),
    // vue(),
    typescript({
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      declaration: true,
      declarationDir: 'dist/types',
      exclude: ['node_modules/**', '**/__tests__/**']
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: false,
      extensions: ['.scss', '.css'],
      use: [
        [
          'sass',
          {
            includePaths: [
              path.resolve(__dirname, '../node_modules'),
              path.resolve(__dirname, '../packages/theme')
            ]
          }
        ]
      ]
    })
  ],
  external: [
    'vue',
    'element-plus',
    'fs',
    /@babel\/runtime/,
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {})
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    tryCatchDeoptimization: false
  }
}

// 按组件生成ESM配置
const esmComponentConfigs = getComponentEntries().map(({ input, outputDir }) => ({
  ...baseConfig,
  input,
  output: {
    format: 'esm',
    dir: outputDir,
    entryFileNames: 'index.js',
    chunkFileNames: 'chunks/[name]-[hash].js',
    preserveModules: true,
    preserveModulesRoot: 'packages/components',
    sourcemap: true
  },
  plugins: [
    ...baseConfig.plugins,
    // 为每个组件添加样式文件
    {
      name: 'component-style',
      generateBundle(options, bundle) {
        const componentName = path.basename(path.dirname(input))
        this.emitFile({
          type: 'asset',
          fileName: `${outputDir}/style.css`,
          source: `@import "element-plus/es/components/${componentName.replace(
            'enhanced-',
            ''
          )}/style/css";`
        })
      }
    }
  ]
}))

// ESM全量配置
const esmFullConfig = {
  ...baseConfig,
  input: 'packages/components/index.ts',
  output: {
    format: 'esm',
    dir: 'dist/es',
    entryFileNames: 'index.js',
    preserveModules: true,
    preserveModulesRoot: 'packages',
    sourcemap: true
  },
  plugins: [
    ...baseConfig.plugins,
    multiInput.default({
      relative: 'packages/'
    })
  ]
}

// CommonJS配置
const cjsConfig = {
  ...baseConfig,
  input: 'packages/components/index.ts',
  output: {
    format: 'cjs',
    dir: 'dist/lib',
    entryFileNames: '[name].js',
    chunkFileNames: 'chunks/[name]-[hash].js',
    exports: 'named',
    preserveModules: true,
    preserveModulesRoot: 'packages',
    sourcemap: true
  },
  plugins: [
    ...baseConfig.plugins,
    multiInput.default({
      relative: 'packages/'
    })
  ]
}

// UMD配置
const umdConfig = {
  ...baseConfig,
  input: 'packages/components/index.ts',
  output: [
    {
      format: 'umd',
      file: 'dist/umd/mutiplexed-elplus.js',
      name: 'MutiplexedElplus',
      globals: {
        vue: 'Vue',
        'element-plus': 'ElementPlus'
      },
      sourcemap: true
    },
    {
      format: 'umd',
      file: 'dist/umd/mutiplexed-elplus.min.js',
      name: 'MutiplexedElplus',
      globals: {
        vue: 'Vue',
        'element-plus': 'ElementPlus'
      },
      plugins: [
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          format: {
            comments: false
          }
        })
      ],
      sourcemap: false
    }
  ],
  plugins: [
    ...baseConfig.plugins.filter(plugin => plugin.name !== 'typescript'),
    typescript({
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      declaration: false,
      exclude: ['node_modules/**', '**/__tests__/**']
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: false,
      extensions: ['.scss', '.css'],
      use: [['sass']],
      file: 'dist/umd/mutiplexed-elplus.css'
    })
  ]
}

// 构建完成后创建样式代理
const postBuildPlugin = {
  name: 'post-build',
  writeBundle() {
    createStyleProxies()
  }
}

export default [...esmComponentConfigs, esmFullConfig, cjsConfig, umdConfig].map(config => ({
  ...config,
  plugins: [...config.plugins, postBuildPlugin]
}))
