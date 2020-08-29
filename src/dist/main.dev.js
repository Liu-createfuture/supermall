"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("normalize.css");

var _store = _interopRequireDefault(require("./store"));

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

var _idnex = _interopRequireDefault(require("./components/common/toast/idnex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Swipe, SwipeItem } from 'vant';
_vue["default"].config.productionTip = false;
_vue["default"].prototype.$bus = new _vue["default"](); //new Vue实例给Vue原型里的$bus，这样$bus就不是空的
//安装自定义toast插件

_vue["default"].use(_idnex["default"]); //图片懒加载


_vue["default"].use(_vueLazyload["default"], {
  loading: require("./assets/img/home/timg (1).jpg"),
  lazyComponent: true
});

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");