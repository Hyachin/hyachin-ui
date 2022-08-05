<template>
  <div id="app">
    <hy-radio label="1" v-model="gender">男</hy-radio>
    <hy-radio label="0" v-model="gender">女</hy-radio>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      gender: "1",
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
