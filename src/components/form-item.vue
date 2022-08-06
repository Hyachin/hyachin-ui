<template>
  <div class="hy-form-item">
    <label :style="{ width: this.Form.labelWidth }" class="hy-form-item__label">
      {{ label }}
    </label>
    <div class="hy-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HyFormItem",
  props: {
    label: String,
  },
  inject: ["Form"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.hy-form-item {
  margin-bottom: 25px;
  &__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  &__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
