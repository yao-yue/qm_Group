Page({
  // 云函数是独立的node环境,可以拥有Node的能力，远程调用API,拥有综合处理数据库的能力
  // 新建、安装依赖、上传
  // 云开发能力
  http: function() {
    wx.cloud.callFunction({
      name: 'http',
      data: {
        a: 1
      }
      // .then异步的同步写法
      // 云函数的执行是异步的 main函数在index.js里面  
      // async 在这函数内部将发生费时的事情 ajax请求 文件上传
      // 代码的阅读顺序，异步的操作时序都不好分辨，于是将异步的执行顺序来用同步表达
    }).then(res => {
      console.log(res);
      console.log(res.result);
    })
  },
  goImgCheck: () => {
    wx.navigateTo({
      url: '../imageCheck/imageCheck?key=112',
    })
  }
})