import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from '../../redux';

class Head extends Component {
  // static contextTypes = {
  //   store: PropTypes.object,
  //   subscribe: PropTypes.func,
  //   getStore: PropTypes.func,
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  //   static contextTypes = {
  //     store: PropTypes.object
  //   }
  //   constructor(props) {
  //     super(props)
  //     this.state = {}
  //   }


  // // 渲染之前
  // componentWillMount = () => {
  //   const { subscribe } = this.context;
  //   this._upState()
  //   //产生订阅关系
  //   // 接受一个函数作为参数  把他放入listener数组里面
  //   subscribe(() => this._upState());   //添加订阅 传与渲染有关的函数
  // }
  // _upState() {
  //   const { getStore } = this.context
  //   this.setState({
  //     ...getStore()
  //   })
  // }
  render() {
    return (
      <div className="head">
        {this.props.head}
      </div>
    )
  }
}

const propTypes = {
  store: PropTypes.object,
}
export default connect(Head, PropTypes);