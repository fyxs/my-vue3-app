# my-vue3-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 安装 Eslint 插件

vscode 安装 Eslint 插件，在 .vscode/settings.json 中配置：

```bash
{
    "editor.codeActionsOnSave": {
        "source.fixAll": false,
        // 保存代码时，自动执行lint命令来修复代码的错误
        "source.fixAll.eslint": true
    }
}
```

## 安装 Prettier - Code formatter 插件

vscode 安装 Prettier - Code formatter 插件，在 .vscode/settings.json 中配置：

```bash
{
    // 保存的时候自动格式化
    "editor.formatOnSave": true,
    // 默认格式化工具选择prettier
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Prettier 一些规则

// 一行的字符数，如果超过会进行换行，默认为 80  
printWidth: 160,  
// 一个 tab 代表几个空格数  
tabWidth: 2,  
// 是否使用 tab 进行缩进，默认为 false，表示用空格进行缩进  
useTabs: false,  
// 字符串是否使用单引号，默认为 false，使用双引号  
singleQuote: false,  
// 行位是否使用分号，默认为 true  
semi: false,  
// 是否使用尾逗号，有三个可选值"<none|es5|all>"  
trailingComma: "none",  
// 对象大括号直接是否有空格，默认为 true，效果：{ foo: bar }  
bracketSpacing: true
