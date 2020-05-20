import React from 'react'
import { Headings, Wrapper, Error, Button } from '../index';
import { Formik } from 'formik';
import { validationSchema } from './ValidationSchema';
import UserCommentStyle from './style'
import withStyles from 'react-jss';

const UserComment = ({ colors, classes, ...props }) => {    

    return (
        <Wrapper flexFlow="column">
            <div className={classes.commentContainer}>                
                <Headings as='h1'>Add Comment</Headings>
                <Formik 
                    initialValues={{
                        userName:'',
                        addComment: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);
                        props.submitUserCommentHandler(values);
                        resetForm();
                        setSubmitting(false);
                    }}
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
                                    id="userName"
                                    placeholder='Enter Your Name'
                                    text="text"
                                    name="userName"
                                    value={values.userName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={(touched.addName && errors.addName) ? classes.hasError: ''}
                                 />
                                 <Error touched={touched.userName} message={errors.userName} />
                             </div>
                             <div className={classes.formGroup}>
                                <textarea
                                    id="addComment"
                                    rows="6"
                                    cols="50"
                                    placeholder='Add post here...'
                                    type="text"
                                    name="addComment"
                                    value={values.addPost}                  
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={(touched.addPost && errors.addPost) ? classes.hasError: ''}
                                  />
                                <Error touched={touched.addComment} message={errors.addComment} />
                             </div>

                             <div>
                                 <Button spacing='20px 0 0 0'
                                    type="submit"                            
                                    disabled={isSubmitting}  
                                    className={classes.postComment}                                  
                                    >
                                     Post Comment
                                 </Button>
                             </div>
                         </form>
                     )}
                </Formik>
                <Headings as='h6'>Comments: {props.count}</Headings>
            </div>
        </Wrapper>
    )
}

export default withStyles(UserCommentStyle)(UserComment);