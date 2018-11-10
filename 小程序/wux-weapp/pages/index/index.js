Page({
  data: {
    num: 110,
  },
  onLoad:function() {
    setTimeout(() => {
      this.setData({
        num: 9
      })
    }, 3000)
  }
})