import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css";
import store from "./store";
import VueLazyload from "vue-lazyload";
// import { Swipe, SwipeItem } from 'vant';

import toast from "./components/common/toast/idnex";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue(); //new Vue实例给Vue原型里的$bus，这样$bus就不是空的

//安装自定义toast插件
Vue.use(toast);

//图片懒加载
Vue.use(VueLazyload, {
  loading: require("./assets/img/home/timg (1).jpg"),
  lazyComponent: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
