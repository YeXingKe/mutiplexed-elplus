# 如何规范组件代码

## 文件管理规范

组件库使用的是 Monorepo（Mono Repository，单体仓库）是一种项目管理策略，它将多个相关的项目或者库放在同一个 Git 仓库中进行统一管理，而不是分散在多个单独的仓库中。使用 Monorepo 可以方便地共享代码、依赖以及管理项目间的版本迭代，尤其是在大型项目或组织中，这种方式有利于跨项目的协作和代码一致性。

Lerna、Yarn Workspaces、Nx、Rush 都是用于管理 Monorepo（单体仓库）的工具，它们各自具有不同的特点和适用场景，下面是它们的一些优缺点对比：

- Lerna：
  - 优点：广泛使用、灵活性、独立发布
  - 缺点：性能问题、自动化程度支持相对有限、本身不支持增量构建需要结合其他工具
- Yaen Workspaces：
  - 优点：集成良好、性能良好、简单易用
  - 缺点：功能较基础、依赖管理不方便
- Nx
  - 优点：高度自动化、高级特性、多框架支持
  - 缺点：学习曲线复杂、体积较大
- Rush
  - 优点：企业级、强大管理、规范化
  - 缺点：复杂度较高、学习成本

使用 Yarn Workspaces 创建 Monorepo 的基本流程：

```shell
mkdir my-monorepo
cd my-monorepo
yarn set version berry # 使用Yarn v2+ (Berry)
yarn init --yes # 初始化仓库


echo "workspaces: ['packages/*']" >> .yarnrc.yml # 配置工作区，
mkdir packages
cd packages
mkdir package-a package-b # 创建两个子项目
cd package-a
yarn init --yes # 初始化package-a #在package-a中添加自己的依赖和脚本

cd ../package-b
yarn init --yes # 初始化package-b
# 若package-b依赖package-a，则在package-b的package.json中写入内部依赖
echo '{"dependencies": {"package-a": "workspace:*"}}' >> package.json，在package.json中添加workspaces字段
cd ../..
yarn install # 安装所有工作区的依赖

yarn workspace package-a build # 开发和构建
```

这样就建立了一个基本的 Monorepo 结构，后续可以在这个基础上进行开发和维护各个项目。

## .husky 规范

husky 是一个轻量级的 Nodejs 工具，简化了 Git 钩子的配置和使用，使得在项目中启用和管理 Git 钩子更便捷，它的作用如下

- 自动化流程：.husky 文件夹中的脚本会在特定的 Git 生命周期事件触发时自动执行。如当用户执行 git commit 时，.husky/pre-commit 脚本会被调用，用来运行代码格式化工具、静态代码分析器等，确保即将提交的代码符合项目规范。
- 代码质量保障：通过.husky 中的钩子脚本，可以在代码提交前进行 linting、类型检查、单元测试等，确保只有合格的代码才能进入代码库。
- 预防性措施：.husky 文件夹中的钩子可以防止未经审查的代码推送到共享分支。
- 团队协作与一致性：通过项目中统一配置.husky 文件夹，团队成员无需各自手动设置 Git 钩子，保证了开发流程的一致性。
- 易用性与灵活性：husky 提供了一种简单直观的方式来定义和管理 Git 钩子。

## eslint 规范

- **安装插件**：eslint、eslint-plugin-vue、vite-plugin-eslint（需要在 vite.config.ts 中引入插件）、@vue/eslint-config-typescript

- **.eslintrc.js 配置如下**：

  ```js
  // 根据个人项目eslint检查错误适当增减规则
  module.exports = {
    // 用于指定代码的运行环境，可以配置多个环境，包括浏览器、Node.js、ES6等。
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    // 用于指定代码解析器的选项
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@typescript-eslint/parser"
    },
    parser: "vue-eslint-parser",
    // 用于继承已有的规则配置
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    plugins: ["vue", "@typescript-eslint"],
    // 用于指定自定义规则
    rules: {
      "vue/component-definition-name-casing": "off",
      "vue/multi-word-component-names": "off",
      "vue/attributes-order": "off",
      "vue/require-default-prop": "off",
      "vue/require-valid-default-prop": "off",
      "vue/no-template-shadow": "off",
      "vue/valid-template-root": "off",
      "vue/no-unused-vars": "off",
      "vue/valid-v-for": "off",
      "vue/no-ref-as-operand": "off",
      "vue/require-v-for-key": "off",
      "vue/prefer-import-from-vue": "off",
      "vue/attribute-hyphenation": "off",
      "vue/first-attribute-linebreak": "off",
      "vue/no-setup-props-destructure": "off",
      "vue/v-on-event-hyphenation": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-this-alias": "off",
      "prefer-const": "off",
      "no-useless-escape": "off",
      "no-empty": "off",
      "no-unreachable": "off",
      "no-undef": "off",
      "no-self-assign": "off",
      "no-prototype-builtins": "off",
      "no-cond-assign": "off",
      "no-fallthrough": "off"
    }
  };
  ```

## prettier 规范

- **安装插件**：eslint-config-prettier、prettier、@vue/eslint-config-prettier

  > eslint-config-prettier 解决 eslint 与 prettier 两插件之间规则冲突

- **prettierrc.js 配置**：

  ```js
  module.exports = {
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 2 个空格缩进
    tabWidth: 2,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 不尾随分号
    semi: false,
    // 使用单引号
    singleQuote: true,
    // 多行逗号分割的语法中，最后一行不加逗号
    trailingComma: "none",
    // trailingComma: 'es5',
    // 单个参数的箭头函数不加括号 x => x
    arrowParens: "avoid",
    // 对象大括号内两边是否加空格 { a:0 }
    bracketSpacing: true,
    // endOfLine: 'lf' // 19.    endOfLine: "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
    endOfLine: "auto"
  };
  ```

## commit 规范

- **安装插件**：@commitlint/cli、@commitlint/config-conventional

- **提交类型**：

  - build 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
  - feature：新功能
  - update：更新某功能
  - fixbug：修补某功能的 bug
  - refactor：重构某个功能
  - optimize: 优化构建工具或运行时性能
  - style：仅样式改动
  - docs：仅文档新增/改动
  - chore：构建过程或辅助工具的变动

- **提交规范**：

  ```
  [提交信息]: 关键信息
  ```

- **commitlint.config.js 配置**：

  ```js
  module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      //0为disable，1为warning，2为error
      //always|never
      //第三位该rule的值
      "type-enum": [
        2,
        "always",
        [
          "feat",
          "update",
          "fix",
          "refactor",
          "optimize",
          "style",
          "docs",
          "chore"
        ]
      ],
      "subject-full-stop": [0, "never"],
      "subject-case": [0, "never"]
    }
  };
  ```
