import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {storeChange, createStore } from '../redux';

export default class Provider extends Component {   //接管全局App
    static childrenContextTypes = {     // ChildContextTypes 顶层组件中规定类型 
        store: PropTypes.object,
        dispatch: PropTypes.func,
        subscribe: PropTypes.func,
        getStore: PropTypes.func,
    }
    getChildContext() {
        const state = this.props.store;    
        const { store,dispatch,subscribe,getStore } = createStore(state, storeChange);
        return {
            store,
            dispatch,
            subscribe,
            getStore
        }
    }
    render() {
        return (
            <div className="provider">
                {this.props.children}
            </div>
        )
    }
}