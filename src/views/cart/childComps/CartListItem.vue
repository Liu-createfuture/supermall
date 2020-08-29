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
  padding: 0.3125rem;
  border-bottom: 0.0625rem solid #ccc;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 0.3125rem;
  z-index: 10;
}
.item-img img {
  width: 5rem;
  height: 6.875rem;
  display: block;
  border-radius: 0.3125rem;
}
.item-info {
  position: relative;
  width: 100%;
  font-size: 1.0625rem;
  color: #333;
  padding: 0.3125rem 0.625rem;
  overflow: hidden;
}
.item-info .item-desc {
  color: #666;
  margin-top: 0.9375rem;
  font-size: 0.875rem;
}
.info-bottom {
  position: absolute;
  margin-top: 0.625rem;
  bottom: 0.625rem;
  left: 0.625rem;
  right: 0.625rem;
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