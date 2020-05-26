import React from 'react';
import withStyles from 'react-jss';
import { Headings } from '../index';
import AvtarIcon from '../../images/user-placeholder.svg'
import LearningBlockStyle from './style';

const LearningBlock = ({classes, ...props}) => (
  <div className={classes.postBoxCol}>
    <div className={classes.userDetailCol}>
      <div className={classes.avtar}>
        <img src={AvtarIcon} alt='Icon'/>
      </div>
      <div className={classes.userName}>
        <Headings as='h4' transform='uppercase'>{props.name}</Headings>
        <span className={classes.date}>{props.date}</span>
      </div>
    </div>
    <Headings as='h3'>{props.title}</Headings>
    <Headings className={classes.post} margin='16px 0 20px'>
    <div dangerouslySetInnerHTML={{__html: props.content}} />
    </Headings>
  </div>
);

export default withStyles(LearningBlockStyle)(LearningBlock);
