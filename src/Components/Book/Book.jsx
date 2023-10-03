import React from 'react';
import { useEffect } from 'react';
import classes from './Book.module.css';
import WomanPhone from '../../Assets/womanPhone.PNG';
import Phone from '../../Assets/phoneIcon.png';
import Whatsapp from '../../Assets/whatsappIcon.png';
import ManPhone from '../../Assets/manPhone.PNG';
import { Link } from 'react-router-dom';

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.book}>
      <div className={classes.see}>
        <Link to='/plans'>
          <u>see all plans</u>
        </Link>
      </div>
      <div className={classes.call}>
        <div className={classes.callDesc}>
          <img className={classes.phone} src={Phone} alt='' />
          <div className={classes.query}>
            For Any Query Or Booking <br /> Call Us At
          </div>
          <div className={classes.callNumber}>+91 8709 880 415</div>
          <div className={classes.callText}>
            Get all the details and info here.
          </div>
        </div>
        <div>
          <img className={classes.callImage} src={WomanPhone} alt='' />
        </div>
      </div>

      <div className={classes.or}>OR</div>

      <div className={`${classes.call} ${classes.call1}`}>
        <div>
          <img className={classes.callImage} src={ManPhone} alt='' />
        </div>
        <div className={`${classes.callDesc} ${classes.whatsappDesc}`}>
          <img className={classes.phone} src={Whatsapp} alt='' />
          <div className={classes.query}>Whatsapp On</div>
          <div className={classes.callNumber}>+91 8709 880 415</div>
          <div className={classes.callText}>To get more details.</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
