redux 父子组件、兄弟组件传值很麻烦
context 新的希望 react-redux 基于他实现  

全局状态可以打破层次关系 实现共享
redux 太笨重了 要装一个redux  react-redux 
redux？   
新-> context 

- context API redux 依靠它 
childContextTypes = {
    store: PropTypes.Object 
}
getChildContext () {    
    return {
        store: {`对象`}
    }
}