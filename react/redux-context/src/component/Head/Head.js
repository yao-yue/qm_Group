import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Head extends Component {
     static contextTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
//   static contextTypes = {
//     store: PropTypes.object
//   }

//   constructor(props) {
//     super(props)
//     this.state = {}
//   }


     _upState() {
    const { store } = this.context
    this.setState({
      ...store
    })
  }

      // 渲染之前
  componentWillMount = () => {
    this._upState()
  }

  render() {
    return (
      <div className="head">
        {this.state.head}
      </div>
    )
  }


}
// (*^▽^*)(*^▽^*)(*^▽^*)(*^▽^*)