const app = getApp();
const globalData = app.globalData;
// 用户的信息放在根上 
// globalData 存储一些跨页面的共享信息
// 小程序内没有cookie

Page({
  data: {
    auth: -1,
    nickname: '',
    avatarUrl: '',
    emotions: ['serene', 'hehe', 'ecstatic', 'sad', 'terrified'],
    color: {
      'serene': '#64d9fe',
      'hehe': '#d3fc1e',
      'ecstatic': '#f7dc0e', 
      'sad': '#ec238a', 
      'terrified': '#ee1aea'
    },
    openid: null,
    activeEmotion: 'serene'
  },
  onLoad() {
    // 用户的授权有很多方面 scope.userInfo
    // 生命周期判断用户是否已经授权
    this.getScope(this.getUserInfo, () => {
      this.setData({
        auth: 0
      });
    });
  },
  // 高阶函数（参数是函数），success参数也是一个函数
  getScope (success, fail, name = 'scope.userInfo') {
    // 函数体
    wx.getSetting({
      success: (res) => {
        // console.log(res);
        if(res.authSetting[name]) {
          success();
        } else {
          fail();
        }
      }
    })
  },
  getUserInfo () {
    if(!global.nickname || !globalData.avatarUrl){
      // 1. wx.getUserInfo(nickname, avatar) success
      // 2. 放到全局函数   _私有函数
      this._getUserInfo((res) => {
        // console.log(res);
        this.setData({
          nickname: res.nickName,
          avatarUrl: res.avatarUrl
        });
        globalData.nickname = res.nickName;
        globalData.avatarUrl = res.avatarUrl;
      });
    }
  },
  _getUserInfo (cb = () => {}) {
    wx.getUserInfo({
      success: (res) => {
        cb(res.userInfo);
      }
    })
  },
  submitEmotion () {
    // database 保存一天的记录
    //在小程序的前端拿到openid?
    // 选择哪个activeEmotion
    // 解构是通过key来解构
    let {openid, activeEmotion} = this.data;
    // addEmotion(openid, activeEmotion);
  },
  checkedColor (e) {
    let activeEmotion = e.currentTarget.dataset.emotion
    this.setData({
      activeEmotion
    })
  }
})