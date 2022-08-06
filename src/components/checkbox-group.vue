<template>
  <div class="hy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HyCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: [],
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
