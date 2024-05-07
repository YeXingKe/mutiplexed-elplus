// vitest.config.ts Vitest测试框架的配置文件
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 测试环境配置
  test: {
    // 指定测试环境，例如使用happy-dom作为DOM环境
    // 相比于 jsdom，Happy DOM 设计得更加轻量级，旨在提供更快的启动时间和运行速度。
    environment: 'happy-dom',

    // 全局变量配置
    globals: true,

    // 测试文件匹配模式
    include: ['**/__tests__/*.test.{ts,tsx}', '**/?(*.)+(spec|test).{ts,tsx}'],

    // 覆盖默认的测试报告处理器
    reporters: 'default',

    // 收集代码覆盖率
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  },

  // 测试服务器配置，如端口号、代理等
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  // 插件配置
  plugins: [
    vue()
    // 可以在这里引入并配置Vitest的插件
  ]
})
