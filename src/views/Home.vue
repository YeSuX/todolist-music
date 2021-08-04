<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <bodyContent></bodyContent>
  </div>
</template>

<script>
import bodyContent from "@/components/Body";
import sidebar from "@/components/SideBar";

export default {
  name: "Home",
  components: {
    bodyContent,
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
}
</style>
