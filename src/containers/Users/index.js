import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Error } from '../../components';
import axios from '../../axios-instance';

const User = () => {
	return (
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
				<div>
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
				<div>
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
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		)}			
		</Formik>
	);	
}

export default User;