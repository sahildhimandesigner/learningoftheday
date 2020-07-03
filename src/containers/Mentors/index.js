import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import { Footer, Header } from '../../components';
import MentorsStyle from './style';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner';

const Mentors = ({classes, ...props}) => {
    const [usersInfo, setUsersInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userDetails = [];
        const users = firebase.database().ref(`users`);
        users.on('value', function(snapshot){
            for (const key in snapshot.val()) {
                userDetails.push(snapshot.val()[key]);
            }
            setUsersInfo(userDetails);
            setLoading(false);
        })
    }, []);

    let body = loading ? <Spinner/> : (<div>
        <Header {...props}/>
            <div className={classes.wrapper}>
                {usersInfo.map((information, key) => {
                return (<div className={classes.mentorAvatar} key={key}>
                    <span>{information.firstName} {information.lastName}</span>
                    </div>)
                })}
            </div>            
        <Footer />
    </div>);

    return (
        <div>{body}</div>
    );
};

export default withStyles(MentorsStyle)(Mentors);