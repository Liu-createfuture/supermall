<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15x;
  padding: 0.625rem 0 1.25rem 0;
  border-bottom: 0.5rem solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 5.625rem;
  height: 5.625rem;
  margin-bottom: 0.625rem;
}
</style>
