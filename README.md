# hyachin-ui

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Use Hyachin-UI

#### Button

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

##### Attributes

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
