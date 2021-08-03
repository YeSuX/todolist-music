<template>
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
</template>

<script>
export default {
  name: "menuBox",
};
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 20px;
  .box {
    width: 125px;
    height: 60px;
    background-color: aquamarine;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>