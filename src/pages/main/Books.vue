<template>
  <!-- 书籍 -->
  <div class="container">
    <div class="book-list">
        <BookItem  v-for="book in bookList" :key="book" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import BookItem from "./widget/BookItem.vue";

export default defineComponent({
  name: "Books",
  components: {
    BookItem,
  },
  setup() {
    const bookList = ["0", "1", "2", "3", "4", '5','6','7','8','9'];

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
.book-box {
  width: 527px;
  padding: 0 12px;
  background-color: antiquewhite;
}
</style>