<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="TabControl1"
      class="tab-control"
      v-show="isShowBackTop"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @imgItems="imgItems" />
      <recommendView :recommends="recommends" />
      <featureView />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl2" />
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMutidata, getHomeGoods } from "network/home"; //导出没用default需要加{}
import { debouce } from "common/utils"; //防抖封装
import { mixin, backTopMixin } from "common/mixin";

export default {
  name: "",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
  },
  mixins: [mixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop", //默认当前类型
    };
  },

  computed: {
    showGoods() {
      //类型封装
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //created创建时,就请求多个数据
    this.getHomeMutidata(); //抽到了methods方法里面

    this.getHomeGoods("pop"); //抽到了methods方法里面
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /*    debounce(func, delay) {
      \\这个return返回去的是const refresh的
      let item = ""; //用于储存item是否有数据，然后进行下一步if判断
      return function () {
        if (item) clearTimeout(item); //判断item是否有数据，有就清除定时器
        item = setTimeout(() => {
          func(); //图片速度加载速度慢于delay时间时，调用func()，等同于调用this.$refs.scroll.refresh()
        }, delay);
      };
    }, */

    //轮播图获取高度监听,因为轮播图加载过慢，为了吸顶效果精准计算高度
    imgItems() {
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop;
    },
    //事件监听相关的方法

    tabClick(index) {
      //需要TabControl.vue文件把index传过来,在用@tabClick="tabClick"
      switch (
        index //判断点击，再把地址赋值给currentType
      ) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.TabControl1.currentIndex = index; //点击当前的index,解决吸顶切换分类问题
      this.$refs.TabControl2.currentIndex = index;
    },
    loadMore() {
      this.getHomeGoods(this.currentType); //接收过来的事件，是scroll发射过来的事件,用于上拉加载，但是上拉只加载一次，所以需要finishPullUp加载更多
    },

    //网络请求相关的方法
    getHomeMutidata() {
      getHomeMutidata().then((res) => {
        this.banners = res.data.banner.list; //在axios传过来的网络拿到数据然后赋值给banners保存,因为回调函数结束后会回收掉res，所以得保存
        this.recommends = res.data.recommend.list; //在axios传过来的网络拿到数据然后赋值给recommends保存,因为回调函数结束后会回收掉res，所以得保存
      });
    },
    getHomeGoods(type) {
      // type是created   this.getHomeGoods()传过来
      const page = this.goods[type].page + 1; // 请求页数
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list); //请求接口 pop||new||sell ,第几页的list数据添加
        this.goods[type].page += 1; //上拉加载页数

        this.$refs.scroll.finishPullUp(); //调用Scrioll.vue的加载更多
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: pink;
  color: #ffffff;
  font-weight: 700;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
}
</style>
