<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="(item, index) in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[item].icon" alt  />
        <span>{{ goods.services[item - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },

};
</script>

<style>
.base-info {
  margin: 0 10px;
}
.info-title {
  text-align: justify;
  margin: 10px 0;
  line-height: 20px;
  color: #222222;
}
.info-price {
  height: 40px;
}
.n-price {
  font-size: 25px;
  color: #ff5777;
}
.o-price {
  text-decoration: line-through;
  color: #999999;
  margin: 0 5px;
  font-size: 15px;
}
.info-price .discount {
  position: absolute;
  padding: 2px 5px;
  background-color: #ff5777;
  color: aliceblue;
  border-radius: 20px;
  text-align: center;
}
.info-other,
.info-service {
  display: flex;
  font-size: 13px;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  color: #999999;
  margin: 5px 0;
}
.info-service {
  color: black;
}
.info-service img {
  position: relative;
  top: 3px;
  left: -2px;
  width: 15px;
}
</style>
