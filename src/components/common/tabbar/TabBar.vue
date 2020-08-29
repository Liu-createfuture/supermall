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
  height: 49px;
  background-color: #f6f6f6f6;
  left: 0px;
  bottom: 0px;
  right: 0px;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
}
</style>
