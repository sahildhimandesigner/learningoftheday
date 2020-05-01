import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'react-jss';
import HeadingStyle from './style';

const Headings = ({ classes, children, headingProps, as }) => {
  switch(as) {
    case 'h1':
      return <h1 className={classes.h1} {...headingProps}>{children}</h1>
    case 'h2':
      return <h2 className={classes.h2} {...headingProps}>{children}</h2>
    case 'h3':
      return <h3 className={classes.h3} {...headingProps}>{children}</h3>
    case 'h4':
      return <h4 className={classes.h4} {...headingProps}>{children}</h4>
    case 'h5':
      return <h5 className={classes.h5} {...headingProps}>{children}</h5>
    case 'h6':
      return <h6 className={classes.h6} {...headingProps}>{children}</h6>
    default :
     return <p className={classes.p} {...headingProps}>{children}</p>
  }
}

Headings.propTypes = {
  as: PropTypes.node,
  classes: PropTypes.object,
  children: PropTypes.node,
  headingProps: PropTypes.object,
};

Headings.defaultProps = {
  as: 'p',
  classes: {},
  headingProps: {},
}

export default withStyles(HeadingStyle)(Headings);
