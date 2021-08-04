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
  width: 25rem;
  height: 100%;
  position: relative;
  // background-color: var(--greyLight-2);
  border-radius: 3rem 0 0 3rem;
  .sidebar-top {
    padding-top: 2rem;
    max-height: 20rem;
  }
  .sidebar-bottom {
    max-height: 18rem;
    overflow: auto;
    margin-top: 2rem;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>