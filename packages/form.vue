<template>
  <div class="hy-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HyForm",
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
  },
  provide() {
    return {
      Form: this,
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
