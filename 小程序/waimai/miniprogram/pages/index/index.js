Page({
    data: {
      category: [
        {
          name: '果味',
          id: 'guowei'
        },
        {
          name: '蔬菜',
          id: 'shucai'
        },
        {
          name: '炒货',
          id: 'chaohuo'
        },
        {
          name: '点心',
          id: 'dianxin'
        },
        {
          name: '粗茶',
          id: 'cucha'
        },
        {
          name: '淡饭',
          id: 'danfan'
        }
      ],
      curIndex: 0,
      detail: [],
      isScroll: false,
      //scrollview toView功能,自动跳到某个页面去
      toView: 'cucha',
      offsetY: 0,
    },
    onReady () {
      wx.request({
        url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
        success: (res) => {
          console.log(res);
          this.setData({
            detail: res.data,
            isScroll: true
          })
        }
      })
    },
    switchTab(e) {
        console.log(e);
        this.setData({
            curIndex: e.target.dataset.index,
            toView: e.target.dataset.id,  
        })
    },
    changeLeft(e) {
        
        console.log(e.detail.scrollTop)
        // let offsetY=e.detail.scrollTop;
        let curIndex = Math.ceil(e.detail.scrollTop/wx.getSystemInfoSync().windowHeight);
        console.log(wx.getSystemInfoSync().windowHeight);
        console.log(curIndex);
        this.setData({
            curIndex: curIndex
        })
    }
  })
  