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
  width: 170px;
  height: 100px;
  border-radius: 20px;
  text-align: center;
  line-height: 100px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  padding: 10px;
}
</style>
