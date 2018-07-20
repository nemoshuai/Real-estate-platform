// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ageRange:[
      { value: '20' },
      { value: '30' },
      { value: '40' },
      { value: '50' },
      { value: '60' },
      { value: '70' },
    ],
    profession: [
      { value: '个体户' },
      { value: '上班族' },
      { value: '主妇' },
      { value: '退休人' },
      { value: '投资客' },
      { value: '企业家' },
    ],
    hasHouse:[
      { value: '有房' },
      { value: '无房' },
    ],
    traffic:[
      { value: '公交' },
      { value: '地铁'},
      { value: '自行车' },
      { value: '汽车' },
    ],
    buyType:[
      { value: '公寓'},
      { value: '洋房2' },
      { value: '洋房3' },
      { value: '洋房4' },
      { value: '别墅' },
      { value: '商铺' },
    ],
    visitTime:[
      { value: '周末' },
      { value: '平日' },
      { value: '节假日' },
      { value: '随时' },
    ],
    houseCommand:[
      { value: '自住' },
      { value: '入户读书' },
      { value: '养老' },
      { value: '投资' },
      { value: '度假' },
    ],
    payMode:[
      { value: '按揭' },
      { value: '分期' },
      { value: '一次性' },
      { value: '首付分期' },
    ],
    payMode: [
      { value: '按揭' },
      { value: '分期' },
      { value: '一次性' },
      { value: '首付分期' },
    ],
    intentionArea: [
      { value: '清远' },
      { value: '肇庆' },
      { value: '佛山' },
      { value: '惠州' },
      { value: '广州' },
      { value: '东莞' },
    ],
    attractivePoint: [
      { value: '价格' },
      { value: '学位' },
      { value: '低首付' },
      { value: '入户' },
      { value: '交通' },
    ],
    oldNew:[
      { value: '是' },
      { value: '否' },
    ]
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