<p>

<div>
<p align="center"><img src="https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png" ></p>
<p align="center"><img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="width: 200px" ></p>
</div>

<p align="center" style="margin-top: 20px">
<a href="https://www.npmjs.com/package/@kmfb/react-hook-form-control-antd"><img src="https://img.shields.io/npm/v/@kmfb/react-hook-form-control-antd.svg"></a>
<img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
</p>

</p>

---

# react-hook-form-control-antd

## 还在被 antdv3 表单 api 折磨吗？

- 还记得被 getFieldDecorator, Form.create 支配的恐惧吗？
- 还记得被各种表单联动，动态增添表单项，繁琐的逻辑支配的恐惧吗？
- 还记得不能使用 react 最新特性 hooks 的烦恼吗？

你是否无数次想过把整个表单 api 干掉，像重生动漫一样，换一种更优雅的方式生活？

我想过，所以我找到了一个库[react-hook-form-with-antd](https://github.com/linewell-zwfed/react-hook-form-with-antd)，正好干了这档子事, 将优雅的表单库[react-hook-form](https://react-hook-form.com/api)与 antd 的~~优雅~~的 ui 结合起来。

把 antd 丑陋的表单 api 摈弃掉，使用 hooks 的方法来写表单业务组件，从此世界就亮了起来（从 antdv3 转到 v4 的人应该懂我在说什么）。

后面我不满足这个库的一些问题，自己 fork 下了，~~完善~~了这个库，~~添加~~了一些新特性。希望对于 antd 表单 api 被折磨的人有所帮助。

## 项目说明

[antd 3.x 版本](https://ant-design-3x.gitee.io/components/form-cn/) 中的表单不支持 react hooks 的使用方式并且存在一定的[性能问题](https://github.com/ant-design/ant-design/issues?q=form+%E5%8D%A1%E9%A1%BF)，而 react-hook-form 又在社区广受好评，在实际项目中也能够同 antd 很好的结合使用。但 [antd Form](https://ant-design-3x.gitee.io/components/form-cn/) 组件中的 Form.Item 只适配了 rc-form，即能够根据 rc-form 的 `getFieldDecorator` 中的 `required`、`rules` 属性自动设置 Form.Item 的 `validateStatus`、`help`。所以创建了该组件用于连接 antd 的 Form.Item 和 react-hook-form。

使用该组件前，请先熟悉如何使用 [react-hook-form](https://react-hook-form.com/get-started#Quickstart)。

## 快速上手

### 与 react-hook-form-with-antd 的区别

1. 构建及文档测试工具修改为社区常用的 rollup 与 storybook，减少了组件依赖，提高了配置易读、易用性，增加了组件测试功能。
2. 增加了 [ControlAntdForm 等](https://kmfb.github.io/react-hook-form-control-antd/)组件，其对 antd 及 react-hook-form 进行了进一步封装，提高了易用性及封装性，增加代码复用性。
3. 增加了 github actions 的 CI/CD 功能，发版流程更加便利，无缝。

### 安装

```bash
npm install react-hook-form
npm install antd
npm install @kmfb/react-hook-form-control-antd
```

### 示例

1. 基本使用

```tsx | pure
// or 'antd/dist/antd.less'
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon, Input, Radio, Switch, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import { Form, FormItem } from '@kmfb/react-hook-form-control-antd';

const Demo = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const handleOnClick = () => {
    const successCB = () => {
      (values: any) => {
        alert(JSON.stringify(values));
      };
    };
    handleSubmit(successCB)();
  };
  return (
    <div>
      <Form>
        <FormItem
          label={
            <span>
              组件名称&nbsp;
              <Tooltip title="代理的表单组件 placeholder 设为空字符串可以不显示 placeholder">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
          name="componentName"
          control={control}
          required
        >
          <Input placeholder="" />
        </FormItem>
        <FormItem
          label="是否启用"
          name="enabled"
          control={control}
          valuePropName="checked"
        >
          <Switch />
        </FormItem>
        <FormItem
          label="组件类型"
          name="componentType"
          control={control}
          required
        >
          <Radio.Group
            options={[
              { label: 'restful', value: 'restful' },
              { label: 'webservice', value: 'webservice' },
              { label: '页面', value: '页面' },
            ]}
          />
        </FormItem>
      </Form>
      <Button onClick={handleOnClick} type="primary">
        提交
      </Button>
    </div>
  );
};

export default Demo;
```

2. ControlAntdForm 使用

```tsx | pure
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'antd';
import {
  ControlAntdForm,
  IControlAntdFormItems,
} from '@kmfb/react-hook-form-control-antd';

() => {
  const items: IControlAntdFormItems = [
    {
      label: 'Name',
      name: 'name',
      rules: {
        maxLength: { value: 10, message: '模板名称字符长度不能超过10个' },
        required: { value: true, message: '请输入模板名称' },
      },
      children: (
        <Input
          placeholder="请输入模板名称"
          onBlur={(e) => {
            console.log('onBlur', e.target.value);
          }}
        />
      ),
    },
    {
      label: 'age',
      name: 'age',
      children: (item) => {
        console.log(item, 'im item');
        return <Input />;
      },
    },
    {
      label: 'address',
      name: 'address',
    },
  ];

  const { control, handleSubmit } = useForm();

  const handleOnClick = () => {
    const successCB = () => {
      (values: any) => {
        alert(JSON.stringify(values));
      };
    };
    handleSubmit(successCB)();
  };

  return (
    <div>
      <ControlAntdForm control={control} items={items} />
      <Button onClick={handleOnClick} type="primary">
        提交
      </Button>
    </div>
  );
};
```

## 文档

https://kmfb.github.io/react-hook-form-control-antd/

## 鸣谢

[react-hook-form-with-antd](https://github.com/linewell-zwfed/react-hook-form-with-antd)
