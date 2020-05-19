import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const LogOut = (props) => {
	useEffect(() => {
		props.logOut('ehte')
	}, []);

	return <Redirect to='/auth' />;
}

export default LogOut;