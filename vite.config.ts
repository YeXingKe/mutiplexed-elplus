import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import checker from 'vite-plugin-checker'; // 检查ts语法
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgBuilder } from './src/components/icon/src/svg/index'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgBuilder('./src/assets/icons/'),
    visualizer(),
    // 配置vite在运行的时候自动检测eslint规范
    eslintPlugin({
      // 插件配置项
      cache: false, // 默认缓存结果
      exclude: ['node_modules/**', 'dist/**'], // 忽略检查的文件
      include: [
        'packages/**/*.ts',
        'packages/**/*.js',
        'packages/**/*.vue',
        'packages/*.ts',
        'packages/*.js',
        'packages/*.vue',
        'src/**/*.ts',
        'src/**/*.js',
        'src/**/*.vue',
        'src/*.ts',
        'src/*.js',
        'src/*.vue'
      ]
    })
  ], // checker({typescript:true})
  resolve: {
    alias: {
      '~': resolve('src')
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
