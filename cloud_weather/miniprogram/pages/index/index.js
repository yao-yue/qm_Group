// 初始化云服务器
wx.cloud.init({
  env: 'cloud-hbw'
})

// 初始化数据库
const db = wx.cloud.database();
const _ = db.command;
const productsCollection = db.collection('products');

Page({
  onPullDownRefresh: function() {
    // console.log('下拉更新');
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      }, res => {
        console.log('数据更新完成')
        wx.stopPullDownRefresh();
      })
    })
  },
  onReachBottom: function() {
    console.log('上拉加载更多');
  },
  data: {
    page: 1,
    products: []
  },
  onLoad: function() {
    productsCollection
    .get()
    .then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  click: function(event) {
    // update view + 1    一行记录就是一个document
    // database>collection>document
    productsCollection.doc(event.currentTarget.dataset.id)
    .update({
      data: {
        view: _.inc(1)
      }
    })
  }
})