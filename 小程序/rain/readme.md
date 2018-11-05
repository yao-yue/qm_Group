canvas 游戏及特效
小程序里面canvas 大小是px scale比例
绘图API跟web中有区别

ctx + 绘图api  将绘制的细节封装出去
画布 wx.createCanvasContext() 跟web不一样的地方 他的实现使用了IOS/Android的一套
封装？  绘图这块，封装到utils里
canvas-id="effect"
ctx，
画布的大小， 解构 width scale height
drawEffect(with, height, scale, ...)

utils 
小程序里面canvas特效只是一部分，将他抽象封装，有利于将复杂部分隐去，试和多人合作