- 模板里要有if else\for 指令
模板里存在业务逻辑  wx:if  wx:else  wx:for

block 
<view> 是一个组件，会在页面上做渲染；<block>不是一个组件，它仅仅是一个包装元素，只接受控制属性，不会在页面中做任何渲染

- 界面状态  登录前，登录后状态
- 数据驱动界面状态 
    hasUserInfo  true\flase 决定了界面有两种状态 wx:if wx:else

- 微信的生态及机制
    小程序，获取用户信任和信息
    在微信里面，小程序分享到讨论组

    用户信息，是隐私信息，要获取用户的许可

    button 询问 特殊的按钮 open-type="getUserInfo" bindgetuserinfo="getUserInfo"
    block  显示的过程
    非常直接

- setData()
    改变data里面数据的值，并且拥有让界面里相关的部分热更新的能力

- wx:key 
循环一定加唯一性的Key，减少性能开销
一个列表值发生改变，如果直接替换整个列表的wxml，浪费性能
有Key，会找到相应的那个，进行更新

- 设计数据
lists = [已完成2项，未完成8项]
lists 全部列表
doneLists = [已经完成的任务]
undoneLists = []
v-for="{{lists}}"

不是传统的点击事件发生了，而是UI状态变化了
currentState = 'all'
v-if + v-for

- 界面状态
    多种状态
    1. tabbar的状态 .active UI状态  => 数据驱动currentState = 'all'
    2. 任务列表 列表数据，UI状态     => 除了lists之外，只加一个currentList(做过滤)
 
    