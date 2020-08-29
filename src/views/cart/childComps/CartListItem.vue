<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button :ischecked="product.checked" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
#shop-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
  z-index: 10;
}
.item-img img {
  width: 80px;
  height: 110px;
  display: block;
  border-radius: 5px;
}
.item-info {
  position: relative;
  width: 100%;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-info .item-desc {
  color: #666;
  margin-top: 15px;
  font-size: 14px;
}
.info-bottom {
  position: absolute;
  margin-top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  float: left;
  color: red;
}
.info-bottom .item-count {
  float: right;
}
.item-selector {
  display: flex;
  align-items: center;
}
</style>