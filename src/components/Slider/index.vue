<template>
  <div class="slider"></div>
</template>

<script>
export default {
  name: "slider",
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
    inset -0.2rem -0.2rem 0.5rem var(--white);
  border-radius: 1rem;
  margin: 1rem 0;
}
</style>