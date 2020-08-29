<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  props: {},
  methods: {
    show(message, duration) {
      this.isShow = true;
      this.message = message;

      //几秒消失
      setTimeout(() => {
        this.isShow = false;
        this.message = null;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 10.625rem;
  height: 6.25rem;
  border-radius: 1.25rem;
  text-align: center;
  line-height: 6.25rem;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  padding: 0.625rem;
}
</style>
