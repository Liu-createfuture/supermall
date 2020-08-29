"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backTopMixin = exports.mixin = void 0;

var _utils = require("./utils");

var _BackTop = _interopRequireDefault(require("components/content/backTop/BackTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mixin = {
  data: function data() {
    return {
      // 监听图片
      imgListener: null
    };
  },
  mounted: function mounted() {
    // 给防抖函数赋值一个新的函数
    var refresh = (0, _utils.debouce)(this.$refs.scroll.refresh, 50); // 接收发射的事件总线,并用监听图片变量保存

    this.imgListener = function () {
      refresh();
    };

    this.$bus.$on("itemImagLoad", this.imgListener);
  }
};
exports.mixin = mixin;
var backTopMixin = {
  components: {
    BackTop: _BackTop["default"]
  },
  data: function data() {
    return {
      isShowBackTop: false,
      tabOffsetTop: 0,
      //默认高度,轮播图
      saveY: 0 //初始切换时的位置

    };
  },
  methods: {
    contentScroll: function contentScroll(position) {
      this.isShowBackTop = -position.y > this.tabOffsetTop || this.tabY; //Scroll.vue传过来的滚动事件
    },
    backClick: function backClick() {
      //封装了一个上箭头回弹,监听组件需要加.native
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  },
  activated: function activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY); //切换后保留的位置
  },
  deactivated: function deactivated() {
    //记录切换时的Y轴位置
    this.saveY = this.$refs.scroll.getScrollY();
  }
};
exports.backTopMixin = backTopMixin;