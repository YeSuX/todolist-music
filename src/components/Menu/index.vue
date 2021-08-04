<template>
  <div class="container">
    <div class="menu">
      <div class="btn btn__primary"><p>Button</p></div>
      <div class="btn btn__secondary"><p>Button</p></div>
      <div class="btn btn__secondary"><p>Button</p></div>
      <div class="btn btn__secondary"><p>Button</p></div>
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
    display: inline-block;
    margin: 1rem;
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

    p {
      font-size: 1.6rem;
      line-height: 5rem;
      text-align: center;
    }
  }
}
</style>