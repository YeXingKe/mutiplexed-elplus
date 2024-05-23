import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import checker from 'vite-plugin-checker'; // 检查ts语法
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { svgBuilder } from './packages/icon/src/svg/index'
// import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import WindiCSS from 'vite-plugin-windicss'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    svgBuilder('./src/assets/icons/'),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()]
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()]
    // }),
    dts({
      entryRoot: './packages',
      // cleanVueFileName:true,// 打包文件为d.ts，默认false，文件为.vue.d.ts
      outDir: ['./dist'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: './tsconfig.json'
    }),
    DefineOptions()
  ],
  // plugins: [
  //   vue(),
  //   AutoImport({
  //     resolvers: [ElementPlusResolver()]
  //   }),
  //   Components({
  //     resolvers: [ElementPlusResolver()]
  //   }),
  //   vueJsx(),
  //   // svgBuilder('./src/assets/icons/'),
  //   visualizer(),
  //   // 配置vite在运行的时候自动检测eslint规范
  //   // eslintPlugin({
  //   //   // 插件配置项
  //   //   cache: false, // 默认缓存结果
  //   //   exclude: ['node_modules/**', 'dist/**'], // 忽略检查的文件
  //   //   include: [
  //   //     'packages/**/*.ts',
  //   //     'packages/**/*.js',
  //   //     'packages/**/*.vue',
  //   //     'packages/*.ts',
  //   //     'packages/*.js',
  //   //     'packages/*.vue',
  //   //     'src/**/*.ts',
  //   //     'src/**/*.js',
  //   //     'src/**/*.vue',
  //   //     'src/*.ts',
  //   //     'src/*.js',
  //   //     'src/*.vue'
  //   //   ]
  //   // })
  //   dts({
  //     entryRoot: './packages',
  //     outDir: ['./dist'],
  //     //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
  //     tsconfigPath: './tsconfig.json'
  //   }),
  //   DefineOptions()
  // ], // checker({typescript:true})
  resolve: {
    alias: {
      '~': resolve('src')
    }
  },
  build: {
    chunkSizeWarningLimit: 10 * 1024 * 1024,
    // cssCodeSplit: true,
    minify: 'terser',
    sourcemap: true,
    reportCompressedSize: true,
    lib: {
      entry: 'packages/index.ts',
      name: 'index'
      // fileName: format => `index.${format === 'es' ? 'es' : format}.js`
    },
    rollupOptions: {
      input: ['./packages/index.ts'],
      external: ['vue', 'lodash-es', 'element-plus'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].es.js',
          //让打包目录和我们目录对应
          // preserveModules: true,
          // 你的源代码中使用了ES模块的导出语法（例如export function foo() {}或export const bar = ...），Rollup将会保持这种导出模式，生成的bundle会暴露这些导出为命名导出
          exports: 'named'
        },
        {
          //打包格式
          format: 'umd',
          //打包后文件名
          entryFileNames: '[name].umd.js',
          //让打包目录和我们目录对应
          // preserveModules: true,
          exports: 'named'
          // inlineDynamicImports: false,
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     if (
          //       id.toString().split('node_modules/')[1].split('/')[0].includes('mutiplexed-elplus')
          //     ) {
          //       return 'mutiplexed-elplus'
          //     } else {
          //       return 'index'
          //     }
          //   }
          // }
        }
      ]
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "~/styles/element/index.scss" as *;`,
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2023',
        // 开启websocket服务，默认true
        ws: true,
        changeOrigin: true,
        // 用于修改路径配置,把api路径名去掉
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
