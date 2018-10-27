
wx.cloud.init({
})
const db = wx.cloud.database();
Page({
  data: {
    ads: [],
    item: {
      user: {
        avatar: '',
        nickname: 'hbw',
        summary: 'good job'
      }
    }
  },
  onLoad: function () {
    db.collection("ads").get({
      success: res => {
        this.setData({
          ads: res.data
        })
        // 云函数？  小程序的前端搞不定的时候，openid，需要复杂计算的时候
        // async await 三个数据库的综合查询
        // 查询sql-selcet   mongodb no-sql find()
        // where 条件 orderby 排序 limit 限制条数 skip忽略
        // 翻页第二页  skip(20).limit(10)
        wx.cloud.callFunction({
          name: "getTravelInfo",
          data: {
            //count 数据的条数
            count: 5,
            startIndex: 0
          },
          success: res => {
            console.log(res);
          }
        })
      }
    })
  }
})
