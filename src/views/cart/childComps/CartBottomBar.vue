<template>
  <div class="bottom-bar">
    <div class="check-button">
      <check-button :ischecked="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">合计:{{ product }}</div>
    <div class="calculate" @click="calcClick">结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    product() {
      //价格合计
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      //去计算
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      //全选判断
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      //点击全选判断
      if (this.isSelectAll) {
        //全部选择
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        //部分或全部不选中
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if (this.checkLength === 0) {
        this.$toast.show("请选择购买的商品", 2000);
      } else {
        this.$toast.show("提交成功", 2000);
        setTimeout(() => {
          this.cartList.splice(0, this.checkLength);
        }, 1500);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  display: flex;
  align-items: center;
  height: 3.125rem;
  left: 0;
  right: 0;
  bottom: 3.0625rem;
  box-shadow: 0 -0.125rem 0.0625rem rgba(100, 100, 100, 0.1);
  background-color: #ffffff;
}
.price {
  margin-left: 2.5rem;
  flex: 1;
}
.check-button,
span {
  display: flex;
  align-items: center;
  margin-left: 0.3125rem;
}
.calculate {
  text-align: center;
  margin-right: 0.625rem;
  padding: 0.625rem;
  width: 5.625rem;
  background-color: rgb(247, 7, 7);
  color: #ffffff;
  border-radius: 1.5625rem;
}
</style>
