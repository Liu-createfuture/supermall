<template>
  <div class="class-ify-info" >
    <div class="info-item" v-for="(item,index) in  SortItemList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="scroll" />
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import { debouce } from "common/utils";
export default {
  props: {
    SortItemList: {},
  },
  methods: {
    scroll() {
      //图片防抖
      this.$bus.$emit("itemImagLoad");
    },
  },
};
</script>

<style scoped>
.class-ify-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  padding: 0.625rem;
}
.info-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 5rem;
  height: 6.25rem;
  margin: 0.625rem 0;
}
img {
  width: 4.0625rem;
}
</style>