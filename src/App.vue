<template>
  <div id="app">
    <hy-button type="primary" @click="visible = true">显示</hy-button>
    <hy-dialog :visible.sync="visible">
      内容
      <template v-slot:footer>
        <hy-button @click="visible = false">取消</hy-button>
        <hy-button type="primary" @click="visible = false">确定</hy-button>
      </template>
    </hy-dialog>
    <!-- <hy-dialog width="30%" top="100px">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </hy-dialog> -->
    <!-- <hy-dialog>
      <template v-slot:title>
        <h3>自定义标题</h3>
      </template>
    </hy-dialog> -->
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
  methods: {
    // close(value) {
    //   console.log("123");
    //   this.visible = value;
    // },
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
