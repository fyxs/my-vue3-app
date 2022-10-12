# my-vue3-app

基于vue3脚手架搭建，完善和扩充了相关生态插件及工具库等，规范了项目整体结构。建议使用 yarn 安装modules

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
