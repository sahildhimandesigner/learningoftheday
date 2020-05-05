import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Modal, Headings, Button } from '../index';
import closeIcon from '../../images/close-icon.svg';
import { colors } from '../../theme';
import AddPostStyle from './style';

const AddPostModal = ({ classes, cancelModal, ...props }) => {
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
          <input
            id="addTitle"
            placeholder='Add title here...'
            value={props.titleValue}
            onChange={(event) => props.addedTitle(event.target.value)}/>
        </div>
        <div className={classes.formGroup}>
          <textarea
            id="addPost"
            rows="6"
            cols="50"
            placeholder='Add post here...'
            value={props.contentValue}
            onChange={(event) => props.addedPost(event.target.value)}/>
        </div>
      </div>
      <div className={classes.modalFooter}>
        <Button spacing='20px 0 0 0'
          backgroundColor={`${colors.primaryColor}`}
          onClick={props.submitHandler}
          >Submit</Button>
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
