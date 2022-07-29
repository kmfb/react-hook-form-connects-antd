# react-hook-form-control-antd

[antd 3.x 版本](https://ant-design-3x.gitee.io/components/form-cn/) 中的表单不支持 react hooks 的使用方式并且存在一定的[性能问题](https://github.com/ant-design/ant-design/issues?q=form+%E5%8D%A1%E9%A1%BF)，而 react-hook-form 又在社区广受好评，在实际项目中也能够同 antd 很好的结合使用。但 [antd Form](https://ant-design-3x.gitee.io/components/form-cn/) 组件中的 Form.Item 只适配了 rc-form，即能够根据 rc-form 的 `getFieldDecorator` 中的 `required`、`rules` 属性自动设置 Form.Item 的 `validateStatus`、`help`。所以创建了该组件用于连接 antd 的 Form.Item 和 react-hook-form。

使用该组件前，请先熟悉如何使用 [react-hook-form](https://react-hook-form.com/get-started#Quickstart)。

## 快速上手

### 与react-hook-form-with-antd的区别
1. 构建及文档测试工具修改为社区常用的rollup与storybook，减少了组件依赖，提高了配置易读、易用性，增加了组件测试功能。
2. 增加了ControlAntdForm等组件，其对antd及react-hook-form进行了进一步封装，提高了易用性及封装性，增加代码复用性。
3. 增加了github actions的CI/CD功能，发版流程更加便利，无缝。
4. 使用pnpm作为包依赖管理工具，开发流程更加科学。

### 安装

```bash
yarn add @kmfb/react-hook-form-control-antd
```

### 使用

```jsx | pure
参考文档
```

## 文档

https://kmfb.github.io/react-hook-form-control-antd/


