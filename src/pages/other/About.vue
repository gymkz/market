<template>
  <!-- 首页 -->
  <div class="container">
    <h1>本项目纯粹因个人兴趣而开发</h1>
    <h2>如开发进度导致您的耐心不足请见谅！</h2>
    <div class="todo-box">
      <h1>TODO List</h1>
      <ul>
        <h3>大盘指数</h3>
        <h3>大盘宽度</h3>
        <h3>大盘趋势评分</h3>
        <h3>行业排行榜</h3>
        <h3>行业趋势评分</h3>
        <h3>经济指数</h3>
        <h1 style="line-height: 14px">.</h1>
        <h1 style="line-height: 14px">.</h1>
        <h1 style="line-height: 14px">.</h1>
        <h3>等</h3>
      </ul>
    </div>
    <h1>精彩内容即将开启！</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "About",
  components: {},
  setup() {
    onMounted(() => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
      }, 10000);
    });

    return {};
  },
});
</script>
<style scoped>
.container {
  height: 100%;
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todo-box {
  width: 100%;
  text-indent: 24px;
}
h1{
  line-height: 32px;
}
h2 {
  line-height: 20px;
}
h3 {
  line-height: 18px;
}
</style>