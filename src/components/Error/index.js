import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import ErrorStyle from './styles';

const Error = ({ touched, message, classes }) => {
  if (!touched) {
    return null;
  }
  if (message) {
    return <div className={classes.errorMessage}>{message}</div>
  }
  return null;
};

Error.propTypes = {
  classes: PropTypes.object,
};

Error.defaultProps = {
  classes: {},
};

export default withStyles(ErrorStyle)(Error);