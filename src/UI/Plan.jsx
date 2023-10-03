import React from 'react';
import classes from './Plan.module.css';

const Plan = (props) => {
  return (
    <>
      <div className={classes.plan}>
        <img className={classes.planImage} src={props.imgSrc} alt='' />
        <div className={classes.planDesc}>
          <div className={classes.planHeading}>{props.planHeading}</div>
          <div className={classes.line}></div>
          <div className={classes.featureIcon}>{props.featureIcon1}</div>
          <div className={classes.feature}>{props.feature1}</div>
          <div className={classes.featureIcon}>{props.featureIcon2}</div>
          <div className={classes.feature}>{props.feature2}</div>
          <div className={classes.featureIcon}>{props.featureIcon3}</div>
          <div className={classes.feature}>{props.feature3}</div>
          <div className={classes.featureIcon}>{props.featureIcon4}</div>
          <div className={classes.feature}>{props.feature4}</div>
          <div className={classes.featureIcon}>{props.featureIcon5}</div>
          <div className={classes.feature}>{props.feature5}</div>
          <div className={classes.featureIcon}>{props.featureIcon6}</div>
          <div className={classes.feature}>{props.feature6}</div>
          <div className={classes.featureIcon}>{props.featureIcon7}</div>
          <div className={classes.feature}>{props.feature7}</div>
        </div>
      </div>
    </>
  );
};

export default Plan;
