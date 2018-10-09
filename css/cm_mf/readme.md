- 浏览器显示html+css
  1. html文件
  html标签， dom 树
  解析文档树
  解析CSS 渲染树
  放置元素 计算出来

  BFC
1. 给父元素加上overflow:hidden 可以创建一个格式化上下文环境，定义它可以得到子元素的高度

- stylus
  css 预编译系统 语法规则，
  写的是.styl文件， stylus编译成CSS文件
  1. 省去了很多的约定

  stylus style.styl -o css.css
  使用stylus编译.styl文件 输出到css.css文件

  stylus构建css开发工作流程
  代码写在.styl文件中
  浏览器要的是.css文件
  stylus -w style.styl -o style.css
  live-server 监听CSS文件的改变自动刷新页面
