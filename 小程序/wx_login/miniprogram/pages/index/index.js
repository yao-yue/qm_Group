const app = getApp()
const globalData = app.globalData
const c2s = require('../../utils/jscode2session')

Page({
  data: {
    auth: -1,     //未按按钮
  },
  onLoad (options) {
    // 高阶函数 scope 用户的整个信息
    // 用户之前就已经同意了 success this.getUserInfo 
    //  fail () => {} 还未同意
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0    //已经出现弹框但是拒绝了
      });
    });
  },
  getUserInfo (data) {
    // console.log(data);
    // 两种情况来到这里  1.未授权点击了按钮的，data里应该有userInfo，
    //                 2.之前已经授权，globalData
    if(!globalData.nickName || globalData.avatarUrl) {
      wx.getUserInfo({
        success: (res) => {
          //success
          console.log(res.userInfo);
          this.setData({
            nickname: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
          globalData.nickName = this.data.nickname
          globalData.avatarUrl = this.data.avatarUrl
          console.log(globalData);
          // session 服务器跟踪服务
          let openid = wx.getStorageSync('openid'); //同步写法 会阻塞一下程序
          if (openid) {

          } else {
            this.getUserOpenId(() => {

            }, () => {
              // 再登录一次
              this.setData({
                auth: 0
              })
            })
          }
        }
      })
    }

  },
  getUserOpenId (success, fail) {
    console.log('getUserOpenId');
    wx.login({
      success: (res) => {
        console.log('下面是登录成功的结果：')
        console.log(res);
// ----------------------------这里前后端分界------------------------------------
        // wx.cloud.callFunction({
        //   name: 'jscode2session',
        //   data: {
        //     code: res.code
        //   },
        //   complete: (res) => {
        //     console.log('下面是调用获取session的云函数结果：')
        //     console.log(res);
        //     // let { openid = '',session_key = '' } = res.result
        //     // wx.getStorage({
        //     //   key: 'openid',
        //     //   data: res.result.openid
        //     // })
        //   },
        // })

        //别的方法
        c2s.jscode2session(res)

      }
    })
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