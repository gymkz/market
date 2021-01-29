<template>
  <!-- 首页 -->
  <div class="container">
    <div id="tradingview_431ac" />
    <div id="trading_58b5d" />
    
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { kLineView, mediumWidget } from "@/lib/trading/index";

export default defineComponent({
  name: "Market",
  components: {},
  setup() {

    function createView(): void {
      kLineView();
      mediumWidget();
    }

    onMounted(() => {
      createView();
    });

    return {
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
</style>