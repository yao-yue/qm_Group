//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    status: 1, //任务状态 1 全部 2 未完成 3 已完成 
    curLists: [],
    lists: [{
      'text': '疯狂学习',
      status: 1
    },
    {
      'text': '学习狂暴状态',
      status: 0
    },
    {
      'text': '基础巩固',
      status: 0
    }],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //生命周期函数
  onShow: function() {
    console.log('show');
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.setData({
      curLists: this.data.lists
    });
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    // this.data.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showStatus: function (e) {
    let key = e.currentTarget.dataset.key;

    let lists = this.data.lists;
    lists.filter( (item) => {
      if (key == 1) return true;
      if (key == 2 && item.status ==0) return true;
      if (key == 3 && item.status ==1) return true;
    });
    console.log(lists);

    if (key == this.data.key) return;
    this.setData({
      status: key,
      curLists: lists
    });
  }
})
