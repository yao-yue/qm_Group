Page({
    data: {
        username: ''
    },
    //怎么拿到用户的输入
    // mvvm数据绑定
    userNameInput(e) {
        // console.log(e.detail.value);
        let isNav = false
        //这是一个API
        this.setData({
            username: e.detail.value
        })
    },
    toInfo() {
        // console.log(this);
        // console.log(this.data.username);
        if (this.data.username) {
            wx.showToast({
                title: '加载中...',
                icon: 'loading',
                duration: 1000
            });
        } else {
            wx.showModal({
                title: '请输入用户名...',
                showCancel: false,
                success: function (res) {

                }
            })
        }

        wx.setStorage({
            key: 'username',
            data: this.data.username
        })

        setTimeout(() => wx.switchTab({
            url: '../index/index'
        }), 1000)
    }
})