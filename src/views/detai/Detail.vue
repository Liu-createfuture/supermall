<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <detail-swiper :top-images="topImages" />
      <detail-baseinfo :goods="goods" />
      <detail-shop-info :shop="shop" ref="TabControlShop" @imgItems="imgItems" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" :iid="iid" />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" @addCarts="addCarts" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseinfo from "./childComps/DetailBaseinfo";
import DetailShopInfo from "./childComps/DetaShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import Toast from "components/common/toast/Toast";

import { debouce } from "common/utils";
import { mixin, backTopMixin } from "common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
  Product,
} from "network/detail";
export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    DetailCommentInfo,
  },
  mixins: [mixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    //1.保存传入的id
    this.iid = this.$route.params.id;
    //2.根据iid请求详细数据
    getDetail(this.iid).then((res) => {
      //1.保存数据
      const data = res.result;
      //2.获取顶部图片数据
      this.topImages = data.itemInfo.topImages;

      //3.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //4.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //5.保存商品详情数据
      this.detailInfo = data.detailInfo;

      //6.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //7.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    //4.获取商品图片高度,防抖操作
    this.getThemeTopY = debouce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 500);
  },
  methods: {
    imageLoad() {
      //调用防抖
      this.$refs.scroll.refresh();

      //调用防抖
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > this.tabOffsetTop; //Scroll.vue传过来的滚动事件,返回顶部

      //获取Y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY <= this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    imgItems() {
      this.tabOffsetTop = this.$refs.TabControlShop.$el.offsetTop;
    },
    addCarts() {
      const product = new Product(this.topImages, this.goods, this.iid);
      this.$store.dispatch("addCart", product);
    },
    addToCart() {
      const product = new Product(this.topImages, this.goods, this.iid);
      //2.添加到购物车
      this.$store.dispatch("addCart", product).then((res) => {
        //弹出添加商品
        this.$toast.show(res, 2000);
      });
    },
  },
  destroyed() {
    //取消指定this.itemImgListener事件的监听
    this.$bus.$off("imgLoad", this.imgListener);
  },
};
</script>

<style scoped>
#detail {
  height: 100%;
  width: 100%;
}
.content {
  position: absolute;
  top: 2.75rem;
  right: 0;
  bottom: 3.125rem;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
}
</style>
