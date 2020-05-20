import React, { useState } from 'react';
import withStyles from 'react-jss';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from '../../axios-instance';

import { Error } from '../../components';
import { Header, Button, Footer, Wrapper, Headings } from '../../components';
import LoginBoxStyle from './style';
import { colors } from '../../theme/colors';

const User = ({classes, ...props}) => {
	const [signInTrue, setSignInTrue] = useState(true);
	const validationSchema = {
			email: Yup.string()
				.required('Please enter your email').
				email('Please enter a valid email'),
			password: Yup.string()
				.required('Please enter your password')
		};
	if (!signInTrue) {
		validationSchema.firstName = Yup.string()
				.required('Please enter your first name');
		validationSchema.lastName = Yup.string()
				.required('Please enter your last name');
	}
	return (
		<div>
			<Header {...props}/>
			<Wrapper>
			<div className={classes.outerDiv}>
				<div className={classes.inputBox}>
					<Headings as='h3'>Sign {signInTrue ? 'in' : 'up'}</Headings>
				</div>
				<Formik
				initialValues = {{
					firstName: '',
					lastName: '',
					email: '',
					password: ''
				}}
				validationSchema={
					Yup.object().shape(validationSchema)
				}
				onSubmit={(values, {setSubmitting, resetForm}) => {
					const authData = {
				        email: values.email,
				        password: values.password,
				        returnSecureToken: true
				    }

					let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkKPuqWYTit1LST92RUunx31ozUhGpwhQ';

					if (signInTrue) {
						url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkKPuqWYTit1LST92RUunx31ozUhGpwhQ';
					}					

					axios.post(url, authData)
						.then(response => {
							let userData = ''
							if (!signInTrue) {
								const userData = {
						    		firstName: values.firstName,
						    		lastName: values.lastName,
						    		authId: response.data.localId
						    	};

						    	axios.post('/users.json', userData)
							    	.then(() => {
							    		storeDataInStorage(userData.firstName, userData.lastName, response);
							    	})
									.catch(error => {
										console.log('error', error);
									});
							} else {
								axios.get(`users.json?orderBy="authId"&equalTo="${response.data.localId}"`)
								.then(getResponse => {								
									const userName = Object.values(getResponse.data)[0];
									storeDataInStorage(userName.firstName, userName.lastName, response);
								})
							}							
						})
						.catch(error => {
							console.log('error', error);
						})

					const storeDataInStorage = (firstName, lastName, response) => {
						localStorage.setItem('firstName', firstName);
						localStorage.setItem('lastName', lastName);
						const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
		                localStorage.setItem('token', response.data.idToken);
		                localStorage.setItem('expirationDate', expirationDate);
		                localStorage.setItem('userId', response.data.localId);
		                props.authState();
		                props.history.push('/');
					}
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
				}) => {
					const additionalFields = 
						!signInTrue ? (
						<div>
							<div className={classes.inputBox}>
								<input
									id="firstName"
									placeholder="Enter your tirst name"
									type="text"
									name="firstName"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}/>
								<Error touched={touched.firstName} message={errors.firstName} />
							</div>
							<div className={classes.inputBox}>
								<input
									id="lastName"
									placeholder="Enter your last name"
									type="text"
									name="lastName"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}/>
								<Error touched={touched.lastName} message={errors.lastName} />
							</div>
						</div>) : null;
					
					return (
						<form onSubmit={handleSubmit}>
						{additionalFields}				
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
								spacing='0 auto 20px auto'
								type="submit"
								width='120px'
              					backgroundColor={`${colors.primaryColor}`}
							>Submit</Button>
							<span
								className={classes.signInSpan}
								onClick={() => setSignInTrue(!signInTrue)}
								>Sign {signInTrue ? 'up' : 'in'} instead?</span>
						</div>
					</form>
					)
				}}			
				</Formik>
			</div>			
			</Wrapper>
		</div>
	);	
}

export default withStyles(LoginBoxStyle)(withRouter(User));