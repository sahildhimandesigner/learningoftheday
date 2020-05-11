import React from 'react';
import withStyles from 'react-jss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios-instance';

import { Error } from '../../components';
import { Header, Button, AddPostModal, Footer, Wrapper, Headings } from '../../components';
import LoginBoxStyle from './style';
import { colors } from '../../theme/colors';

const User = ({classes}) => {
	return (
		<div>
			<Header/>
			<Wrapper>
			<div className={classes.outerDiv}>
			<div className={classes.inputBox}>
				<Headings as='h3'>Sign up</Headings>
			</div>
				<Formik
				initialValues = {{
					email: '',
					password: ''
				}}
				validationSchema={
					Yup.object().shape({
						email: Yup.string()
							.required('Please enter your email').
							email('Please enter a valid email'),
						password: Yup.string()
							.required('Please enter your password')
					})
				}
				onSubmit={(values, {setSubmitting, resetForm}) => {
					const authData = {
				        email: values.email,
				        password: values.password,
				        returnSecureToken: true
				    }
					const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkKPuqWYTit1LST92RUunx31ozUhGpwhQ';
					axios.post(url, authData)
						.then(response => {
							const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
			                localStorage.setItem('token', response.data.idToken);
			                localStorage.setItem('expirationDate', expirationDate);
			                localStorage.setItem('userId', response.data.localId);
						})
						.catch(error => {
							console.log('error', error);
						})
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
						<div className={classes.inputBox}>
							<input
								id="email"
								placeholder="Enter your email"
								type="text"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}/>
							<Error touched={touched.email} message={errors.email} />
						</div>
						<div className={classes.inputBox}>
							<input
								id="password"
								placeholder="Enter your password"
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}/>
							<Error touched={touched.password} message={errors.password} />
						</div>
						<div className={classes.buttonDiv}>
							<Button
								spacing='20px 0 0 0'
              					type="submit"
              					backgroundColor={`${colors.primaryColor}`}
								disabled={isSubmitting}
							>Submit</Button>
						</div>
					</form>
				)}			
				</Formik>
			</div>
			</Wrapper>
		</div>
	);	
}

export default withStyles(LoginBoxStyle)(User);