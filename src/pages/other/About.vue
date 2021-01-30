<template>
  <!-- 首页 -->
  <div class="container">
    <h1>本项目因个人兴趣而开发</h1>
    <h2>如开发进度导致您的耐心不足请见谅^_^！<span style="font-size: 16px; color: coral">如有建议联系我 umxkz@qq.com</span></h2>
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
    <h1 />
    <h3>打赏 * 请作者嗑包瓜子 ^_^</h3>
    <div>
      <img src="static/alpay.jpg" alt="微信支付" />
      <img src="static/wxchat.jpg" alt="支付宝支付" />
    </div>
    <h1 />
    <h1>更多功能正在开发中...！</h1>
    <h1 />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {},
  setup() {
    const wxchat = "";
    const alipay = "";

    return {
      wxchat,
      alipay,
    };
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
h1 {
  line-height: 32px;
}
h2 {
  line-height: 20px;
}
h3 {
  line-height: 18px;
}
img {
  width: 267px;
  height: 267px;
  margin: 0 32px;
  border-radius: 8px;
}
</style>