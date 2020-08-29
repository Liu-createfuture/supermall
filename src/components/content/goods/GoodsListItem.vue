<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
/* 1.原生js，onload监听图片加载完执行。img.onload = () => {} 2.Vue,
@load监听图片加载完执行，@load = "name" */

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    //判断图片路径是哪个
    showImage() {
      return (
        this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
      );
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImagLoad"); //图片加载完立即执行。$bus事件总线，管理事件的，不是管理状态的，默认下是个空
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid); //id地址加上
      this.$emit("itemClick", this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 60px;
  position: relative;
  width: 48%;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  left: 0px;
  right: 0px;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
}

.goods-info .price {
  color: pink;
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/goods/星星.svg") 0 0/14px 14px;
}
</style>
