import { loadNotes } from '../../utils/utils';
let col1H = 0,
  col2H = 0;
Page({
  data: {
    test_url: '',
    col1: [],
    col2: []
  },
  onLoad () {
    loadNotes((data) => {
      // console.log(data);
      this.setData({
        test_url: data.data[0].pic,
        col1: [data.data[0]]
      })
    })
  },
  onImageLoad (event) {
    let oImgW = event.detail.width;
    let oImgH = event.detail.height;
    console.log(oImgW, oImgH);
  },

  upper () {},
  lower () {}
})
