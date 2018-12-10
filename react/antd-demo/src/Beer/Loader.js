import React from 'react';
import PropTypes from 'prop-types'


const Loader = (props) => {
    return (
        <div className="Loading">
            <img src="./images/ball.svg" alt="Loading ..." />
            <h2>{props.message}</h2>
        </div>
    )
}

Loader.propTypes = {
    message: PropTypes.string
}

export default Loader;

