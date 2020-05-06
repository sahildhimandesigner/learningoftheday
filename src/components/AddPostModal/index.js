import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Formik } from 'formik';
import { validationSchema } from './ValidationSchema';
import { Button, Error, Headings, Modal } from '../index';
import closeIcon from '../../images/close-icon.svg';
import { colors } from '../../theme';
import AddPostStyle from './style';

const AddPostModal = ({ classes, cancelModal, ...props }) => {
  console.log(props, 'PROPS');
  const handleSubmit = () => {
    console.log('Working')
  };

  return(
    <Modal>
      <div className={classes.ModalHeader}>
        <Headings as='h3'>Add Post</Headings>
        <span className={classes.closeIcon} onClick={cancelModal}>
          <img src={closeIcon} alt='Icon' />
        </span>
      </div>
      <div className={classes.modalBody}>
        <Formik
          initialValues={{
            addName: '',
            addTitle: '',
            addPost: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.formGroup}>
                <input
                  id="addName"
                  placeholder='Enter full name'
                  type="text"
                  name="addName"
                  value={values.addName}                  
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={(touched.addName && errors.addName) ? classes.hasError: ''}
                />
                <Error touched={touched.addName} message={errors.addName} />
              </div>
              <div className={classes.formGroup}> 
                <input
                  id="addTitle"
                  placeholder='Enter title here'
                  type="text"
                  name="addTitle"
                  value={values.addTitle}            
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={(touched.addTitle && errors.addTitle) ? classes.hasError: ''}
                />
                <Error touched={touched.addTitle} message={errors.addTitle} />
              </div>
              <div className={classes.formGroup}>
                <textarea
                  id="addPost"
                  rows="6"
                  cols="50"
                  placeholder='Add post here...'
                  type="text"
                  name="addPost"
                  value={values.addPost}                  
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={(touched.addPost && errors.addPost) ? classes.hasError: ''}
                />
                <Error touched={touched.addPost} message={errors.addPost} />
              </div>
              <div className={classes.modalFooter}>
                <Button spacing='20px 0 0 0'
                  backgroundColor={`${colors.primaryColor}`}
                  onClick={props.submitHandler}
                  disabled={isSubmitting}
                  >Submit</Button>
              </div>
            </form>
          )}
        </Formik>
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
