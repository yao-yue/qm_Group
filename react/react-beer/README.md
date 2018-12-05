yarn add react-router-dom prop-types

- import { Link } from 'react-router-dom';
- import ProTypes from 'prop-types';    //传参的类型限制

单页面应用  当然要路由。
根组件APP  路由接管一切。
按照URL 分发组件(Page级别组件)
根路由App|
        |——-> path '/'  页面级别A组件(Page) ->  容器组件(Container) -> 函数式组件(Present)
        |——-> path '/'  页面级别B组件(Page) ->  容器组件(Container) -> 函数式组件(Present)

- Link 
a 太弱了， 所以react-router 给了我们Link组件
to href params ... 满足单页应用需要的一切
- h5 history api 更新url 页面不用刷新
- ref react 里的id 可以利用它找到JSX的片段
        React.createRef() 返回一个不重复的id
        this.searchRef.current
- context 最后一个大佬 上下文环境 component lifecycle state,事件 函数式组件
        this.context.router.history.push('/search/:')  当前页面为栈顶