//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    bannerIcon:[
      {
        link:'/pages/index/index',
        pic:'/pages/assets/pages/assets/img/shouye.png ',
        name:'住宅'
      },
      {
        link: '/pages/index/index',
        pic:'/pages/assets/pages/assets/img/gongyu.png',
        name:'公寓'
      },
      {
        link: 'pages/index/index',
        pic: '/pages/assets/pages/assets/img/bieshu.png',
        name: '别墅'
      },
      {
        link: '../login/login',
        pic: '/pages/assets/pages/assets/img/shangpu.png',
        name: '商铺'
      }
    ],
    headerIcon:{
      left: {
        pic:'/pages/assets/pages/assets/img/huo.png',
        text: '热门楼盘'
      },
      right:{
        pic: '/pages/assets/pages/assets/img/sousuo.png',
        text: '搜索'
      }
    },
    advertiseList:[
      {
        link: 'pages/index/index',
        title:'云溪四季',
        poster:'/pages/assets/pages/assets/img/data-image.png',
        address:'增城朱石城旁',
        buildingType:'住宅',
        price:'18000.00'
      },
      {
        link: 'pages/index/index',
        title: '云溪四季',
        poster: '/pages/assets/pages/assets/img/data-image.png',
        address: '增城朱石城旁',
        buildingType: '住宅',
        price: '18000.00'
      },
      {
        link: 'pages/index/index',
        title: '云溪四季',
        poster: '/pages/assets/pages/assets/img/data-image.png',
        address: '增城朱石城旁',
        buildingType: '住宅',
        price: '18000.00'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
      // this.getInfo();
  },
  //获取数据
  getInfo:function(){
    wx.request({
      url: '',
      data: {
        // x: '',
        // y: ''
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
