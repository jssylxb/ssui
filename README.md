# ssui
## 融创服务数科vue3组件库基础工程
### 关键环境依赖说明
- nodejs 16+
- typescript 4+
- pnpm 6+
- vscode建议安装volar插件
### 涉及技术
- vue3
- typescirpt
- vite2
- elementPlus(可拓展其他组件库?)
- pnpm

### 开发说明

1. pnpm i 安装依赖
2. pnpm dev 启动开发环境, 通过本地3000端口访问静态页面
3. pnpm gen 新增组件相关模板
4. pnpm build:doc 打包静态页面
5. pnpm build:lib 打包组件库
6. 等npm私库搭建好后, npm publish发布到私库上
### 项目引入说明(*demo版本已上传npm, 考虑到隐私问题未增加业务组件*)

1. cd 你的vue3项目
2. npm i @js77388/ssui
3. 在main.js中增加如下代码
```
  import SSUI from '@js77388/ssui';
  ...
  ...
  app.use(SSUI);
```
4. 在目标vue sfc中, 可直接引入, 如
```
  <template>
    <SSButton>我是一个按钮</SSButton>
  </template>
```