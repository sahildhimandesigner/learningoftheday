import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Modal, Headings } from '../index';
import AddPostStyle from './style';
import closeIcon from '../../images/close-icon.svg';

const AddPostModal = ({ classes, cancelModal }) => {
  return(
    <Modal>
      <div className={classes.ModalHeader}>
        <Headings as='h3'>Add Post</Headings>
        <span className={classes.closeIcon} onClick={cancelModal}>
          <img src={closeIcon} alt='Icon' />
        </span>
      </div>
      <div className={classes.modalBody}>
        <textarea id="addPost" rows="6" cols="50"></textarea>
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
