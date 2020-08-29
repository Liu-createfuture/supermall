import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            //查找之前数组中是否有该商品,然后item.iid和 payload.iid比较,相同返回true或不相同false赋值给oldProduct
            //第一次添加商品oldProduct是undefined,因为第一次判断item是没有值得
            let oldProduct = context.state.cartList.find(
                (item) => item.iid === payload.iid
            );
            console.log(oldProduct);
            //2.判断oldProduct
            if (oldProduct) {
                //当有新得商品添加两次以上时调用
                context.commit(ADD_COUNTER, oldProduct);
                //oldProduct.count += 1
                resolve('当前的商品数量' + "+" + oldProduct.count)
            } else {
                //当有新得商品添加一次时调用
                payload.count = 1;
                //添加的新商品不被选中
                payload.checked = false;
                context.commit(ADD_TO_CART, payload);
                // context.state.cartList.push(payload);
                resolve('添加了新得商品')
            }
        })
    },
}