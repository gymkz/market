<template>
  <!-- 菜单拦 -->
  <div class="appmenu">
    <ul class="ul-box">
      <li class="li-box" v-for="(items, index) in list" v-bind:key="index">
        <span class="ul-span" @click="onChangeTab(index)">{{
          items.label
        }}</span>
        <ul class="ul-box" v-if="items.select">
          <li
            class="li-box"
            v-for="(item, inde) in items.value"
            v-bind:key="item"
          >
            <span :class="'li-span' + (menuText === item ? ' span2':'')" @click="onChangeItem(item, inde, index)">{{
              item
            }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div style="width: 200px; min-width: 200px" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Appmenu",
  props: {
    onChange: Function,
  },
  setup(props) {
    const list = ref([
      { label: "书籍", select: true, value: ["金融学"] },
      {
        label: "视频",
        select: false,
        value: [
          "LoneCapital",
          "投资学-中央财经大学",
          "货币金融学-上海财经大学",
        ],
      },
      { label: "专栏", select: false, value: ["期货", "基金", "加密货币"] },
      { label: "广场", select: false, value: ["观点"] },
    ]);
    let menuIndex = 0;
    const menuText = ref("金融学");

    // 选中的菜单
    function onChangeTab(index: number): void {
      const item = list.value[index];
      list.value[index].select = !item.select;
      menuIndex = index;
    }

    // 选中的某一项
    function onChangeItem(e: string, index: number, menuId: number): void {
      menuIndex = menuId;
      menuText.value = e;
      if (props.onChange) {
        props.onChange(menuIndex, index);
      }
    }

    return {
      list,
      menuText,
      onChangeTab,
      onChangeItem,
    };
  },
});
</script>
<style scoped>
.appmenu {
  z-index: 9;
  width: 200px;
  min-height: 88vh;
  /* margin-top: 16px; */
  /* margin-right: 12px; */
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 4px 4px 8px #00000020;
  background-color: white;
  overflow: scroll;
  position: fixed;
  top: 56px;
}
.ul-box {
  list-style: none;
  padding: 0;
  margin: 0;
}
.li-box {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  list-style: none;
}
.ul-span {
  /* width: 100%; */
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0 8px 16px;
}
.ul-span:hover {
  opacity: 0.87;
  background-color: #00000010;
}
.ul-span:active {
  top: 1px;
  opacity: 0.9;
  position: relative;
  background-color: #00000010;
}
.li-span {
  font-size: 16px;
  padding: 8px 16px 8px 26px;
  max-height: 18px;
  overflow: hidden;
}
.span2 {
  background-color: #00000020;
}
.li-span:hover {
  opacity: 0.87;
  background-color: #00000020;
}
.li-span:active {
  top: 1px;
  opacity: 0.9;
  position: relative;
  background-color: #00000010;
}
</style>