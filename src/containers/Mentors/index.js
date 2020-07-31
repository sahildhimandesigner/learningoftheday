import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import { Footer, Header, MentorProfileModal } from '../../components';
import UserAvtar from './../../images/user-placeholder.svg';
import MentorsStyle from './style';
import firebase from '../../firebase';
import Spinner from '../../components/UI/Spinner';

const Mentors = ({classes, ...props}) => {
    const [usersInfo, setUsersInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [modalUserInfo, setModalUserInfo] = useState({});

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

    const mentorProfileModal = showProfileModal  ? <MentorProfileModal
                                                userDetail={modalUserInfo}
                                                cancelModal={(toggle) => closeModal(toggle)}
                                            /> : null;

    const showModal = (firstName, lastName) => {
        setShowProfileModal(true);
        setModalUserInfo({
            firstName: firstName,
            lastName: lastName
        });
    }

    const closeModal = (close) => {
        setShowProfileModal(!close);
    }

    let body = loading ? <Spinner/> : (<div>
        <Header {...props}/>
            <div className={classes.wrapper}>
                {usersInfo.map((information, key) => {
                return (<div className={classes.mentorAvatar}
                        key={key}
                        onClick={() => showModal(information.firstName, information.lastName)}>
                        <span>{information.firstName} {information.lastName}</span>
                    </div>)
                })}
                {mentorProfileModal}
            </div>            
        <Footer />
    </div>);

    return (
        <div>{body}</div>
    )
};

export default withStyles(MentorsStyle)(Mentors);