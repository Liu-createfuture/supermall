<template>
  <div>
    <nav-bar class="detail-nav">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/左箭头.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          :class="{active:judge(index)}"
          @click="activeClick(index)"
        >
          <span :class="{pink:judge(index)}">{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    activeClick(index) {
      this.currentIndex = index; //传index过来,判断点击谁
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back(); //返回上一层
    },
    judge(index) {
      if (this.currentIndex === index) return true; //判断点击，赋颜色
    },
  },
};
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.title {
  display: flex;
  font-size: 15px;
}
.title-item {
  flex: 1;
}
.active {
  color: pink;
}
.pink {
  border-bottom: 2px solid pink;
  padding: 4px 7px;
}
.back img {
  height: 40px;
  margin-top: 4px;
  margin-left: 10px;
}
</style>