<template>
  <div>
    <nav-bar class="classIfy-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.classIfy-nav-bar {
  background-color: pink;
  color: #ffffff;
  font-weight: 700;
  z-index: 999;
}
</style>