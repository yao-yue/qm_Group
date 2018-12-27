import React  from 'react'
import  loadingImg  from './loading.gif'
import './loading.styl'

export default class loading extends React.Component {
  render() {
      let displayStyle = this.props.show === true ? {display: ""}:{display: "none"};
    return (
      <div className="loading-container" style={displayStyle}>
        <div className="load-wrapper">
            <img src={loadingImg} alt="loadImg" width="18px" height="18px" />
            <div className="load-title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}
