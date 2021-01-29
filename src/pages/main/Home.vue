<template>
  <!-- 首页 -->
  <div class="container">
    <div class="backdrop" :style="backdrop" />
    <div class="backdrop-cover"></div>
    <div class="content flex">
      <h1 class="trailer">精彩刚刚开始，敬请期待！</h1>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { consts } from "@/modules/consts";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    let bgIndex = 0;
    const bgList = consts.backdrops;
    const backdrop = ref(
      "background-image: url(http://echars.com/banner/banner3.jpg)"
    );

    function palyBackdrop(): void {
      bgIndex += 1;
      bgIndex = bgIndex >= bgList.length ? 0 : bgIndex;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        backdrop.value = `background-image: url(${bgList[bgIndex]})`;
        palyBackdrop();
      }, 60000);
    }

    onMounted(() => {
      palyBackdrop();
    });

    return {
      backdrop,
    };
  },
});
</script>
<style scoped>
.container {
  height: 100%;
  overflow: scroll;
  position: relative;
}
.backdrop-cover {
  z-index: 1;
  min-height: 100vh;
  background-color: #00000010;
}
.flex {
  display: flex;
  flex-direction: column;
}
.content {
  padding: 16px;
  z-index: 1;
}
.trailer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.backdrop {
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  background-size: cover;
  background-image: url(http://echars.com/banner/banner3.jpg);
}
</style>