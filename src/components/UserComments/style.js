const LandingPageStyle = ({ colors }) => {
    return {
        Landingpage : {
            color: ({color = colors.primaryColor }) => color
        },
    }
}

export default LandingPageStyle