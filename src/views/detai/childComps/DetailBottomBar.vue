<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop" @click="shopCart">
          <div class="a">{{cartLength}}</div>
        </i>
        <span class="text">购物车</span>
      </div>
      <div @click="Collection">
        <i class="icon select" v-if="shopClick()"></i>
        <i class="icon selects" v-else></i>
        <span class="text" v-if="shopClick()">已收藏</span>
        <span class="text" v-else>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="shopping">购买</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Collect: false,
    };
  },
  computed: {
    //computed计算属性
    ...mapGetters(["cartLength"]),
  },
  methods: {
    addToCart() {
      //发射加入购物车的点击事件
      this.$emit("addCart");
    },
    shopping() {
      //购买时跳转到购物车
      this.$router.push("/cart");
      this.$emit("addCarts");
    },
    Collection() {
      this.Collect = !this.Collect;
    },
    shopClick() {
      return this.Collect ? true : false;
    },
    shopCart() {
      //跳转到购物车
      this.$router.push("/cart");
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
  height: 3.0625rem;
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
  font-size: 0.8125rem;
  color: black;
}

.bar-left .icon {
  display: block;
  width: 1.375rem;
  height: 1.375rem;
  margin: 0.375rem auto 0.1875rem;
}
.bar-left .service {
  background-position: 0 0;
  background-repeat: no-repeat;
}
.bar-left .shop {
  background-position: -1.875rem 0;
  background-repeat: no-repeat;
}
.bar-left .select {
  background-position: -3.4375rem 0;
  background-repeat: no-repeat;
}
.cart,
.buy {
  height: 2.5rem;
  background: rgb(54, 156, 197);
  color: white;
  line-height: 2.5rem;
  border-radius: 3.125rem;
  font-size: 0.875rem;
  margin: 0.3125rem;
}
.buy {
  background-color: red;
}
.bar-item .service {
  background: url("~assets/img/common/客服.svg") no-repeat 0 0/100%;
}
.bar-item .shop {
  background: url("~assets/img/common/购物车.svg") no-repeat 0 0/100%;
}
.bar-item .select {
  background: url("~assets/img/common/收藏.svg") no-repeat 0 0/100%;
}
.bar-item .selects {
  background: url("~assets/img/common/收藏(1).svg") no-repeat 0 0/100%;
}
.a {
  position: absolute;
  box-sizing: border-box;
  padding: 0.3125rem;
  top: 0;
  left: 6.25rem;
  min-width: 0.1875rem;
  min-height: 0.3125rem;
  line-height: 0.3125rem;
  font-size: 0.0625rem;
  background-color: #ee0a24;
  color: #fff;
  border-radius: 0.625rem;
}
</style>
