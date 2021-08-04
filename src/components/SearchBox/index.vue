<template>
  <div class="container">
    <div class="search">
      <input type="text" class="search__input" placeholder="Search..." />
      <div class="search__icon">
        <i class="fa fa-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBox",
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
}
.search {
  position: relative;
  display: flex;
  align-items: center;
  &__input {
    transition: all 1s;
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 3.8rem;
    box-shadow: $inner-shadow;
    background: none;
    font-family: inherit;
    color: var(--greyDark);

    &::placeholder {
      color: var(--greyLight-3);
    }
    &:focus {
      outline: none;
      box-shadow: $shadow;
      transition: all 1s;

      + .search__icon {
        color: var(--primary);
      }
    }
  }

  &__icon {
    height: 2rem;
    position: absolute;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    color: var(--greyDark);
    transition: 0.3s ease;
  }
}
</style>