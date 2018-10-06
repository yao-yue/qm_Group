- css  命名规范 BEM
  Block
    页面是由多个Block 构成的，跟其他的block区分开来，tabbar
  Element __
    在区块中担负的职责取唯一性的名字
    并不是简单的父子关系
    __laber 
    __icon
  Modifier 
    状态的修改

- WEUI
 微信UI规范，内嵌公众号，小程序，调起webview，为了让用户体验一致，让用户有认同感。
 mobile web app
 前端框架 weui.css
- 组件
  大部分的项目，70%都是由通用组件构成的，组件，拿来就用。
  1. tarbar 
  .tabbar > a.item > (span>img+span.badge)+p
  词汇量 组件词汇tabbar badge(徽章) 一般词汇item
  良好的结构和语义化标签
  flex 1:1:1



http 状态码 
有状态码方便分析
2开头的都是好事  200
3开头   重定向 跳转
4开头   404 not found 资源没找到
        403 资源不可用,服务器限制访问
5开头   错误  语法错误、致命错误
