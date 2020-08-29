<template>
  <tab-bar>
    <tab-bar-item path="/home" colora="red">
      <img slot="tab-bar-img-inactive" src="~assets/img/首页.svg" alt />
      <img slot="tab-bar-img-active" src="~assets/img/首页(1).svg" alt />
      <div slot="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/ClassIfy" colora="red">
      <img slot="tab-bar-img-inactive" src="~assets/img/类目 品类 分类 类别.svg" alt />
      <img slot="tab-bar-img-active" src="~assets/img/类目 品类 分类 类别.2.svg" alt />
      <div slot="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" colora="red">
      <img slot="tab-bar-img-inactive" src="~assets/img/购物车空.svg" alt />
      <img slot="tab-bar-img-active" src="~assets/img/购物车满.svg" alt />
      <div slot="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine" colora="red">
      <img slot="tab-bar-img-inactive" src="~assets/img/我的 (2).svg" alt />
      <img slot="tab-bar-img-active" src="~assets/img/我的 (1).svg" alt />
      <div slot="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>