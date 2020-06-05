import React from 'react';
import withStyles from 'react-jss';
import { Button } from '../../components';
import { colors } from '../../theme/colors';
import LoginButtonStyle from './style';

const LoginButton = ({classes, ...props}) => {	
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
				backgroundColor={`${colors.primaryColor}`}
				color='#fff'
				>{props.loginButtonValue}</Button>
		</div>
	);
}

export default withStyles(LoginButtonStyle)(LoginButton);