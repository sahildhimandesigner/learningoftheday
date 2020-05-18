import React, { useState } from 'react';
import withStyles from 'react-jss';
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
		validationSchema.first_name = Yup.string()
				.required('Please enter your first name');
		validationSchema.last_name = Yup.string()
				.required('Please enter your last name');
	}
	return (
		<div>
			<Header/>
			<Wrapper>
			<div className={classes.outerDiv}>
			<div className={classes.inputBox}>
				<Headings as='h3'>Sign {signInTrue ? 'in' : 'up'}</Headings>
			</div>
				<Formik
				initialValues = {{
					first_name: '',
					last_name: '',
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

				    if (!signInTrue) {
				    	authData.first_name = values.first_name;
				    	authData.last_name = values.last_name;
				    }

					let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkKPuqWYTit1LST92RUunx31ozUhGpwhQ';

					if (signInTrue) {
						url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkKPuqWYTit1LST92RUunx31ozUhGpwhQ';
					}					

					axios.post(url, authData)
						.then(response => {
							const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
			                localStorage.setItem('token', response.data.idToken);
			                localStorage.setItem('expirationDate', expirationDate);
			                localStorage.setItem('userId', response.data.localId);
			                props.history.push('/');
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
				}) => {
					const additionalFields = 
						!signInTrue ? (
						<div>
							<div className={classes.inputBox}>
								<input
									id="first_name"
									placeholder="Enter your tirst name"
									type="text"
									name="first_name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.first_name}/>
								<Error touched={touched.first_name} message={errors.first_name} />
							</div>
							<div className={classes.inputBox}>
								<input
									id="last_name"
									placeholder="Enter your last name"
									type="text"
									name="last_name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.last_name}/>
								<Error touched={touched.last_name} message={errors.last_name} />
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
								spacing='20px 0 0 0'
              					type="submit"
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
			<Footer/>
		</div>
	);	
}

export default withStyles(LoginBoxStyle)(User);