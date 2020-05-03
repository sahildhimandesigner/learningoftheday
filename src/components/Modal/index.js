import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import modalStyle from './style';

const Modal = ({ children, classes, className, close }) => {

  const modalId = 'custom-modal';

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    window.onclick = (event) => {
      if(close && event.target.id === modalId) {
        close();
      }
    }

    return () => {
      document.body.style.overflow = '';
      if(close) {
        window.onclick = null;
      }
    }
  });

  if(!children) {
    return (<></>);
  }

  return(
    <div id={modalId} className={`${classes.modal} ${className} `}>
      <div className={classes.modalContent}>
        {children}
      </div>
    </div>
  )
};

Modal.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.func,
};

Modal.defaultProps = {
  classes: {},
  className: '',
};

export default withStyles(modalStyle)(Modal);
