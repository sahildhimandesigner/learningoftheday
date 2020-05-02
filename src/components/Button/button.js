import React from 'react'
import withStyle from 'react-jss'
import buttonStyle from './style'
import PropTypes from 'prop-types';

const Button = ({ classes, children='Submit' }) => {
    return (        
        <div>
            <button className={classes.btnStyle}>{children}</button>
        </div>
    )
}

Button.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,    
};

export default withStyle(buttonStyle)(Button);