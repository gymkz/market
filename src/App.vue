<template>
  <!-- 项目根视图 -->
  <div class="container">
    <Appbar :onLogin="onLogin" :onChange="onChangeTab" />
    <div style="flex: 1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import Appbar from "./components/Appbar.vue";
import Navigate from "./utils/navigate";

export default defineComponent({
  name: "App",
  components: {
    Appbar,
  },
  setup() {
    const router = Navigate.get();
    const paths = ['/home', '/market', '/target', '/news','/about'];
    function onChangeTab(num: number) {
      console.log(num)
      router.replace(paths[num]);
    }
    function onLogin() {
      router.push("/login");
    }
    onMounted(() => {
      console.log("---");
      router.replace('/home');
    });
    onUnmounted(() => {
      console.log("---");
    });
    return {
      onChangeTab,
      onLogin,
    };
  },
});
</script>
<style>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
