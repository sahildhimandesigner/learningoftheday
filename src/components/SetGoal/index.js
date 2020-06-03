import React from 'react'
import { Formik, Field } from 'formik';
import { validationSchema } from './ValidationSchema';
import { Button, Error } from '../index';
import Editor from './../Editor'
import { colors } from '../../theme';
import SetGoalStyle from './style'
import withStyle from 'react-jss'


const SetGoal = ({classes}) => {
    return(
        <div>
            <Formik
                initialValues={{
                    goalName: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values, 'set goal')
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
                                id="goalName"
                                placeholder='Enter title here'
                                type="text"
                                name="goalName"
                                value={values.goalName}            
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={(touched.goalName && errors.goalName) ? classes.hasError: ''}
                                />
                            <Error touched={touched.goalName} message={errors.goalName} />
                        </div>

                        <div className={classes.formGroup}> 
                            <input
                                id="startDate"
                                placeholder='Enter title here'
                                type="text"
                                name="startDate"
                                value={values.startDate}            
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={(touched.startDate && errors.startDate) ? classes.hasError: ''}
                                />
                            <Error touched={touched.startDate} message={errors.startDate} />
                        </div>
                        <div className={classes.formGroup}> 
                            <input
                                id="endDate"
                                placeholder='Enter title here'
                                type="text"
                                name="endDate"
                                value={values.endDate}            
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={(touched.endDate && errors.endDate) ? classes.hasError: ''}
                                />
                            <Error touched={touched.endDate} message={errors.endDate} />
                        </div>                        
                        <div className={classes.formGroup}> 
                            <Field 
                                component={Editor}        
                                name="description"
                                className={(touched.description && errors.description) ? classes.hasError: ''}
                            />
                            <Error touched={touched.description} message={errors.description} />
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
    )
}

export default withStyle(SetGoalStyle)(SetGoal);