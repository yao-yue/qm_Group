import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    searchRef = React.createRef()

    //箭头函数规避掉this丢失
    handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = this.searchRef.current.value;
        console.log(this.context.router);
        //路由传值   url改变
        this.context.router.history.push(`/search/${searchTerm}`);
    }

    render () {
        return (
            <div className="search" >
                <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.searchRef} placeholder="南昌8度, 百威"/>
                <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}
export default Search;