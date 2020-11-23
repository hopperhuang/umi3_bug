# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 项目基本说明

### 基础框架
> 项目使用umi@3座位基础框架,文档地址可以从[这里](https://umijs.org/zh-CN/docs/getting-started)访问。

### 国际化
> 项目已经配置好相关国际化插件，文档地址可以从[这里](https://umijs.org/zh-CN/plugins/plugin-locale)访问。

### 组件库
> 项目引入antd作为基本的ui组件库,文档地址可以从[这里](https://umijs.org/zh-CN/plugins/plugin-antd)访问

### Layout
> 项目引入antd-pro-layout作为layout，便于快速开发，具体文档可以在[这里](https://umijs.org/zh-CN/plugins/plugin-layout)获得。

### 权限管理
> 项目引入了umi提供的权限管理插件来管理侧边栏和路由的准入和可见权利，具体文档可以在[这里](https://umijs.org/zh-CN/plugins/plugin-access)获得

### 数据流处理
> 项目引入了useModel插件，便于页面间简单的数据共享,具体文档可以在[这里](https://umijs.org/zh-CN/plugins/plugin-model)获得。
> 为了应对更复杂的数据数据流处理，项目还引入了dva，但是很多时候useModel + ReactHooks的组合已经可以处理大部分的业务场景，所以在使用dva处理你的数据流前请谨慎考虑,具体文档可以在[这里](https://umijs.org/zh-CN/plugins/plugin-dva)

### 其他

如果在编写项目的过程中，引入模块时，vscode提示模块“"../../node_modules/umi/types"”没有导出的成员,使用vscode 快捷键ctrl+shift+p ，重启ts服务器可以解决相关问题（不解决也没问题，并不影响使用，只是影响视觉感受）。
