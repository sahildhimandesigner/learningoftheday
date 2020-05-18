import React from 'react';
import withStyles from 'react-jss';
import { Button } from '../../components';
import { withRouter } from 'react-router';
import { colors } from '../../theme/colors';
import LoginButtonStyle from './style';

const LoginButton = ({classes, ...props}) => {
	console.log(props);
	return (
		<div className={classes.mainDiv}>
			<span className={classes.userInfo}>
				Logged in as Inder
			</span>
			<Button
				onClick={props.loginHandler}
				spacing='5px 0 0 0'
				backgroundColor={`${colors.primaryColor}`}
				color='#fff'
				>{props.loginButtonValue}</Button>
		</div>
	);
}

export default withStyles(LoginButtonStyle)(withRouter(LoginButton));