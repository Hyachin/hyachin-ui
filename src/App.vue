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
