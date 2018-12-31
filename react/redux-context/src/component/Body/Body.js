import React, { Component } from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import { connect } from '../../redux';


class Body extends Component {
    // 使用这个属性  context {...}
    // 原生实现组件信息共享

    // 顶级组件  static childContextTypes
    // 用法  子组件
//     static contextTypes = {
//         store: PropTypes.object,
//         subscribe: PropTypes.func,
//         getStore: PropTypes.func,
//     }
//   // 渲染之前
//   componentWillMount = () => {
//     const { subscribe } = this.context;
//     this._upState()
//     //产生订阅关系
//     // 接受一个函数作为参数  把他放入listener数组里面
//     subscribe(() => this._upState());
//   }
//   _upState() {
//     const { getStore } = this.context
//     this.setState({
//       ...getStore()
//     })
//   }

    render () {
        return (
            <div>
                <div className="body">{this.props.body}</div>
                <Button/>
            </div>
            
        )
    }
}
export default  connect(Body);