<template>
  <!-- 首页 -->
  <div class="container">
    <div id="trading_58b" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Target",
  components: {},
  setup() {

    onMounted(() => {
      const timer = setTimeout(() => {
        clearTimeout(timer)
      }, 10000);
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