<template>
  <div class="container">
    <div class="menu">
      <div class="menu-item">
        <div class="btn btn__primary" @click="$router.push({
          path:'all',
          query: {
            time: new Date(),
          }})">
          <i class="fa fa-calendar"></i>
          <p>全部</p>
        </div>
      </div>
      <div class="menu-item">
        <div class="btn btn__secondary" @click="$router.push('analyse')">
          <i class="fa fa-bar-chart"></i>
          <p>分析</p>
        </div>
      </div>
      <div class="menu-item">
        <div class="btn btn__secondary" @click="$router.push('music')">
          <i class="fa fa-music"></i>
          <p>叮~</p>
        </div>
      </div>
      <div class="menu-item">
        <div class="btn btn__secondary" href="https://github.com/YeSuX/todolist-music">
          <i class="fa fa-github"></i>
          <p>Github</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuBox",
};
</script>

<style lang="scss" scoped>
$shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
  -0.2rem -0.2rem 0.5rem var(--white);
$inner-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
  inset -0.2rem -0.2rem 0.5rem var(--white);
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  .menu-item {
    display: inline-block;
  }
  .btn {
    width: 10rem;
    height: 5rem;
    border-radius: 1rem;
    box-shadow: $shadow;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
    margin: 1rem;
    font-size: 1.6rem;
    &__primary {
      background: var(--primary);
      box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-light),
        inset -0.2rem -0.2rem 1rem var(--primary-dark), $shadow;
      color: var(--greyLight-1);

      &:hover {
        color: var(--white);
      }
      &:active {
        box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-dark),
          inset -0.2rem -0.2rem 1rem var(--primary-light);
      }
    }

    &__secondary {
      color: var(--greyDark);
      &:hover {
        color: var(--primary);
      }
      &:active {
        box-shadow: $inner-shadow;
      }
    }
  }
  .fa {
    margin-right: 1rem;
  }
}
</style>