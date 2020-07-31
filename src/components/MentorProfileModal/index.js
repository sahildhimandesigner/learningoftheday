import React from 'react';
import { Modal, Button, Headings } from '../index';
import withStyles from 'react-jss';
import UserAvtar from '../../images/user-placeholder.svg';
import closeIcon from '../../images/close-icon.svg';
import modalStyle from './style';

const UserProfileModal = ({classes, cancelModal, userDetail}) => {
    console.log(userDetail);
    
    return <Modal>
        <div className={classes.ModalHeader}>
            <Headings as='h3'>Connect with Mentor</Headings>
            <span className={classes.closeIcon} onClick={cancelModal}>
                <img src={closeIcon} alt='Icon' />
            </span>
        </div>
        <div className={classes.wrapper}>            
            <div className={classes.avatar}>
                <img src={UserAvtar} alt={UserAvtar} />
            </div>
            <div className={classes.content}>
                <span className={`${classes.span} ${classes.capitalizeName}`}>{userDetail.firstName} {userDetail.lastName}</span>
                <span className={classes.span}>This is a sample description of the user. Stay tuned for more information!</span>
                <span className={classes.span}><Button>Connect</Button></span>
            </div>
        </div>
    </Modal>
}

export default withStyles(modalStyle)(UserProfileModal);