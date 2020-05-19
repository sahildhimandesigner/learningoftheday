import React from 'react';
import withStyles from 'react-jss';
import { Button } from '../../components';
import { colors } from '../../theme/colors';
import LoginButtonStyle from './style';

const LoginButton = ({classes, ...props}) => {
	console.log('login button page', props)
	const loggedInText = props.loginStatus ?
	(<span className={classes.userInfo}>
				Logged in as Inder
			</span>) : null;
	const buttonSpacing = props.loginStatus ? '5px 0 0 0' : '20px 0 0 0';
	return (
		<div className={classes.mainDiv}>
			{loggedInText}
			<Button
				onClick={props.loginHandler}
				spacing={buttonSpacing}
				backgroundColor={`${colors.primaryColor}`}
				color='#fff'
				>{props.loginButtonValue}</Button>
		</div>
	);
}

export default withStyles(LoginButtonStyle)(LoginButton);