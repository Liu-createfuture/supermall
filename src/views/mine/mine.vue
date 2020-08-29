<template>
  <div class="mine">
    <nab-bar class="mine-nav">
      <div slot="center">个人信息</div>
    </nab-bar>
    <div class="a">
      <div>
        <ul>
          <li>0</li>
          <li>0</li>
          <li>0</li>
          <li>0</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>收藏夹</li>
          <li>关注店铺</li>
          <li>喜欢的内容</li>
          <li>浏览记录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NabBar from "components/common/navbar/NavBar";
export default {
  components: {
    NabBar,
  },
};
</script>

<style scoped>
.mine {
  height: 100vh;
}
.mine-nav {
  background-color: pink;
  color: #ffffff;
  font-weight: 700;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  flex: 1;
  text-align: center;
  padding: 0.25rem 0;
}
.a {
  background-color: #efefef;
  padding: 1.25rem 0;
}
</style>
