<template>
  <!-- 404 -->
  <div class="container">404</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notfound",
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  background-color: white;
}
</style>