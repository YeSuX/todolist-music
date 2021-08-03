<template>
  <div class="search-box">
    <el-input
      placeholder="搜索"
      prefix-icon="el-icon-search"
      v-model="searchContent"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  data() {
    return {
      searchContent: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  margin: 0px 10px 0px 10px;
}
</style>