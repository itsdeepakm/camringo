import React from 'react';
import { useEffect } from 'react';
import classes from './Support.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SupportVideo from '../../Assets/supportVideo.mp4';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.support}>
      <div className={classes.supportHeading}>Support</div>

      <div className={classes.contact}>
        <div className={classes.icons}>
          <div className={classes.icon}>
            <WhatsAppIcon sx={{ fontSize: 40 }} color='success' />
          </div>
          <div className={classes.icon}>
            <PhoneIcon color='primary' sx={{ fontSize: 40 }} />
          </div>
          <div className={classes.icon}>
            <LocalPostOfficeIcon color='action' sx={{ fontSize: 40 }} />
          </div>
        </div>
        <div className={classes.names}>
          <div className={classes.logoName}>Whatsapp</div>
          <div className={classes.logoName}>Call</div>
          <div className={classes.logoName}>Mail</div>
        </div>
        <div className={classes.desc}>
          <div className={classes.logoDesc}>
            connect with us on whatsapp and ask your doubt or query.
          </div>
          <div className={classes.logoDesc}>
            call us on this number and get all the details and info.
          </div>
          <div className={classes.logoDesc}>
            mail your question to us and we will get back to you.
          </div>
        </div>
        <div className={classes.linkNow}>
          <div className={classes.now}>
            <a href='#'>8709880415</a>
          </div>
          <div className={classes.now}>
            <a href='#'>8709880415</a>
          </div>
          <div className={classes.now}>
            <a href='mailto:camringopictures@gmail.com'>mail now</a>
          </div>
        </div>
      </div>

      <div className={classes.supportVideo}>
        <video
          className={classes.helpVideo}
          src={SupportVideo}
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default Support;
