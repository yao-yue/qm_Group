//index.js
//获取应用实例
const app = getApp()

//引入配置模块
import config from '../../utils/config'
// console.log(config.defaultBarTitle);

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articleList: [],
    days: 3,
    page: 1,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,
    hiddenLoading: false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  showDetail: function(e) {
    let dataset = e.currentTarget.dataset;
    let item = dataset && dataset.item;
    let contentId = item.contentId || 0;
    wx.navigateTo({
      url: `../../detial/detial?contentId=${contentId}`
    });

  },


  onLoad: function () {
    let title = config.defaultBarTitle;
    wx.setNavigationBarTitle({
      title,
    })
    this.requestArticle()
  },
  requestArticle: function () {
    // 请求数据
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bca9254e6742c1bf8220bea/ikcamp/list#!method=get',
      success: (res) => {
        console.log(res);
        console.log(res.data);
        let list = this.data.articleList;
        list = [...list, ...res.data.data];
        list.push(res.data.data[(this.data.page)-1])
        this.setData({
          hiddenLoading: true,
          articleList: list
        })
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1;
      this.setData({
        page: nextPage
      });
      this.requestArticle();
    }
    console.log('到页面底部了');
  }
})
