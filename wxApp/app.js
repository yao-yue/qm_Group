App({
  // 生命周期函数   在页面开始的时候 
  onLaunch() {
    console.log('应用启动');

    wx.request({
      url: 'https://www.easy-mock.com/mock/5bcdcefa6c5cf5220c328d71/video/video#!method=get',
      success: (response) => {
        // 把数据塞到globaData里面,传统方法
        // const {slides, vehicles, stories} = response.data;
        // this.globalData.slides = slides;
        // this.globalData.vehicles = vehicles;
        // this.globalData.stories = stories;

        // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
        Object.assign(this.globalData, response.data 
        //   {
        //   'moreResoure': '多个源对象都能复制到目标对象'
        // }
        );
        console.log(this.globalData);
      },
      error: function(err) {
        console.log(err);
      }
    });


  },
  // 全局的数据 App.js 是全局的，可以解决跨页面的授权问题 
  // 用户的登录状态等
  globalData: {
    
    motto: '孙悟空大闹天宫',
    
  },

 
})