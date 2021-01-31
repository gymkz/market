<template>
  <!-- 项目根视图 -->
  <div class="app-box">
    <Appbar :onLogin="onLogin" :onChange="onChangeTab" />
    <div class="router-box">
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
    const paths = ['/home', '/market', '/target', '/high','/about'];
    function onChangeTab(num: number) {
      console.log(num)
      router.replace(paths[num]);
    }
    function onLogin() {
      // router.push("/login");
      
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
.app-box {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.router-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
