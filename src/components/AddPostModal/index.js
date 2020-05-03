import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Modal, Headings, Button } from '../index';
import closeIcon from '../../images/close-icon.svg';
import { colors } from '../../theme';
import AddPostStyle from './style';

const AddPostModal = ({ classes, cancelModal }) => {
  const [error, setError] = useState('');
  return(
    <Modal>
      <div className={classes.ModalHeader}>
        <Headings as='h3'>Add Post</Headings>
        <span className={classes.closeIcon} onClick={cancelModal}>
          <img src={closeIcon} alt='Icon' />
        </span>
      </div>
      <div className={classes.modalBody}>
        <div className={classes.formGroup}>
          <input id="addTitle" placeholder='Add titile here...' />
        </div>
        <div className={classes.formGroup}>
          <textarea id="addPost" rows="6" cols="50" placeholder='Add post here...' />
        </div>
      </div>
      <div className={classes.modalFooter}>
        <Button spacing='20px 0 0 0' backgroundColor={`${colors.primaryColor}`}>Submit</Button>
      </div>
    </Modal>
  )
};

AddPostModal.propTypes = {
  classes: PropTypes.object,
};

AddPostModal.defaultProps = {
  classes: {},
};

export default withStyles(AddPostStyle)(AddPostModal);
