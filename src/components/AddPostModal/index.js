import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { Formik, Field } from 'formik';
import { validationSchema } from './ValidationSchema';
import { Button, Error, Headings, Modal } from '../index';
import closeIcon from '../../images/close-icon.svg';
import { colors } from '../../theme';
import AddPostStyle from './style';
import Editor from './../Editor'

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
        <Formik
          initialValues={{
            addTitle: '',
            addPost: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(true);
            props.submitHandler(values);
            resetForm();
            setSubmitting(false);
          }
        }
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
                <Field 
                  component={Editor}        
                  name="addPost"
                  className={(touched.addPost && errors.addPost) ? classes.hasError: ''}
                />
                <Error touched={touched.addPost} message={errors.addPost} />
              </div>
              <div className={classes.modalFooter}>
                <Button
                  type="submit"
                  backgroundColor={`${colors.primaryColor}`}
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
