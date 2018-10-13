- weui 结合小程序开发
  weui 是微信like 的界面解决方案，适用于公众号，小程序快速界面开发
  1. 引入weui.wxss文件
  2. 来到weui组件官网，要用哪个用哪个， 覆盖了70%的常用组件
  
- MVVM
    M 数据-模型
    V View 页面-视图
    VM 数据绑定到界面上 视图模型层  -> 模板{{}}

    几种状态： 
    username 数据  输入前，输入后   状态的改变带来数据的改变  维护状态保持input内的值和username一致
    input    视图
    数据跟Input步调一致
    拒绝使用dom查询

    V -- VM -- M  用VM来绑定，数据驱动界面

