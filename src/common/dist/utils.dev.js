"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debouce = debouce;
exports.formatDate = formatDate;

//防抖封装
function debouce(func, delay) {
  //这个return返回去的是const refresh的
  var item = ''; //用于储存item是否有数据，然后进行下一步if判断

  return function () {
    if (item) clearTimeout(item); //判断item是否有数据，有就清除定时器

    item = setTimeout(function () {
      func(); //图片速度加载速度慢于delay时间时，调用func()，等同于调用this.$refs.scroll.refresh()
    }, delay);
  };
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
} // 时间格式化


function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      var str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}