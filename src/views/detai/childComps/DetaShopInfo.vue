<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" @load="imgItems" />
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgItems() {
      this.$emit("imgItems");
    },
  },
};
</script>

<style scoped>
.shop-info {
  margin: 20px 10px;
}
.shop-top {
  display: flex;
  align-items: center;
}
.shop-top img {
  height: 50px;
  border-radius: 50%;
}
.title {
  margin-left: 10px;
}
.shop-middle {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left,
.shop-middle-right {
  display: flex;
  line-height: 25px;
  justify-content: space-evenly;
  text-align: center;
  color: #333333;
}
.shop-middle-left {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better-more {
  background-color: #f13e3a;
}
.better {
  padding: 3px;
  text-align: center;
  color: #ffffff;
  background-color: #5ea732;
}
.shop-bottom {
  margin-top: 10px;
  text-align: center;
}
.enter-shop {
  font-size: 14px;
  line-height: 30px;
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #f2f5f8;
}
</style>