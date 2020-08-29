"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetail = getDetail;
exports.getRecommend = getRecommend;
exports.Product = exports.GoodsParam = exports.Shop = exports.Goods = void 0;

var _request = require("./request");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDetail(iid) {
  return (0, _request.request)({
    url: 'api/z8/detail',
    params: {
      iid: iid
    }
  });
} //获取商品信息
//itemInfo,columns,services代表接口的名称


var Goods = function Goods(itemInfo, columns, services) {
  _classCallCheck(this, Goods);

  this.title = itemInfo.title;
  this.desc = itemInfo.desc;
  this.newPrice = itemInfo.price;
  this.oldPrice = itemInfo.oldPrice;
  this.discount = itemInfo.discountDesc;
  this.columns = columns;
  this.services = services;
  this.realPrice = itemInfo.lowNowPrice;
}; //获取店家信息


exports.Goods = Goods;

var Shop = function Shop(shopInfo) {
  _classCallCheck(this, Shop);

  this.logo = shopInfo.shopLogo;
  this.name = shopInfo.name;
  this.fans = shopInfo.cFans;
  this.sells = shopInfo.cSells;
  this.score = shopInfo.score;
  this.goodsCount = shopInfo.cGoods;
}; //获取参数信息


exports.Shop = Shop;

var GoodsParam = function GoodsParam(info, rule) {
  _classCallCheck(this, GoodsParam);

  //images可能没有值(某些商品有值，有些没有值)
  this.image = info.images ? info.images[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
}; //购物车信息


exports.GoodsParam = GoodsParam;

var Product = function Product(topImages, goods, iid) {
  _classCallCheck(this, Product);

  this.image = topImages[0];
  this.title = goods.title;
  this.desc = goods.desc;
  this.price = goods.realPrice;
  this.iid = iid;
};

exports.Product = Product;

function getRecommend() {
  return (0, _request.request)({
    url: '/api/z8/recommend'
  });
}