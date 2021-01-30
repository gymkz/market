<template>
  <!-- 新闻 -->
  <div class="item-box">
    <div class="item-img">图片加载失败</div>
    <div class="item-content">
      <span class="item-title">{{item.name}}</span>
      <p class="item-label">作者： <span class="item-value">{{item.author}}</span></p>
      <p class="item-label">简介： {{item.desc}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "BookItem",
  props: {
    item: Object
  },
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
.item-box {
  width: 537px;
  height: 240px;
  margin: 14px 16px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 4px 4px 8px #00000030;
}

.item-box:active {
  opacity: 0.92;
  transform: scale(0.97, 0.97);
  background-color: #00000010;
}

.item-img {
  width: 186px;
  height: 240px;
  border-radius: 8px;
  background-color: lavender;
}

.item-content {
  flex: 1;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
}

.item-title {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 700;
  color: #232323;
}

.item-label {
  color: #333333;
  font-size: 16px;
  margin: 6px 0;
  /* line-height: 22px; */
  text-overflow: ellipsis;
}
.item-value {
  color: #232323;
  font-weight: 700;
}
</style>
