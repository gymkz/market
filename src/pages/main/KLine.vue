<template>
  <!-- k线图 -->
  <div class="container">
    <div class="my-list"></div>
    <div style="flex: 1">
      <div id="trading_kline3" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { kLineView } from "@/lib/trading/index";

export default defineComponent({
  name: "KLine",
  components: {},
  setup() {
    function createView(): void {
      kLineView("trading_kline3");
    }

    onMounted(() => {
      createView();
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
.my-list {
  width: 240px;
}
#trading_kline3 {
  width: 100%;
  height: 100%;
}
</style>