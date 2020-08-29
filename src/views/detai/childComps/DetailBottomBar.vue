<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="shopping">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart() {
      //发射加入购物车的点击事件
      this.$emit("addCart");
    },
    shopping() {
      //跳转到购物车
      this.$router.push("/cart");
      this.$emit("addCarts");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 49px;
  background: white;

  display: flex;
  text-align: center;
}
.bar-item {
  display: flex;
  flex: 1;
}

.bar-item > div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
  color: black;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
}
.bar-left .service {
  background-position: 0 0;
  background-repeat: no-repeat;
}
.bar-left .shop {
  background-position: -30px 0;
  background-repeat: no-repeat;
}
.bar-left .select {
  background-position: -55px 0;
  background-repeat: no-repeat;
}
.cart,
.buy {
  height: 40px;
  background: rgb(54, 156, 197);
  color: white;
  line-height: 40px;
  border-radius: 50px;
  font-size: 14px;
  margin: 5px;
}
.buy {
  background-color: red;
}
.bar-item .service {
  background: url("~assets/img/common/客服.svg") no-repeat 0 0/100%;
}
.bar-item .shop {
  background: url("~assets/img/common/店铺.svg") no-repeat 0 0/100%;
}
.bar-item .select {
  background: url("~assets/img/common/收藏.svg") no-repeat 0 0/100%;
}
</style>
