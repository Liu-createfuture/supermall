<template>
  <div class="check-button">
    <img src="~assets/img/goods/√.svg" alt v-if="ischecked" />
    <img src="~assets/img/goods/勾选.svg" alt v-else />
  </div>
</template>

<script>
export default {
  props: {
    ischecked: {
      type: Boolean,
    },
  },
  methods: {
  },
};
</script>

<style scoped>
img {
  width: 1.875rem;
  z-index: 10;
}
</style>