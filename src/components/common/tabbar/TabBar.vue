<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  display: flex;
  height: 3.0625rem;
  background-color: #f6f6f6f6;
  left: 0rem;
  bottom: 0rem;
  right: 0rem;
  box-shadow: 0 -0.125rem 0.0625rem rgba(100, 100, 100, 0.1);
}
</style>
