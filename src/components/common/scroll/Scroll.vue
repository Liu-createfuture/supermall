<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0, //Home父组件传过3来
    },
    pullUpLoad: {
      type: Boolean,
      default: false, //默认不需要上拉
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType, //监听滚动距离,this.probeType指向每个组件传过来的数值,0和1是不监听滚动的只有2和3会监听
      pullUpLoad: this.pullUpLoad, //默认不需要上拉。但是Home父组件传过来了一个true，Home就有是true
    });
    //2.监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position); //发射滚动事件,父组件需要用@scroll，$emit('注册的名字',参数)
      });
    }
    //3.监听scroll滚到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp"); //发射注册的事件
      });
    }
  },
  //3.监听上拉事件
  methods: {
    scrollTo(x, y, time) {
      //封装了一个上箭头,scrollTo滚动到x和y坐标轴，time是设置多久滚到
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp(); //上拉加载更多,再进行更多的加载，fininshpullUp是插件里面的方法,
    },
    refresh() {
      this.scroll.refresh(); //scroll.refresh()是插件的重新计算高度的固定语法
    },
    getScrollY() {
      //判断this.scroll有没有值
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style></style>
