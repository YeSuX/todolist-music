<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <searchBox />
      <menuBox />
    </div>
    <div class="sidebar-bottom">
      <listBox />
    </div>
  </div>
</template>

<script>
import searchBox from "@/components/SearchBox";
import menuBox from "@/components/Menu";
import listBox from "@/components/ListBox";
export default {
  name: "sidebar",
  components: {
    searchBox,
    menuBox,
    listBox,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  background-color: cadetblue;
  border-radius: 10px 0px 0px 10px;
  .sidebar-top {
    margin-top: 54px;
    margin-bottom: 20px;
  }
  .sidebar-bottom {
    background-color: white;
    opacity: 0.5;
    height: 336px;
    border-radius: 0 0 0 10px;
  }
}
</style>