import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';    //传参的类型限制

class Header extends Component {
    //静态只需要定义一次 不需要实例化的时候重新定义 属于这个类的定义
    static propTypes = {
        stieName: PropTypes.string
    }
    render () {
        return (
            <h1>
                {/* a 将完全被接管 首页/  */}
                <Link to="/">{this.props.siteName}</Link>
            </h1>
        )
    }
}
export default Header;