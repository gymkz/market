<template>
  <!-- 首页 -->
  <div class="container">
    <h3>常用货币汇率一览表</h3>
    <div style="position: relative">
      <div id="trading_hui1" />
      <div class="cover" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { waihuiWidget } from "@/lib/trading/index";

export default defineComponent({
  name: "Target",
  components: {},
  setup() {
    function createView() {
      // currencyView();
      waihuiWidget();
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
  /* height: 100%; */
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
}
#trading_hui1 {
  width: 100%;
  height: 500px;
  position: relative;
}
</style>