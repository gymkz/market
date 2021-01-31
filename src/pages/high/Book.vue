<template>
  <!-- 书籍 -->
  <div class="book-box">
      <BookItem v-for="book in bookList" :key="book" :item="book" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { consts } from "@/modules/consts/index";
import BookItem from "./widget/BookItem.vue";

export default defineComponent({
  name: "Books",
  components: {
    BookItem,
  },
  setup() {
    const bookList = consts.books;

    onMounted(() => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
      }, 10000);
    });

    return {
      bookList,
    };
  },
});
</script>
<style scoped>
.book-box {
  height: 100%;
  min-height: 720px;
  overflow: scroll;
  display: grid;
  /* grid-column-gap: 20px; */
  /* grid-row-gap: 20px; */
  /* 参数repeat(n，x)表示 重复x宽度n列 */
  grid-template-columns: repeat(2, 560px);
}
</style>