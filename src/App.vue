<template>
  <div id="app">
    <hy-checkbox v-model="active">是否选中</hy-checkbox>
    <hy-checkbox-group v-model="fruits">
      <hy-checkbox label="apple"></hy-checkbox>
      <hy-checkbox label="banana"></hy-checkbox>
      <hy-checkbox label="peach"></hy-checkbox>
    </hy-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: true,
      fruits: ["apple"],
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
