<template>
  <div id="app">
    <hy-switch v-model="active" :name="username"></hy-switch>
    <hy-switch
      v-model="active"
      inactiveColor="green"
      activeColor="red"
      @change="handleChange"
    ></hy-switch>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: false,
      username: "zs",
    };
  },
  methods: {
    handleChange(val) {
      console.log("do something when change", val);
    },
  },
};
</script>

<style lang="scss"></style>
