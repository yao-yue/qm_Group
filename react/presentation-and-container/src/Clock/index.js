import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock.js'


export default class ClockContainer extends React.Component {
  constructor (props) {
    super(props);
    // time setInerval  
    this.state = {
      time: props.time
    }
  }

  componentDidMount () {
    this._interval = setInterval(this._update , 1000)   //一秒一次更新
  }

  _update =  () => {                          //把时间增加一秒
    this.setState({
      time: new Date(this.state.time.getTime() + 1000)
    })
  }

  _exact = (time) => {                      //state里面的time 格式化 -> hour:min:seconds
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    }
  }

  render () {
    //   const { hours, minutes, seconds } = this._exact(this.state.time);
    // return (
    //   <div>
    //       {hours}:{minutes}:{seconds}
    //   </div>
    // )
    return <Clock {...this._exact(this.state.time)}/>
  }
}

ClockContainer.propTypes = {
  time: PropTypes.object.isRequired
}
