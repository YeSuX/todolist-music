<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div class="search-box">
        <el-input
          placeholder="搜索"
          prefix-icon="el-icon-search"
          v-model="searchContent"
        >
        </el-input>
      </div>
      <div class="menu">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col class="today box" :span="12">1</el-col>
          <el-col class="pictrue box" :span="12">2</el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center"> 
          <el-col class="all box" :span="12">3</el-col>
          <el-col class="music box" :span="12">4</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      searchContent: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 280px;
  background-color: cadetblue;
  border-radius: 10px 0px 0px 10px;
}

.search-box {
  margin: 54px 10px 0px 10px;
}

.menu{
  margin-top: 20px;
}

.box {
  width: 125px;
  height: 60px;
  background-color: aquamarine;
  margin: 5px;
  border-radius: 10px;
}
</style>