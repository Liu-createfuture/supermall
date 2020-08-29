import {
    debouce
} from "./utils";

import BackTop from "components/content/backTop/BackTop";

export const mixin = {
    data() {
        return {
            // 监听图片
            imgListener: null
        };
    },
    mounted() {
        // 给防抖函数赋值一个新的函数

        const refresh = debouce(this.$refs.scroll.refresh, 50);

        // 接收发射的事件总线,并用监听图片变量保存
        this.imgListener = () => {
            refresh();
        };
        this.$bus.$on("itemImagLoad", this.imgListener);
    }
};

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
            tabOffsetTop: 0, //默认高度,轮播图
            saveY: 0, //初始切换时的位置

        }
    },
    methods: {
        contentScroll(position) {
            this.isShowBackTop = -position.y > this.tabOffsetTop || this.tabY; //Scroll.vue传过来的滚动事件
        },
        backClick() {
            //封装了一个上箭头回弹,监听组件需要加.native
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
    },
    activated() {
        this.$refs.scroll.refresh();
        this.$refs.scroll.scrollTo(0, this.saveY);
        //切换后保留的位置
    },
    deactivated() {
        //记录切换时的Y轴位置
        this.saveY = this.$refs.scroll.getScrollY();

    },
}