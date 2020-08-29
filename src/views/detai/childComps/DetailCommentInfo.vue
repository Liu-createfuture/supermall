<template>
  <div v-if="Object.keys(commentInfo).length !== 0 " class="comment-info" ref="a">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      //1.将时间戳转成Date对象
      const date = new Date(value * 1000);

      //2.将date格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 0.3125rem 0.75rem;
  color: #333333;
  border-bottom: 0.3125rem solid #f2f5f8;
}

.info-header {
  line-height: 3.125rem;
  height: 3.125rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
}

.header-title {
  font-size: 0.9375rem;
  float: left;
}

.header-more {
  font-size: 0.8125rem;
  float: right;
  margin-right: 0.625rem;
}

.info-user {
  padding: 0.625rem 0 0.3125rem;
}

.info-user img {
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
}

.info-user span {
  font-size: 0.9375rem;
  position: relative;
  top: -0.9375rem;
  margin-left: 0.625rem;
}

.info-detail {
  padding: 0 0.3125rem 0.9375rem;
}

.info-detail p {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #777777;
}

.info-detail .info-other {
  font-size: 0.75rem;
  margin-top: 0.625rem;
  color: #999999;
}

.info-other .date {
  margin-right: 0.5rem;
}

.info-imgs {
  margin-top: 0.625rem;
}

.info-imgs img {
  width: 4.375rem;
  height: 4.375rem;
  margin-right: 0.3125rem;
}
</style>