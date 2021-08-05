<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <router-view class="contain" />
  </div>
</template>

<script>
import sidebar from "@/components/SideBar";

export default {
  name: "Home",
  components: {
    sidebar,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 75rem;
  height: 40rem;
  border-radius: 3rem;
  box-shadow: 0.8rem 0.8rem 1.4rem var(--greyLight-2),
    -0.2rem -0.2rem 1.8rem var(--white);
  display: flex;
  .contain {
    width: 50rem;
    height: 100%;
    border-radius: 0 3rem 3rem 0;
    padding: 2rem;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
