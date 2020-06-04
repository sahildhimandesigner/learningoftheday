import React from 'react';
import withStyles from 'react-jss';
import { Headings } from '../index';
import AvtarIcon from '../../images/user-placeholder.svg'
import LearningBlockStyle from './style';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const LearningBlock = ({classes, ...props}) => (
  <div className={classes.postBoxCol}>
    <div className={classes.userDetailCol}>
      <div className={classes.avtar}>
        <img src={AvtarIcon} alt='Icon'/>
      </div>
      <div className={classes.userName}>
        <span className={classes.userInfo}>
          <Headings as='h4' transform='uppercase'>{props.name}</Headings>
        </span>
        <span className={classes.date}>
          <QueryBuilderIcon />
          <span>{props.date}</span>
        </span>
      </div>
    </div>
    <Headings as='h3'>{props.title}</Headings>
    <div className={classes.post} dangerouslySetInnerHTML={{__html: props.content}} />
  </div>
);

export default withStyles(LearningBlockStyle)(LearningBlock);
