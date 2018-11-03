Page({
  imgCheck: function() {
    wx.cloud.callFunction({
      name: 'imgCheck'
    }).then(res => {
      console.log(res)
    })
  },
  onLoad: function(options) {
    console.log(options);
  }
})