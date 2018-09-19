-可以用html表达的一定不要用图
-inline 元素不能直接设置宽与高
    display:inline-block   不会像block一样挤掉别的元素

节日活动页
bg.jpg 是雪碧图 sprites 集成图片
网页打开速度，速度是一切。
速度杀手是 http请求数 
img src
link href
script src
http 请求去下载
html 此外，并发http请求数是有限的
html css类名， 积累取名词汇量

页面先打底，bg总管页底.

背景很华丽，页面写法很难
将背景分离出来盒子，单独做，用bg-$n 组合将背景铺在下面 
z-index 上下铺的关系 
.bg z-index: 1
.main z-index: 2
.bg position: absolute 定位之后离开正常的文档流，main 将会和他重合。