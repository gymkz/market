<template>
  <!-- 书籍 -->
  <div class="container">
    <div class="book-list">
        <BookItem  v-for="book in bookList" :key="book" :item="book"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import {consts} from '@/modules/consts/index';
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
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow: scroll; */
  /* background-color: antiquewhite; */
}
.book-list {
  display: grid;
  margin: 12px;
  /* grid-column-gap: 20px; */
  /* grid-row-gap: 20px; */
  /* 参数repeat(n，x)表示 重复x宽度n列 */
  grid-template-columns: repeat(2, 567px);
}
</style>