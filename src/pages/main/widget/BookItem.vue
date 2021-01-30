<template>
  <!-- 新闻 -->
  <div class="container button2">
    <div class="item-img">图片加载失败</div>
    <div class="item-content">
      <h3 class="item-title">微观经济学·宏观经济学·经济学原理</h3>
      <p class="item-label">作者： <span class="item-value">高斯·曼昆</span></p>
      <p class="item-label">简介： 一本好书是经过几代人的时间检验</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "BookItem",
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
  width: 537px;
  height: 240px;
  margin: 14px 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 4px 4px 8px #00000030;
}

.item-img {
  width: 186px;
  height: 240px;
  border-radius: 8px;
  background-color: lavender;
}

.item-content {
  padding: 12px 14px;
  overflow: hidden;
}

.item-title {
  margin: 0 0 12px 0;
  /* font-size: 16px; */
}

.item-label {
  color: #333333;
  font-size: 16px;
  margin: 6px 0;
  /* line-height: 22px; */
  text-overflow: ellipsis;
}
.item-value {
  color: #121212;
  font-weight: 700;
}
</style>
