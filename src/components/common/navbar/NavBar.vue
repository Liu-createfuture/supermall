<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  line-height: 2.75rem;
  height: 2.75rem;
  box-shadow: 0 -0.125rem 0.3125rem #918b8b;
}
.left,
.right {
  width: 3.75rem;
}
.center {
  flex: 1;
  text-align: center;
}
</style>