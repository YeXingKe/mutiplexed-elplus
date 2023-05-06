const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const WindiCSS = require('vite-plugin-windicss')
const fsExtra = require('fs-extra')
const fs = require('fs')

// 打包入口文件夹
const enrtyDir = path.resolve(__dirname, '../packages')
const outDir = path.resolve(__dirname, '../lib')
// https://vitejs.dev/config/

// configFile属性排除项目中vite配置文件
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx(), WindiCSS]
})

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router', 'virtual:windi.css'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(enrtyDir, 'index.ts'),
        name: 'mutiplexed-plus',
        fileName: 'mutiplexed-plus',
        formats: ['es', 'umd']
      },
      outDir
    }
  })
}

// 单组件打包构建
const buildSingle = async name => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(enrtyDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, name)
    }
  })
}

// 每个组件生成package.json
const createPackageJson = name => {
  const fileStr = `{
    "name":"${name}",
    "main":"index.umd.js",
    "module":"index.es.js",
    "style":"styles.css"
  }`

  // 有cp命令，需要在git bash终端执行lib打包
  fsExtra.outputFile(path.resolve(outDir, `${name}/package.json`), fileStr, 'utf-8')
}

// 打包成库
const buildLib = async () => {
  await buildAll()

  const components = fs.readdirSync(enrtyDir).filter(name => {
    const componentDir = path.resolve(enrtyDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()

    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  // 循环构建
  for (const name of components) {
    await buildSingle(name)
    createPackageJson(name)
  }
}

buildLib()
