<template>
  <div
    class="hy-input"
    :class="{
      'hy-input--suffix': showSuffix,
    }"
  >
    <input
      :class="{
        'is-disabled': disabled,
      }"
      class="hy-input__inner"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
    />
    <span class="hy-input__suffix" v-if="showSuffix">
      <i
        class="hy-input__icon hy-icon-close"
        v-show="clearable && value"
        @click="clear"
      ></i>
      <i
        class="hy-input__icon hy-icon-browse"
        :class="{ 'hy-icon-browse-active': passwordVisible }"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "HyInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  data() {
    return {
      passwordVisible: false,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    handleChange(e) {
      this.$emit("change", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
  },
};
</script>

<style lang="scss">
.hy-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  &__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.hy-input--suffix {
  .hy-input__inner {
    padding-right: 30px;
  }
  .hy-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &.password-icon-active {
        color: blue;
      }
    }
    .hy-icon-browse-active {
      color: blue;
    }
  }
}
</style>
