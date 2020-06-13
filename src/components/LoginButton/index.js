import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withStyles from 'react-jss';
import { Button } from '../../components';
import { colors } from '../../theme/colors';
import LoginButtonStyle from './style';

const LoginButton = ({classes, ...props}) => {
	const redirectHandler = () => {
		if (props.loggedIn) {
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

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.loggedIn
	}
}

export default connect(mapStateToProps)(withStyles(LoginButtonStyle)(withRouter(LoginButton)));