import React from 'react';
import PropTypes from 'prop-types';
import withStyle from 'react-jss';
import buttonStyle from './style';

const Button = ({ classes, children='Submit', ...props}) => {
    return (        
        <div>
            <button
            	type={props.type ?? 'button'}
            	onClick={props.onClick}
            	className={classes.btnStyle}
            	disabled={props.disabled}>{children}</button>
        </div>
    )
}

Button.propTypes = {
    classes: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node,    
};

export default withStyle(buttonStyle)(Button);