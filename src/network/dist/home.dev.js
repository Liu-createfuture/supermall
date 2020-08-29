"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeMutidata = getHomeMutidata;
exports.getHomeGoods = getHomeGoods;
exports.classIfy = classIfy;
exports.classIfySortItem = classIfySortItem;
exports.classIfyTabItem = classIfyTabItem;

var _request = require("./request");

function getHomeMutidata() {
  return (0, _request.request)({
    url: "/api/z8/home/multidata"
  });
}

function getHomeGoods(type, page) {
  return (0, _request.request)({
    url: '/api/z8/home/data',
    params: {
      type: type,
      //类型,流行，新款，精选
      page: page //页数

    }
  });
} //分类


function classIfy() {
  return (0, _request.request)({
    url: '/api/z8/category'
  })["catch"](function (res) {
    console.log(res);
  });
} //分类商品


function classIfySortItem(maitKey) {
  return (0, _request.request)({
    url: '/api/z8/subcategory',
    params: {
      maitKey: maitKey
    }
  });
}

function classIfyTabItem(miniWallkey, type) {
  return (0, _request.request)({
    url: '/api/z8/subcategory/detail',
    params: {
      miniWallkey: miniWallkey,
      type: type
    }
  });
}