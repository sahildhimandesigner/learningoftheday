const LoginBoxStyle = ({colors}) => {
	return {
		outerDiv: {
			border: '1px solid ' + colors.gray,
			width: '350px',
			margin: '8% auto',
			borderRadius: '5px',
			padding: '20px'
		},
		inputBox: {
			marginBottom: '20px',
			'& input': {
				minHeight: '46px',
				width: '100%',
				fontSize: '14px',
				borderRadius: '30px',
				padding: '10px',
				boxSizing: 'border-box',
				border: '1px solid ' + colors.gray
			}
		},
		buttonDiv: {
			display: 'flex',
			justifyContent: 'flex-end'
		}
	}
}

export default LoginBoxStyle;