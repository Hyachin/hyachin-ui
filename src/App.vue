<template>
  <div id="app">
    <hy-button type="primary" @click="visible = true">显示</hy-button>
    <hy-dialog :visible.sync="visible" title="文字标题">
      <!-- 以下为slot，和title属性二选一 -->
      <!-- <template v-slot:header>
        <h3>自定义标题</h3>
      </template> -->
      内容
      <template v-slot:footer>
        <hy-button @click="visible = false">取消</hy-button>
        <hy-button type="primary" @click="visible = false">确定</hy-button>
      </template>
    </hy-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  .hy-button {
    margin: 10px;
  }
}
</style>
