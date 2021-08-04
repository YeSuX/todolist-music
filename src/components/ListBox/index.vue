<template>
  <div class="list-box">
    <div class="list-title">我的列表</div>
    <div class="list-content">
      <div class="list-item" v-for="n in 20" :key="n">
        <div class="list-icon">
          <i class="fa fa-list-ul"></i>
        </div>
        <div class="list-name">列表{{n}}</div>
        <div class="list-num">{{n}}</div>
      </div>
    </div>
    <div class="list-add">
      <div class="add-icon">
        <i class="fa fa-plus-square"></i>
      </div>
      <div class="detail">添加列表</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list-box {
  height: 100%;
  color: var(--greyDark);
  font-size: 1.4rem;
  padding-left: 3rem;
  .list-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .list-item {
    display: flex;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    position: relative;
    &:last-child {
      margin-bottom: 4rem;
    }
    &:hover{
      background-color: var(--greyDark);
      color: var(--white);
    }
    .list-icon{
      margin-right: 1rem;
    }
    .list-num{
      position: absolute;
      right: 1rem;
    }
  }
  .list-add {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: var(--greyLight-1);
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    cursor: pointer;
    &:hover{
      color: var(--primary);
    }
    .add-icon{
      margin-right: 1rem;
    }
  }
}
</style>