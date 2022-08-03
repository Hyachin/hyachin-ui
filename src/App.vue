<template>
  <div id="app">
    <div class="row">
      <hy-button @click="fn">按钮</hy-button>
      <hy-button type="primary">登录</hy-button>
      <hy-button type="success">删除</hy-button>
      <hy-button type="info">按钮</hy-button>
      <hy-button type="warning">按钮</hy-button>
      <hy-button type="danger">按钮</hy-button>
    </div>
    <div class="row">
      <hy-button>按钮</hy-button>
      <hy-button plain type="primary">登录</hy-button>
      <hy-button plain type="success">删除</hy-button>
      <hy-button plain type="info">按钮</hy-button>
      <hy-button plain type="warning">按钮</hy-button>
      <hy-button plain type="danger">按钮</hy-button>
    </div>
    <div class="row">
      <hy-button round>按钮</hy-button>
      <hy-button round icon="hy-icon-zhinanzhen" circle type="primary"
        >登录</hy-button
      >
      <hy-button round icon="hy-icon-zhinanzhen" circle type="success"
        >删除</hy-button
      >
      <hy-button round icon="hy-icon-zhinanzhen" circle type="info"
        >按钮</hy-button
      >
      <hy-button round icon="hy-icon-zhinanzhen" circle type="warning"
        >按钮</hy-button
      >
      <hy-button round icon="hy-icon-zhinanzhen" circle type="danger"
        >按钮</hy-button
      >
    </div>
    <div class="row">
      <hy-button
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="primary"
      ></hy-button>
      <hy-button
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="success"
      ></hy-button>
      <hy-button round icon="hy-icon-zhinanzhen" circle type="info"></hy-button>
      <hy-button
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="warning"
      ></hy-button>
      <hy-button
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="danger"
      ></hy-button>
    </div>
    <div class="row">
      <hy-button
        disabled
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="primary"
      ></hy-button>
      <hy-button
        disabled
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="success"
      ></hy-button>
      <hy-button round icon="hy-icon-zhinanzhen" circle type="info"></hy-button>
      <hy-button
        disabled
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="warning"
      ></hy-button>
      <hy-button
        disabled
        round
        icon="hy-icon-zhinanzhen"
        circle
        type="danger"
      ></hy-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    fn() {
      console.log("123");
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  .hy-button {
    margin: 10px;
  }
}
</style>
