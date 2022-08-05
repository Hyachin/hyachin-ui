<template>
  <label
    class="hy-switch"
    :class="{ 'is-checked': value }"
    @click="handleClick"
  >
    <!-- <input class="hy-switch__input" type="checkbox" :name="name" /> -->
    <span
      class="hy-switch__core"
      :style="[
        {
          background: value ? activeColor : inactiveColor,
          borderColor: value ? activeColor : inactiveColor,
        },
      ]"
    >
      <span class="hy-switch__button"></span>
    </span>
    <input type="hidden" :name="name" />
  </label>
</template>

<script>
export default {
  name: "HySwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    inactiveColor: {
      type: String,
      default: "#dcdfe6",
    },
    activeColor: {
      type: String,
      default: "#409eff",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      // console.log("点击", e.target);
      this.$emit("input", !this.value);
      this.$emit("change", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.hy-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .hy-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .hy-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked {
    .hy-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .hy-switch__button {
        transform: translateX(20px);
      }
    }
  }
}
</style>
