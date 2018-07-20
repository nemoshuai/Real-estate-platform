// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      avatarUrl:"/pages/assets/pages/assets/img/top_img_mr_bg.png",
      finish:0,
      report:0,
      commission:0,
      certified:false
    },
    bannerIcon: [
      {
        link: '/pages/index/index',
        pic: '/pages/assets/pages/assets/img/dingdan.png',
        name: '我的成交'
      },
      {
        link: '/pages/index/index',
        pic: '/pages/assets/pages/assets/img/chutuan.png',
        name: '我的出团'
      },
      {
        link: 'pages/index/index',
        pic: '/pages/assets/pages/assets/img/xiaoxi.png',
        name: '最新消息'
      },
      {
        link: '../follow/follow',
        pic: '/pages/assets/pages/assets/img/liebiao.png',
        name: '客户跟进'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})