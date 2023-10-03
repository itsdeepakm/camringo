import React from 'react';
import { useEffect } from 'react';
import classes from './Home.module.css';
import Marquee from 'react-fast-marquee';
import Diamond from '../../Assets/diamond.png';
import Gold from '../../Assets/gold.png';
import Silver from '../../Assets/silver.png';
import { Link } from 'react-router-dom';
import Review1 from '../../Assets/review1.png';
import Review2 from '../../Assets/review2.png';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.home}>
      <img
        className={classes.bannerImage}
        src='https://images.pexels.com/photos/236275/pexels-photo-236275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt=''
      />

      <div className={classes.tagline}>
        Weaving Love's Tapestry, Frame By Frame
      </div>

      <div className={classes.portraitImages}>
        <img
          className={classes.portraitImage1}
          src='https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <img
          className={classes.portraitImage2}
          src='https://images.pexels.com/photos/3551730/pexels-photo-3551730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <img
          className={classes.portraitImage3}
          src='https://images.pexels.com/photos/10256406/pexels-photo-10256406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <img
          className={classes.portraitImage4}
          src='https://images.pexels.com/photos/2403569/pexels-photo-2403569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <img
          className={classes.portraitImage5}
          src='https://images.pexels.com/photos/12178588/pexels-photo-12178588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
      </div>

      <div className={classes.vision}>
        <div className={classes.heading}>
          Weaving dreams into
          <span className={classes.cinematic}> Cinematic</span> <br />
          reality.
        </div>
        <div className={classes.description}>
          Immersing in every
          <span className={classes.gradientEmotion}> emotion</span>, our lens
          captures the essence, With unmatched artistry, we paint love's vivid
          presence. From start to finish, we redefine
          <span className={classes.gradientWedding}> wedding</span>{' '}
          videography's prowess.
        </div>
      </div>
      <div className={classes.servicesHeading}>Services</div>
      <div className={classes.services}>
        <div className={classes.service}>
          <img
            className={classes.serviceImg1}
            src='https://images.pexels.com/photos/2165931/pexels-photo-2165931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className={classes.serviceDesc}>
            <span className={classes.name}>Wedding</span>
            <span className={classes.nameDesc}>
              Capture the timeless moments of your special day with our
              unparalleled expertise in wedding videography.
            </span>
            <Link className={classes.serviceLink} to='/services'>
              <span className={classes.see}>see more</span>
            </Link>
          </div>
        </div>
        <div className={classes.service}>
          <img
            className={classes.serviceImg}
            src='https://images.pexels.com/photos/2982576/pexels-photo-2982576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className={classes.serviceDesc}>
            <span className={classes.name}>Pre Wedding</span>
            <span className={classes.nameDesc}>
              Embark on a magical journey with our exceptional pre-wedding
              videography services at "We Record Best Pre Wedding.
            </span>
            <Link className={classes.serviceLink} to='/services'>
              <span className={classes.see}>see more</span>
            </Link>
          </div>
        </div>
        <div className={classes.service}>
          <img
            className={classes.serviceImg}
            src='https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className={classes.serviceDesc}>
            <span className={classes.name}>Wedding Song</span>
            <span className={classes.nameDesc}>
              Unleash the power of music to tell the extraordinary tale of your
              love with our exceptional lyrics writer.
            </span>
            <Link className={classes.serviceLink} to='/services'>
              <span className={classes.see}>see more</span>
            </Link>
          </div>
        </div>
        <div className={classes.service}>
          <img
            className={classes.serviceImg}
            src='https://images.pexels.com/photos/8815330/pexels-photo-8815330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className={classes.serviceDesc}>
            <span className={classes.name}>Celebrity Guest</span>
            <span className={classes.nameDesc}>
              Elevate your wedding day to an extraordinary level of glamour and
              excitement with our exclusive service.
            </span>
            <Link className={classes.serviceLink} to='/services'>
              <span className={classes.see}>see more</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.five}>
        <p>
          Pinnacle of
          <span className={classes.weddingText}>
            wedding <br />
          </span>
          film artistry.
        </p>
      </div>
      <div className={classes.projectSection}>
        <div className={classes.projectHeading}>Projects</div>
        <div className={classes.projectDescription}>
          We Capture Beautiful Moment Of Your Life In Our Works
        </div>
        <div className={classes.marquee1}>
          <Marquee>
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/8106787/pexels-photo-8106787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/11341383/pexels-photo-11341383.jpeg'
              alt=''
            />
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/6530735/pexels-photo-6530735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/16702677/pexels-photo-16702677/free-photo-of-man-and-woman-hugging.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/5163512/pexels-photo-5163512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/4971468/pexels-photo-4971468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.projectImage}
              src='https://images.pexels.com/photos/13931701/pexels-photo-13931701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </Marquee>
          <Marquee className={classes.marquee2}>
            <div className={classes.couples}>Coming Soon</div>
            <div className={classes.couples}>Coming Soon</div>
            <div className={classes.couples}>Coming Soon</div>
            <div className={classes.couples}>Coming Soon</div>
            <div className={classes.couples}>Coming Soon</div>
            <div className={classes.couples}>Coming Soon</div>
            <div className={classes.couples}>Coming Soon</div>
          </Marquee>
          <Marquee className={classes.marquee2}>
            <div className={classes.address}>Ranchi, Jharkhand</div>
            <div className={classes.address}>Kolkata, W.B</div>
            <div className={classes.address}>Patna, Bihar</div>
            <div className={classes.address}>Rourkela, Odisha</div>
            <div className={classes.address}>Bokaro, Jharkhand</div>
            <div className={classes.address}>Chittaranjan, Jharkhand</div>
            <div className={classes.address}>Jamshedpur, Jharkhand</div>
          </Marquee>
        </div>
      </div>
      <div className={classes.plansHeading}>Plans</div>
      <div className={classes.plans}>
        <Link to='/plans'>
          <img className={classes.plan1} src={Silver} alt='' />
        </Link>
        <Link to='/plans'>
          <img className={classes.plan2} src={Diamond} alt='' />
        </Link>
        <Link to='/plans'>
          <img className={classes.plan3} src={Gold} alt='' />
        </Link>
      </div>
      <div className={classes.reviewHeading}>What People Love About Us</div>
      <div className={classes.reviews}>
        <img className={classes.review} src={Review1} alt='' />
        <img className={classes.review} src={Review2} alt='' />
      </div>
      <div className={classes.line}></div>
      <footer>
        <div className={classes.serviceFoot}>
          <span className={classes.serviceHead}>Services</span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/services'>
              Wedding
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/services'>
              Pre Wedding
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/services'>
              Wedding Song
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/services'>
              Celebrity Guest
            </Link>
          </span>
        </div>
        <div className={classes.plansFoot}>
          <span className={classes.planHead}>Plans</span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/plans'>
              Diamond
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/plans'>
              Gold
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/plans'>
              Silver
            </Link>
          </span>
        </div>
        <div className={classes.aboutFoot}>
          <span className={classes.aboutHead}>About</span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/about'>
              Company
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/about'>
              Team
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/about'>
              Office
            </Link>
          </span>
        </div>
        <div className={classes.supportFoot}>
          <span className={classes.supportHead}>Support</span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/support'>
              Contact
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link className={classes.footerLink} to='/support'>
              Visit
            </Link>
          </span>
          <span className={classes.bottom}>
            <Link
              className={classes.footerLink}
              to='https://forms.gle/KRHtWRPK1d6Ud3er7'
            >
              jobs
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
