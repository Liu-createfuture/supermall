<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      //判断图片是否加载完
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      //获取图片个数
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.goods-info {
  margin: 0 0.625rem;
  padding: 1.25rem 0;
}
.info-list img {
  width: 100%;
}
.info-desc .start,
.info-desc .end {
  position: relative;
  width: 5.625rem;
  height: 0.0625rem;
  background-color: #a3a3a5;
}
.info-desc .start::before,
.info-desc .end::after {
  position: absolute;
  bottom: 0;
  width: 0.3125rem;
  height: 0.3125rem;
  content: "";
  background-color: #333333;
}
.info-desc .end::after {
  right: 0;
}
.info-desc .end {
  float: right;
}
.info-desc .start {
  float: left;
}
.info-desc .desc {
  font-size: 0.875rem;
  padding: 0.9375rem 0;
}
.info-key {
  font-size: 0.9375rem;
  margin: 0.625rem 0 0.625rem 0.9375rem;
  color: #333333;
}
</style>
