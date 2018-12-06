#hashtag  
可以跳转到你标记好的位置
在当前页面进行切换 本页面不会刷新。

单页应用
hashchange 事件, 组件的动态加载
#hashtag => url 的一部分 
路由接管
点击hashtag 会引起url的改变

- 传统的地址切换有以下问题
1. 重度依赖于 http协议
    重新发起http请求
  当只有后端路由时，会重新生成整个页面，有些浪费，新的页面又要重新dom渲染的过程（页面会白一下），比较慢影响体验
    页面白以下（target:blank)
- 新时代的路由
    history api , 或有hashtag 不会产生页面的跳转 但是我们可以捕捉到这个事件，马上切换出相应的组件

- history API 
    浏览的url访问， 都是浏览器中的一个访问记录，数据结构里面的栈。
    window.history.pushState(null, null, '#hello') 入栈一个浏览历史
    pop
    可以给我们的访问记录新增一个记录，但是不会刷新页面，得到一个popstate事件，页面组件的切换
    前端路由已经成熟，即可以hash亦可以path 切换path切换 交给pushState
    
    有着那一刻的react
     //pushState(data(对应react的组件) title url)
