<template>
  <div id="app">
    <hy-form :model="model" label-width="100px">
      <hy-form-item label="用户名">
        <hy-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></hy-input>
      </hy-form-item>
      <hy-form-item label="选择">
        <hy-switch v-model="model.active"></hy-switch>
      </hy-form-item>
    </hy-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      model: {
        username: "zs",
        active: true,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
