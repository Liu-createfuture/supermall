<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!active">
      <slot name="tab-bar-img-inactive"></slot>
    </div>
    <div v-else>
      <slot name="tab-bar-img-active"></slot>
    </div>
    <div :style="colors">
      <slot name="tab-bar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
    },
    colora: {
      type: String,
    },
  },
  computed: {
    active() {
      return this.$route.path == this.path; //处于活跃的path等于父传过来的path时，为true返回过去
    },
    colors() {
      return this.active ? { color: this.colora } : {}; //当前active是否处于活跃，处于活跃就把颜色返回过去
    },
  },
  methods: {
    tabClick() {
      if (this.$route.path === this.path) {
        //判断点击的活跃路由是否等于父传过来的路由,这样就不会报错
        return;
      }
      return this.$router.push(this.path);
      //点击时获取父传过来的路由地址
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 3.0625rem;
  font-size: 0.875rem;
  text-align: center;
}
.tab-bar-item img {
  height: 1.5rem;
  width: 1.5rem;
  margin-top: 0.25rem;
  vertical-align: middle;
  margin-bottom: 0.125rem;
}
</style>