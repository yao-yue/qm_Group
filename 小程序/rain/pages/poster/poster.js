Page({
  data: {
    savedImgUrl: '',
  },
  onLoad() {

  },

  //先制作一个canvas标签，再保存成图片
  onSaveImg: function () {
    const ctx = wx.createCanvasContext('myCanvas');         //看回wxml里的canvas标签，这个的myCanvas要和标签里的canvas-id一致

    ctx.clearRect(80, 130, 295, 350);
    ctx.drawImage("https://mp.weixin.qq.com/wxopen/qrcode?action=show&type=2&fakeid=3843001264&token=2038573689", 100, 150, 180, 180);
    ctx.setFillStyle("#02446e");
    var self = this;

    ctx.draw(true, setTimeout(function () {     //为什么要延迟100毫秒？大家测试一下
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 295,
        height: 300,
        destWidth: 295,
        destHeight: 300,
        canvasId: 'myCanvas',
        success: function (res) {
          self.data.savedImgUrl = res.tempFilePath;
          self.setData({
            savedImgUrl:self.data.savedImgUrl
          })
        }
      })
    }, 100))
  },

  preview: function() {
    wx.previewImage({
      current: this.data.savedImgUrl, // 当前显示图片的http链接
      urls: [this.data.savedImgUrl] // 需要预览的图片http链接列表
    })
  },

  //保存图片到相册
  saveImageToPhoto: function () {
    if (this.data.savedImgUrl != "") {
      wx.saveImageToPhotosAlbum({
        filePath: this.data.savedImgUrl,
        success: function () {
          wx.showModal({
            title: '保存图片成功',
            content: '寻人启事已经保存到相册，您可以手动分享到朋友圈！',
            showCancel: false
          });
        },
        fail: function (res) {
          console.log(res);
          if (res.errMsg == "saveImageToPhotosAlbum:fail cancel") {
            wx.showModal({
              title: '保存图片失败',
              content: '您已取消保存图片到相册！',
              showCancel: false
            });
          } else {
            wx.showModal({
              title: '提示',
              content: '保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！',
              complete: function (res) {
                console.log(res);
                if (res.confirm) {
                  wx.openSetting({})      //打开小程序设置页面，可以设置权限
                } else {
                  wx.showModal({
                    title: '保存图片失败',
                    content: '您已取消保存图片到相册！',
                    showCancel: false
                  });
                }
              }
            });
          }
        }
      })
    }
  },

})