import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    [ADD_COUNTER](state, payload) {
        //给商品个数++
        payload.count++;
    },
    [ADD_TO_CART](state, payload) {
        //给cartList添加新得商品
        state.cartList.push(payload);
    },
}