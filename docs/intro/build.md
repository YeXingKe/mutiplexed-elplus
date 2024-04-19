# 组件库搭建

## 项目创建

- 用脚手架创建项目

- 修正项目结构

  ```
  -项目
  --packages  放各个独立组件
  --examples 把src改为examples放例子，主要修改入口路径
  --lib 打包后的组件包
  --command
  ---build.js 打包命令
  ```

## 编写组件

## 打包组件

- 前端模块化（CommonJS、AMD、UMD）：以文件为模块，有自己的作用域，在一个文件里面定义的变量、函数、类都是私有的，对其他文件不可见

  - CommonJS（适用于服务端）：文件作用域、缓存、同步加载
  - AMD（适用于浏览器）：文件作用域、非同步加载
  - UMD（）：前后端跨平台的模块化解决方案，原理是先判断是否支持 Nodejs 模块格式（exports 是否存在），存在则使用 Node.js 模块格式；前两个都不存在，则将模块公开到全局（window 或 global）

- 用 vite 打包 js 为 umd 模式

  ```js
  const path = require("path");
  const { defineConfig, build } = require("vite");
  const vue = require("@vitejs/plugin-vue");
  const vueJsx = require("@vitejs/plugin-vue-jsx");
  const WindiCSS = require("vite-plugin-windicss");
  const fsExtra = require("fs-extra");
  const fs = require("fs");

  // 打包入口文件夹
  const enrtyDir = path.resolve(__dirname, "../packages");
  const outDir = path.resolve(__dirname, "../lib");
  // https://vitejs.dev/config/

  // configFile属性排除项目中vite配置文件
  const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx(), WindiCSS]
  });

  // rollup配置
  const rollupOptions = {
    external: ["vue", "vue-router", "virtual:windi.css"],
    output: {
      globals: {
        vue: "Vue"
      }
    }
  };

  // 全量打包构建
  const buildAll = async () => {
    await build({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(enrtyDir, "index.ts"),
          name: "mutiplexed-plus",
          fileName: "mutiplexed-plus",
          formats: ["es", "umd"]
        },
        outDir
      }
    });
  };

  // 单组件打包构建
  const buildSingle = async (name) => {
    await build({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(enrtyDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"]
        },
        outDir: path.resolve(outDir, name)
      }
    });
  };

  // 每个组件生成package.json
  const createPackageJson = (name) => {
    const fileStr = `{
      "name":"${name}",
      "main":"index.umd.js",
      "module":"index.es.js",
      "style":"styles.css"
    }`;

    // 有cp命令，需要在git bash终端执行lib打包
    fsExtra.outputFile(
      path.resolve(outDir, `${name}/package.json`),
      fileStr,
      "utf-8"
    );
  };

  // 打包成库
  const buildLib = async () => {
    await buildAll();

    const components = fs.readdirSync(enrtyDir).filter((name) => {
      const componentDir = path.resolve(enrtyDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();

      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    });

    // 循环构建
    for (const name of components) {
      await buildSingle(name);
      createPackageJson(name);
    }
  };

  buildLib();
  ```

## 发布组件

- npm 注册账号
- 登录账号：项目终端输入 npm login
- 发布组件：项目终端输入 npm publish

## 搭建文档

本文档是独立分离于组件库的，基于 Vitepress 搭建的

- 安装 vitepress

  ```bash
  npm add -D vitepress
  pnpm add -D vitepress
  yarn add -D vitepress
  ```

- 安装向导

  ```bash
  pnpm vitepress init
  yarn vitepress init
  npm vitepress init
  ```

- 文件结构

  ```
  .
  ├─ docs
  │  ├─ .vitepress
  │  │  └─ config.js
  │  ├─ api-examples.md
  │  ├─ markdown-examples.md
  │  └─ index.md
  └─ package.json
  ```

其他细节请参考 Vitepress 官网：https://vitepress.dev/guide/what-is-vitepress
