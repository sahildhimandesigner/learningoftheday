import React from 'react'
import withStyle from 'react-jss'
import ContainerStyle from './style'
import PropTypes from 'prop-types';

const Container = ({ classes, children }) => {
    return (
        <div className={classes.containe}>
            { children }
        </div>
    )
}

Container.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node
}

export default withStyle(ContainerStyle)(Container);

