import React, { useState } from 'react';
import axios from '../../axios-instance';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Modal, Headings, Button } from '../index';
import closeIcon from '../../images/close-icon.svg';
import { colors } from '../../theme';
import AddPostStyle from './style';

const AddPostModal = ({ classes, cancelModal }) => {
  console.log(cancelModal, 'cancelModal');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPost, setEnteredPost] = useState('');

  const submitHandler = () => {
    axios.post('/learningPosts.json', {
      title: enteredTitle,
      post: enteredPost,
      date: new Date()
    })
    .then(() => {
      cancelModal();
    })
    .catch(error => console.log(error));
  }

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
            placeholder='Add titile here...'
            value={enteredTitle}
            onChange={event => {
              setEnteredTitle(event.target.value)
            }}/>
        </div>
        <div className={classes.formGroup}>
          <textarea
            id="addPost"
            rows="6"
            cols="50"
            placeholder='Add post here...'
            value={enteredPost}
            onChange={event => {
              setEnteredPost(event.target.value)
            }} />
        </div>
      </div>
      <div className={classes.modalFooter}>
        <Button spacing='20px 0 0 0'
          backgroundColor={`${colors.primaryColor}`}
          onClick={submitHandler}>Submit</Button>
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
