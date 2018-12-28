import React, { Component } from 'react'
import PropTypes from 'prop-types'

// redux 独立的数据流管理架构

export default class Button extends Component {
  static contextTypes = {
    store: PropTypes.object,
    subscribe: PropTypes.func,
    getStore: PropTypes.func,
    dispatch: PropTypes.func
  }
  // 渲染之前
  componentWillMount = () => {
    const { subscribe } = this.context;
    this._upState()
    //产生订阅关系
    // 接受一个函数作为参数  把他放入listener数组里面
    subscribe(() => this._upState());
  }
  _upState() {
    const { getStore } = this.context
    this.setState({
      ...getStore()
    })
  }
  changeContext = (type) => {
    const { dispatch } = this.context;
    dispatch({
      type,
      payload: `我是修改后的${type}`
    })
  }
  render() {
    return (
      <div className="button">
        <div className="btn" onClick={()=> this.changeContext('HEAD')}>{this.state.headBtn}</div>
        <div className="btn" onClick={()=> this.changeContext('BODY')}>{this.state.bodyBtn}</div>
      </div>
    )
  }
}

