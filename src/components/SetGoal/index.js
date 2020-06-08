import React from 'react'
import { Formik, Field } from 'formik';
import { validationSchema } from './ValidationSchema';
import { Button, Error, Wrapper } from '../index';
import Editor from './../Editor'
import { colors } from '../../theme';
import SetGoalStyle from './style'
import withStyle from 'react-jss'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { Headings } from '../../components'

const SetGoal = ({classes, ...props}) => {

    return(
        <Wrapper  
                    background="#FFF" 
                    marginTop="50px" 
                    RoundCorner="30px" 
                    padding="40px 30px">
        <div className={classes.goalContainer}>
            <Headings as="h2">Set Your Goal</Headings>
            <Formik
                initialValues={{
                    goalName: '',
                    startDate: new Date(),
                    endDate: new Date(),
                    description: '',
                }}
                validationSchema={validationSchema}

                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    props.submitGoalHandler(values);
                    resetForm();
                    setSubmitting(false);
                    console.log(values)
                }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue
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
                            <DatePicker 
                                selected={values.startDate}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                                name="startDate"
                                onChange={date => setFieldValue('startDate', date)}
                                className={(touched.startDate && errors.startDate) ? classes.hasError: ''}
                            />
                            <Error touched={touched.startDate} message={errors.startDate} />
                        </div>                                            
                        <div className={classes.formGroup}> 
                             <DatePicker 
                                selected={values.endDate}
                                dateFormat="MMMM d, yyyy"
                                className="form-control"
                                name="endDate"
                                onChange={date => setFieldValue('endDate', date)}
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
        </div></Wrapper>
    )
}

export default withStyle(SetGoalStyle)(SetGoal);