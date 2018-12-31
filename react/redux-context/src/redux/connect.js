import React, { Component } from 'react'
import PropTypes from 'prop-types'


export const connect = (Comp, PropTypes) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object, 
            dispatch: PropTypes.func,   
            subscribe: PropTypes.func,  
            getStore: PropTypes.func,   // 返回状态树的方法
            ...PropTypes
        }
        constructor (props) {
            super(props);
            this.state = {
                dispatch: () => {}     //
            }
        }
        componentWillMount = () => {
            const { subscribe,dispatch } = this.context;
            this.setState({
                dispatch
            })
            this._upState();
            subscribe(() => this._upState());   //哪里用到状态 就把他添加订阅
        }
        _upState () {
            const { getStore } = this.context;
            this.setState({
                ...getStore()     // 把所有的store解构在stroe里面
            })
        }
        render () {
            return (
                <div className="connect">
                    <Comp {...this.state}/>
                </div>
            )
        }
    }
    return Connect;
    // hoc :heigh order Component
}