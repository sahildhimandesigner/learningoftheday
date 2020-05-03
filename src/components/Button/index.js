import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import buttonStyle from './style';

const Button = ({ classes, children='Submit', onClick }) => {
    return (        
        <div>
            <button onClick={onClick} className={classes.btnStyle}>{children}</button>
        </div>
    )
}

Button.propTypes = {
    classes: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node,    
};

export default withStyle(buttonStyle)(Button);