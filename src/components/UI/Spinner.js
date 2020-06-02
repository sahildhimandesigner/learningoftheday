import React from 'react';
import withStyle from 'react-jss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import spinnerStyle from './spinnerStyle';

const Spinner = ({classes, ...props}) => (
        <div className={classes.wrapper}>
        <Loader
            type="ThreeDots"
            color="#EF5B74"
            height={100}
            width={100}
            visible={true}
        />
 </div>
)

export default withStyle(spinnerStyle)(Spinner);