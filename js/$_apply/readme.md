- 性能优化 
    script 标签 阻塞性， src 下载代码，或行内的js并执行   不要放在头部
    页面的显示，painting 绘制 排列  重绘重排
    ![](https://user-gold-cdn.xitu.io/2018/10/8/166511304b1b6c20?imageslim)
    生命周期 window.onload     document.DOMContentLoaded

    js开始 不要阻止dom的绘制 但是也不要等到window onload完成
    DOMContentLoaded domready事件 img

- $(callback)
    jquery $第一种使用用途是dom ready事件
    $(function() {
        //js here
    })
    $(selector) 用于选择元素
    动态页面
    可以不用等数据取出来，先显示页面再去取数据，快的多
    