<template>
  <!-- 书籍 -->
  <div class="container">
    <Appmenu :onChange="onChangeMenu" />
    <div class="book-box">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { consts } from "@/modules/consts/index";
import Appmenu from "@/components/Appmenu.vue";
import Navigate from "@/utils/navigate";

export default defineComponent({
  name: "Books",
  components: {
    Appmenu,
  },
  setup() {
    const bookList = consts.books;
    const router = Navigate.get();
    const paths = ['/book', '/video', '/blog', '/plaza','/'];

    function onChangeMenu(tabInx: number, index: number) {
      console.log(tabInx, index)
      router.replace(`/high${paths[tabInx]}`)
    }

    return {
      bookList,
      onChangeMenu
    };
  },
});
</script>
<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* overflow: scroll; */
  /* background-color: antiquewhite; */
}
.book-box {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>