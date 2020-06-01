import React from 'react';
import withStyles from 'react-jss';
import { Button } from '../../components';
import { colors } from '../../theme/colors';
import LoginButtonStyle from './style';

const LoginButton = ({classes, ...props}) => {
	
	const buttonSpacing = props.currentState.userId ? '5px 0 0 0' : '5px 0 0 0';
	const redirectHandler = () => {
		if (props.currentState.userId) {
			props.history.push('/logout');			
		} else {
			props.history.push('/auth');
		}
	}
	return (
		<div className={classes.mainDiv}>			
			<Button border="#FFF solid 1px"
				onClick={redirectHandler}
				spacing={buttonSpacing}
				backgroundColor={`${colors.primaryColor}`}
				color='#fff'
				>{props.loginButtonValue}</Button>
			
		</div>
	);
}

export default withStyles(LoginButtonStyle)(LoginButton);