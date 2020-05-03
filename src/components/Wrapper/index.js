import React from 'react'
import withStyle from 'react-jss'
import WrapperStyle from './style'
import PropTypes from 'prop-types';

const Wrapper = ({ classes, children }) => {
    return (
        <div className={classes.containe}>
            { children }
        </div>
    )
}

Wrapper.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node
}

export default withStyle(WrapperStyle)(Wrapper);

