const app = getApp()
const globalData = app.globalData

Page({
  data: {
    auth: -1,
  },
  onLoad (options) {
    // 高阶函数 scope 用户的整个信息
    // 用户之前就已经同意了 success this.getUserInfo 
    //  fail () => {} 还未同意
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0
      });
    });
  },
  getUserInfo (data) {
    // console.log(data);
    // 两种情况来到这里  1.未授权点击了按钮的，data里应该有userInfo，
    //                 2.之前已经授权，globalData
    if(!globalData.nickname || globalData.avatarUrl) {
      wx.getUserInfo({
        success: (res) => {
          //success
          this.setData({
            nickname: res.userInfo.nickname,
            avatarUrl: res.userInfo.avatarUrl
          })
        }
      })
    }

  },
  // 获取用户许可范围，得到范围  该干嘛干嘛
  // success type function fail function 失败 es6
  // 复杂应用的利器
  getScope (success, fail, name = "scope.userInfo") {
    // success('admin');
    wx.getSetting({
      success: (res) => {
        console.log(res);
        if (res.authSetting[name]) {
          // 用户允许获取基本信息
          typeof success === 'function' && success();
        } else {
          typeof fail === 'function' && fail()
        }
      }
    })
  }
})