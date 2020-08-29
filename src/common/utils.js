//防抖封装
export function debouce(func, delay) {

    //这个return返回去的是const refresh的
    let item = ''; //用于储存item是否有数据，然后进行下一步if判断
    return function () {
        if (item) clearTimeout(item); //判断item是否有数据，有就清除定时器
        item = setTimeout(() => {
            func(); //图片速度加载速度慢于delay时间时，调用func()，等同于调用this.$refs.scroll.refresh()
        }, delay);
    };
}

function padLeftZero(str) {
    return ("00" + str).substr(str.length);
}

// 时间格式化
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };

    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }

    return fmt;
}