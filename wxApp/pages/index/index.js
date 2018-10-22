//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据, 可以立马绑定在页面上
  data: {
    slides: [  
    ],
    entities: [
     ]
  },
  onLoad () {
    // console.log('首页加载了');
    // console.log(app.globalData.motto);
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
  },
  testDrive () {
    console.log('test Drive')
  },
  readMore (event) {
    // wx小程序的 api
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${event.target.dataset.id}`
    })
  }
})
