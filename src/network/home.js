import {
  request
} from "./request";

export function getHomeMutidata() {
  return request({
    url: "/api/z8/home/multidata",
  });
}



export function getHomeGoods(type, page) {
  return request({
    url: '/api/z8/home/data',
    params: {
      type, //类型,流行，新款，精选
      page //页数
    }
  })
}


//分类
export function classIfy() {
  return request({
    url: '/api/z8/category',
  }).catch(res => {
    console.log(res);
  })
}

//分类商品
export function classIfySortItem(maitKey) {
  return request({
    url: '/api/z8/subcategory',
    params: {
      maitKey
    }
  })
}

export function classIfyTabItem(miniWallkey, type) {
  return request({
    url: '/api/z8/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}