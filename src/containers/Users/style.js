const LoginBoxStyle = ({colors}) => {
	return {
		outerDiv: {
			border: '1px solid ' + colors.gray,
			width: '350px',
			margin: '8% auto',
			borderRadius: '5px',
			padding: '20px',
			background: '#FFF'
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
				border: '1px solid ' + colors.gray,
				outline: 'none'
			}
		},
		buttonDiv: {
			display: 'flex',
			textAlign: 'center',
			flexDirection: 'column'
		},
		signInSpan: {
			padding: '10px',
			cursor: 'pointer',
			fontSize: '12px',
			color: colors.gray
		}
	}
}

export default LoginBoxStyle;