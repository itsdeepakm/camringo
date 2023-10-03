import React from 'react';
import classes from './PlanDesc.module.css';
import Drone from '../Assets/drone.gif';
import K4 from '../Assets/4k.mov';
import Camera from '../Assets/camera.gif';

const PlanDes = (props) => {
  return (
    <>
      <div className={classes.planDesc}>
        <div className={classes.planName}>{props.planName}</div>
        <div className={classes.plans}>
          <div className={classes.plan1}>
            <img className={classes.planImage} src={Drone} alt='' />
            <div className={classes.animatedHeading}>{props.feature1}</div>
            <div className={classes.animatedText}>{props.feature2}</div>
          </div>
          <div className={classes.plan2}>
            <div className={classes.seven}>{props.feature3}</div>
            <img className={classes.photographerTeam} src={props.src1} alt='' />
          </div>
          <div className={classes.plan3}>
            <img className={classes.planImage} src={props.src2} alt='' />
            <div className={`${classes.animatedHeading} ${classes.two50}`}>
              {props.feature4}
            </div>
            <div className={classes.animatedText}>{props.feature5}</div>
          </div>
          <div className={classes.plan4}>
            <span>{props.feature6}</span>
          </div>
          <div className={classes.plan5}>
            <div className={classes.videoQuality}>{props.feature7}</div>
            <video className={classes.k4} src={K4} autoPlay loop muted />
            <div className={classes.videoRecording}>{props.feature8}</div>
          </div>
          <div className={classes.plan6}>
            <img className={classes.planImage} src={Camera} alt='' />
            <div className={`${classes.animatedHeading} ${classes.sony}`}>
              {props.feature9}
            </div>
            <div className={classes.animatedText}>{props.feature10}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDes;
