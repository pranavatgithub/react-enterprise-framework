import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <button>{props.name}</button>
    )
}

/**
 * MODEL
 */
Button.propTypes = {
    name: PropTypes.string
}

Button.defaultProps = {
    name: 'BTN'
}
