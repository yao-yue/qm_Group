redux 父子组件、兄弟组件传值很麻烦
context 新的希望 react-redux 基于他实现  

全局状态可以打破层次关系 实现共享
redux 太笨重了 要装一个redux  react-redux 
redux？   
新-> context 

- context API redux 依靠它    react-redux 底层也是他
childContextTypes = {
    store: PropTypes.Object 
}
getChildContext () {    
    return {
        store: {`对象`}
    }
}

context 用法 四步  
- ChildContextTypes 顶层组件中规定类型 
- getChildContext 顶层组件中设置数据
- 后代组件通过contextTypes 规定数据类型 
- 后代组件this.context 获取数据


太烦了，不是react数据流的语法烦，
context api代码的重复  dry   dont repeat yourself
生命周期 _setUp() contextTypes -----connect---- react-redux HOC 高阶组件封装

HOC 高阶组件

-  connect 封装，有关的context的操作都交给他
-  后代组件，只需要做自己的事情。


