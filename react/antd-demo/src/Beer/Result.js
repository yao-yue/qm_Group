import React, { Component } from 'react';
import Detail from './Detail';

export default class Result extends Component {
  render () {
    return (
      <div className="results">
        <div className="beers">
          {this.props.beers.map((beer, i) => <Detail beer={beer} key={i}/>)}
        </div>
      </div>
    );
  }
}
