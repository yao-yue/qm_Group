import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Search extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    //生成名片 类似id的唯一作用
    searchRef = React.createRef();
    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.searchRef.current.value;
        this.context.router.history.push(`/search/${searchTerm}`);
    }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
            <input type="text" ref={this.searchRef} placeholder="hoppy Malt Angry 百威..."/>
            <input type="submit" value="search"/>
        </form>
      </div>
    )
  }
}
