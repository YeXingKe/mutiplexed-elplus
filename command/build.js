// 打包方式二
const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const WindiCSS = require('vite-plugin-windicss')
const rollupDts = require('vite-plugin-dts')
const DefineOptions = require('unplugin-vue-define-options/vite')
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
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS,
    rollupDts({
      entryRoot: '../packages',
      outDir: ['../dist'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: '../tsconfig.json'
    }),
    DefineOptions()
  ]
})

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router', 'virtual:windi.css', 'lodash-es'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

const copyFile = (sourcePath = '../default/index.d.ts', targetPath = '../lib') => {
  const source = path.resolve(__dirname, sourcePath) // 源文件路径
  const targetFolder = path.resolve(__dirname, targetPath) // 目标文件夹路径
  const targetFilePath = path.join(targetFolder, 'index.d.ts') // 目标文件的完整路径

  fs.promises
    .copyFile(source, targetFilePath)
    .then(() => console.log('文件复制成功'))
    .catch(err => console.error(`复制文件时发生错误: ${err}`))
}

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(enrtyDir, 'index.ts'),
        name: 'index',
        fileName: format => `index.${format}.js`,
        formats: ['es', 'umd']
      },
      outDir
    }
  })
  // copyFile()
  // copyFile('../package.json', '../lib/package.json')
  // copyFile('../README.md', '../lib/README.md')
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
        fileName: format => `index.${format}.js`,
        formats: ['es', 'umd']
      },
      outDir: path.resolve(outDir, name)
    }
  })
  // copyFile('../default/index.d.ts', `../lib/${name}`)
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
