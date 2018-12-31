import React, { Component } from 'react'
import Head from './component/Head/Head'
import Body from './component/Body/Body'
// 在组件中static 一定要给他传这个参数
import PropTypes from 'prop-types'
import { crateStore, storeChange } from './redux'


export default class App extends Component {
    //新的API context
    // 在这个属性里的值，在内部 打破层次，拿到在顶级组件共享的状态 
    // static childContextTypes = {
    //     store: PropTypes.object,
    //     dispatch: PropTypes.func,
    //     subscribe: PropTypes.func,
    //     getStore: PropTypes.func,
    // }
    //第二步返回一个store
    // getChildContext () {
        
    //     const {store, dispatch,subscribe, getStore } = crateStore(state, storeChange)
    //     return {
    //         store,
    //         dispatch,
    //         subscribe,
    //         getStore
    //     }
    // }

    
    render() {
        return (
            <div className="App">
                <Head />
                <Body />
            </div>
        )
    }
}