// components/badge/index.js
Component({
  //样式与外界联系
  externalClasses: ['test-badge'],
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0,
      //观察值的变化 如果外界传入的数据过大-控制
      observer(newVal) {
        const { overflowCount } = this.data
        const finalCount = newVal >= overflowCount ? `${overflowCount}+` : newVal
        this.setData({
          finalCount,
        })
      },
    },
    overflowCount: {
      type: Number,
      value: 99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    finalCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
