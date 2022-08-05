# Hyachin-UI

## Teach you how to code by youself（notes updating synchronously...）

https://www.yuque.com/yichengshanlu-xeghf/czce40/qrqxke

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Use Hyachin-UI

### Button

#### Basic usage

```html
<div class="row">
  <!-- type使用 -->
  <hy-button @click="fn">按钮</hy-button>
  <hy-button type="primary">按钮</hy-button>
  <hy-button type="success">按钮</hy-button>
  <hy-button type="info">按钮</hy-button>
  <hy-button type="warning">按钮</hy-button>
  <hy-button type="danger">按钮</hy-button>
</div>
<!-- plain使用 -->
<div class="row">
  <hy-button>按钮</hy-button>
  <hy-button plain type="primary">按钮</hy-button>
</div>
<!-- round使用 -->
<div class="row">
  <hy-button round>按钮</hy-button>
</div>
<!-- icon+circle使用 -->
<div class="row">
  <hy-button round icon="hy-icon-close" circle type="primary"></hy-button>
</div>
<!-- disabled使用 -->
<div class="row">
  <hy-button
    disabled
    round
    icon="hy-icon-close"
    circle
    type="primary"
  ></hy-button>
</div>
```

#### Attributes

| 参数     | 说明         | 类型    | 可选值                              | 默认值 |
| :------- | :----------- | :------ | :---------------------------------- | :----- |
| type     | 类型         | string  | primary/success/warning/danger/info | —      |
| plain    | 是否朴素按钮 | boolean | —                                   | false  |
| round    | 是否圆角按钮 | boolean | —                                   | false  |
| circle   | 是否圆形按钮 | boolean | —                                   | false  |
| disabled | 是否禁用状态 | boolean | —                                   | false  |
| icon     | 图标类名     | string  | —                                   | —      |

#### Events

| 事件  | 描述     |
| :---- | :------- |
| click | 点击事件 |

### Dialog

#### basic use

```html
<template>
  <div id="app">
    <hy-button type="primary" @click="visible = true">显示</hy-button>
    <hy-dialog :visible.sync="visible" title="文字标题">
      <!-- 以下为slot，和title属性二选一 -->
      <!-- <template v-slot:header>
        <h3>自定义标题</h3>
      </template> -->
      内容
      <template v-slot:footer>
        <hy-button @click="visible = false">取消</hy-button>
        <hy-button type="primary" @click="visible = false">确定</hy-button>
      </template>
    </hy-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
  };
</script>
```

#### Attributes

| 参数    | 说明                                            | 类型    | 可选值 | 默认值 |
| :------ | :---------------------------------------------- | :------ | :----- | :----- |
| visible | 是否显示 Dialog，支持 .sync 修饰符              | boolean | —      | false  |
| title   | Dialog 的标题，也可通过具名 slot （见下表）传入 | string  | —      | —      |
| width   | Dialog 的宽度                                   | string  | —      | 50%    |
| top     | Dialog CSS 中的 margin-top 值                   | string  | —      | 15vh   |

#### Slot

| name   | 说明                    |
| :----- | :---------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Input

#### basic use

```html
<template>
  <div id="app">
    <hy-input
      placeholder="请输入用户名"
      type="password"
      name="username"
      disabled
      clearable
      show-password
    ></hy-input>
    <hy-input
      v-model="username"
      type="password"
      showPassword
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
    ></hy-input>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        username: "zs",
      };
    },
    methods: {
      handleBlur() {
        console.log("do something when blur");
      },
      handleChange() {
        console.log("do something when change");
      },
      handleFocus() {
        console.log("do something when focus");
      },
    },
  };
</script>
<style lang="scss">
  #app {
    .hy-input {
      width: 200px;
    }
  }
</style>
```

#### Attributes

| 参数          | 说明                 | 类型    | 可选值                                                                                                                     | 默认值 |
| :------------ | :------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------- | :----- |
| placeholder   | 输入框占位文本       | string  | —                                                                                                                          | —      |
| type          | 类型                 | string  | text 和[其他原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text   |
| disabled      | 禁用                 | boolean | —                                                                                                                          | false  |
| clearable     | 是否可清空           | boolean | —                                                                                                                          | false  |
| show-password | 是否显示切换密码图标 | boolean | —                                                                                                                          | false  |
| name          | 原生属性             | string  | —                                                                                                                          | —      |

#### Events

| 事件名称 | 说明                                   | 回调参数       |
| :------- | :------------------------------------- | :------------- |
| blur     | 在 Input 失去焦点时触发                | (event: Event) |
| focus    | 在 Input 获得焦点时触发                | (event: Event) |
| change   | 仅在输入框失去焦点或用户按下回车时触发 | (event: Event) |
