import React, { Component } from 'react'
import Head from './component/Head/Head'
import Body from './component/Body/Body'
// 在组件中static 一定要给他传这个参数
import PropTypes from 'prop-types'

export default class App extends Component {
    //新的API context
    // 在这个属性里的值，在内部 打破层次，拿到在顶级组件共享的状态 
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext () {
        const state = {
            head: 'This is global head!',
            body: 'This is global body!',
            headBtn: 'modifity head!',
            bodyBtn: 'modifity body!'       
        }
        return {
            store:state
        }
    }
    render() {
        return (
            <div className="App">
                <Head />
                <Body />
            </div>
        )
    }
}