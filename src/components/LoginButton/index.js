import React from 'react';
import withRouter from 'react-router';
import withStyles from 'react-jss';
import { Button } from '../../components';
import { colors } from '../../theme/colors';
import LoginButtonStyle from './style';

const LoginButton = ({classes, ...props}) => {
	const loggedInText = props.currentState.token ?
	(<span className={classes.userInfo}>
				Logged in as {props.currentState.firstName} {props.currentState.lastName}
			</span>) : null;
	const buttonSpacing = props.currentState.token ? '5px 0 0 0' : '20px 0 0 0';
	const redirectHandler = () => {
		if (props.currentState.token) {
			props.history.push('/logout');			
		} else {
			props.history.push('/auth');
		}
	}
	return (
		<div className={classes.mainDiv}>
			{loggedInText}
			<Button
				onClick={redirectHandler}
				spacing={buttonSpacing}
				backgroundColor={`${colors.primaryColor}`}
				color='#fff'
				>{props.loginButtonValue}</Button>
		</div>
	);
}

export default withStyles(LoginButtonStyle)(LoginButton);