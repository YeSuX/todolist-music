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
  width: 880px;
  height: 610px;
  border-radius: 10px;
  background-color: beige;
  margin: 0 auto;
  display: flex;
}
</style>
