<template>
  <div class="type-left">
    <scroll class="left">
      <div
        v-for="(item,index) in sort"
        :key="index"
        class="trol"
        :class="classIfyTypeIndex === index? 'srotColor' : '' "
        @click="sortClick(item,index)"
      >{{item.title}}</div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    Scroll,
  },
  data() {
    return {
      classIfyTypeIndex: 0,
    };
  },
  props: {
    sort: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    sortClick(item, index) {
      //获取点击
      this.classIfyTypeIndex = index;

      //点击事件发出去
      const obj = {
        //分类数据
        maitKey: item.maitKey,
        index,
      };
      this.$emit("sortItemClick", obj);
    },
  },
};
</script>

<style scoped>
.type-left {
  width: 6.25rem;
  height: calc(100% - 5.875rem);
  background-color: #efefef;
  overflow: hidden;
}
.left {
  width: 100%;
  height: 100%;
}
.srotColor {
  background-color: #ffffff;
  font-weight: 700;
  border-left: 0.3125rem solid red;
}
.trol {
  text-align: center;
  height: 3.4375rem;
  line-height: 3.4375rem;
  user-select: none;
}
</style>