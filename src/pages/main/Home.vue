<template>
  <!-- 首页 -->
  <div class="container">
    <div class="backdrop" :style="backdrop" />
    <div class="backdrop-cover h1co">
      <h1>昨夜西风凋碧树，独上高楼，望尽天涯路！</h1>
      <h1>衣带渐宽终不悔，为伊消得人憔悴！</h1>
      <h1>蓦然回首那人却在灯火栏杆处！</h1>
    </div>
    <div class="content flex">
      <h1 class="trailer">小站刚刚开张，请多多关照！</h1>
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
    // const share = 'https://cn.tradingview.com/gopro/?share_your_love=gymabc'
    const backdrop = ref(
      "background-image: url('static/img/banner1.jpg')"
    );

    function palyBackdrop(): void {
      bgIndex += 1;
      bgIndex = bgIndex >= bgList.length ? 0 : bgIndex;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        backdrop.value = `background-image: url('${bgList[bgIndex]}')`;
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00000020;
}
.h1co {
  color: white;
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
  /* background-image: url(../../assets/img/banner3.jpg); */
}
</style>