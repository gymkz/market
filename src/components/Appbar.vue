<template>
  <!-- 导航栏 -->
  <div>
    <div class="container row">
      <div class="logo">顾豫明</div>
      <div class="flex" />
      <div
        :class="'item' + (index === tabIndex ? ' select' : '')"
        v-for="(e, index) in tabList"
        :key="e"
        @click="onClick(index)"
      >
        {{ e }}
      </div>
      <div class="user-icon" @click="onLogin">
        <!-- <img class="user-icon" /> -->
      </div>
    </div>
    <div class="barsize" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Appbar",
  props: {
    onLogin: Function,
    onChange: Function,
  },
  setup(props) {
    const tabIndex = ref(0);
    const tabList = ["首页", "市场", "指标", "进阶", "关于"];

    function onClick(num: number) {
      tabIndex.value = num;
      if(props.onChange) {
        props.onChange(num);
      }
    }
    return {
      tabIndex,
      tabList,
      onClick,
    };
  },
});
</script>
<style scoped>
/* 样式 */
.container {
  top: 0;
  z-index: 1;
  min-width: 720px;
  width: 100vw;
  height: 56px;
  color: white;
  position: fixed;
  background-color: #131313;
  /* 参数1右边阴影宽度参数/2下边参数/3模糊半径 */
  box-shadow: 0 5px 6px #00000080;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.barsize {
  height: 56px;
}

.flex {
  flex: 1;
}

.logo {
  /* width: 32px; */
  /* height: 32px; */
  margin-left: 16px;
  margin-right: 24px;
  /* border-radius: 50%; */
  /* background-color: coral; */
}

.user-icon {
  width: 32px;
  height: 32px;
  margin-right: 20px;
  margin-left: 40px;
  border-radius: 50%;
  cursor: pointer;
  /* background-color: coral; */
  background-size: cover;
  background-image: url(../assets/user_ic.jpg);
}

.item {
  padding: 8px;
  margin: 0 8px;
  cursor: pointer;
  color: #F3F3F3;
  font-size: 16px;
  /* background-color: #FFFFFF10; */

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.select {
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-bottom: solid 2px white;
}

.item:hover {
  opacity: 0.8;
  /* transform: scale(0.97, 0.97); */
  /* background-color: #FAFAFA; */
}
.item:active {
  top: 1px;
  opacity: 0.9;
  position: relative;
  /* background-color: #F8F8F8; */
}
</style>