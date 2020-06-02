import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Error } from '../../components';
import { Header, Button, Wrapper, Headings } from '../../components';
import LoginBoxStyle from './style';
import { colors } from '../../theme/colors';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner';

const User = ({classes, ...props}) => {
	const { pathname } = (typeof props.location.state !== 'undefined' && props.location.state.from) ?
		props.location.state.from : { pathname: '/' };
	const [signInTrue, setSignInTrue] = useState(true);
	const [serverError, setServerError] = useState(null);
	const [loadingTrue, setLoadingTrue] = useState(false);
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

	let body = (<div>
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
				setLoadingTrue(true);
				const authData = {
					email: values.email,
					password: values.password,
					returnSecureToken: true
				}

				const method = signInTrue
					? firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
					: firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password);
				
				method.then(response => {
					let userData = ''
					const userId = response.user.uid;					
					if (!signInTrue) {
						const userData = {
							firstName: values.firstName,
							lastName: values.lastName
						};

						firebase.database().ref('users/' + userId).set(userData)
						.then(() => {
							storeDataInStorage(userData.firstName, userData.lastName, response);
						})
						.catch(error => {
							console.log('error', error);
						});
					} else {
						firebase.database().ref('/users/' + userId).once('value')
						.then((snapshot) => {
							storeDataInStorage(snapshot.val().firstName, snapshot.val().lastName, response);
						})
						.catch(error => {
							console.log('error', error);
						});
					}
				})
				.catch(function(error) {
					setLoadingTrue(false);
					setServerError(error.message);
					setTimeout(() => {
						setServerError(null);
					}, 3000)
				});	
				
				const storeDataInStorage = (firstName, lastName, response) => {
					localStorage.setItem('firstName', firstName);
					localStorage.setItem('lastName', lastName);
					localStorage.setItem('userId', response.user.uid);
					props.authState();
					props.history.push(pathname);
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
						<span className={classes.serverError}>{serverError}</span>
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
	</div>);

	if (loadingTrue) {
		body = <Spinner/>
	}

	return (
		<div>{body}</div>		
	);	
}

export default withStyles(LoginBoxStyle)(withRouter(User));