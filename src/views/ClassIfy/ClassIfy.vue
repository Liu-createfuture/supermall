<template>
  <div id="ClassIfy">
    <ClassIfy-nav-bar />
    <tab-control
      :titles="tabList"
      @tabClick="tabClick"
      ref="tab"
      v-show="isShowBackTop"
      class="tab-control"
    />
    <type :sort="commodity" @sortItemClick="ifyItemClick" />

    <scroll class="right" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <class-ify-info :SortItemList="SortItem" />
      <tab-control :titles="tabList" @tabClick="tabClick" ref="tab" />
      <goods-list :goods="classIfyTabItemList" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import ClassIfyNavBar from "./chlidClassIfy/ClassIfyNavBar";
import Type from "./chlidClassIfy/ClassIfyType";
import ClassIfyInfo from "./chlidClassIfy/ClassIfyInfo";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { classIfy, classIfySortItem, classIfyTabItem } from "network/home";
import Scroll from "components/common/scroll/Scroll";
import { debouce } from "common/utils";

import { mixin, backTopMixin } from "common/mixin";

export default {
  components: {
    Type,
    Scroll,
    ClassIfyNavBar,
    ClassIfyInfo,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      commodity: [],
      SortItem: [],
      classIfyTabItemList: [],
      tabList: ["流行", "新款", "精选"],
      currentType: "pop",
      currentIndex: 0,
      tabY: 0,
    };
  },
  mixins: [mixin, backTopMixin],
  created() {
    //创建时调用
    this.classIfy();
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    //商品分类接口
    classIfy() {
      classIfy().then((res) => {
        //获取商品分类
        this.commodity = res.data.category.list;

        //Dom加载完调用,第一个分类商品的信息
        this.$nextTick(() => {
          this.Product(this.commodity[0].maitKey);
          this.tabClickItem(this.commodity[0].miniWallkey, this.currentType);
        });
      });
    },
    //接收子组件点击事件
    ifyItemClick({ maitKey, index }) {
      this.Product(maitKey);
      this.currentIndex = index;

      this.tabClickItem(
        this.commodity[this.currentIndex].miniWallkey,
        this.currentType
      );
      //切换"流行", "新款", "精选"默认第一个
      this.$refs.tab.currentIndex = 0;

      //切换时默认0高度
      this.$refs.scroll.scrollTo(0, 0);
    },
    //获取分类商品数据
    contentScroll(position) {
      //箭头显示
      this.tabY = this.$refs.tab.$el.offsetTop;
      this.isShowBackTop = -position.y > this.tabY; //Scroll.vue传过来的滚动事件
    },
    Product(key) {
      classIfySortItem(key).then((res) => {
        this.SortItem = res.data.list;
      });
    },
    //获取tab点击商品信息
    tabClickItem(key, type) {
      classIfyTabItem(key, type).then((res) => {
        this.classIfyTabItemList = res;
      });
    },
    tabClick(index) {
      //点击获取商品
      this.type = ["pop", "new", "sell"];
      this.tabClickItem(
        this.commodity[this.currentIndex].miniWallkey,
        this.type[index]
      );
    },
  },
};
</script>

<style scoped>
#ClassIfy {
  height: 100vh;
}
.right {
  position: absolute;
  left: 6.25rem;
  top: 2.75rem;
  right: 0;
  width: calc(100% - 6.25rem);
  height: calc(100% - 5.875rem);
  overflow: hidden;
}
.tab-control {
  position: relative;
  float: right;
  background-color: #ffffff;
  width: calc(100% - 6.25rem);
  z-index: 9;
}
</style>
