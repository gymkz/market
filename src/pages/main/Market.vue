<template>
  <!-- 首页 -->
  <div class="container">
    <div id="trading_market1" />
    <div id="trading_market3" style="margin: 0 2%" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { baojiao, marketData, clearChild } from "@/lib/trading/index";

export default defineComponent({
  name: "Market",
  components: {},
  setup() {
    function createView(): void {
      baojiao("trading_market1");
      marketData("trading_market3");
    }

    onMounted(() => {
      createView();
    });

    onUnmounted(() => {
      clearChild("trading_market1");
      clearChild("trading_market3");
    });

    return {};
  },
});
</script>
<style scoped>
.container {
  height: 100%;
  /* overflow: scroll; */
  /* position: relative; */
  display: flex;
  flex-direction: column;
}
#trading_market1 {
  width: 100%;
  height: 100px;
}
#trading_market3 {
  width: 96%;
  height: 98%;
}
</style>