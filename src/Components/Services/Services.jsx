import React from 'react';
import classes from './Services.module.css';
import { useEffect } from 'react';
// import WeddingBannerVideo from '../../Assets/weddingVideo.mp4';
// import PreWeddingVideo1 from '../../Assets/preWeddingVideo1.mp4';
import GroupsIcon from '@mui/icons-material/Groups';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Marquee from 'react-fast-marquee';
import WeddingSong1 from '../../Assets/weddingSong1.mp3';
// import Music from '../../UI/Music';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.services}>
      <div className={classes.wedding}>
        <div className={classes.weddingHeading}>Wedding</div>
        <div className={classes.weddingDesc}>
          <span className={classes.we}>We Make</span>
          <span className={classes.film}>
            Exceptional Wedding <span className={classes.films}>Films</span>
          </span>
          <span className={classes.weddingTeam}>
            Our team of talented videographers brings a creative and artistic
            approach to every shoot.It's our passion to create films that become
            cherished heirlooms, allowing you to relive the love, joy, and magic
            of your wedding day for years to come.
          </span>
        </div>
        <div className={classes.weddingImages}>
          <img
            className={classes.weddingImage1}
            src='https://images.pexels.com/photos/5729024/pexels-photo-5729024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <video
            className={classes.weddingImage2}
            src='https://64afef01c2cc6b181fe24eb3--profound-starship-2784bd.netlify.app/weddingVideo.mp4'
            autoPlay
            loop
            muted
          />
          <img
            className={classes.weddingImage3}
            src='https://images.pexels.com/photos/9197331/pexels-photo-9197331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.weddingImage4}
            src='https://images.pexels.com/photos/2871648/pexels-photo-2871648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
        <div className={classes.weddingInfo}>
          <span>
            <AddAPhotoIcon sx={{ fontSize: 35 }} />
          </span>
          <span>
            <GroupsIcon sx={{ fontSize: 35 }} />
          </span>
          <span>
            <CalendarMonthIcon sx={{ fontSize: 35 }} />
          </span>
          <span className={classes.grey}>Premium Video</span>
          <span className={classes.grey}>Elite team</span>
          <span className={classes.grey}>On Time</span>
        </div>
      </div>
      <div className={classes.preWedding}>
        <div className={classes.preWeddingHeading}>Pre Wedding</div>
        <div className={classes.preWeddingVideo}>
          <video
            className={classes.preWeddingVideo1}
            src='https://64afef01c2cc6b181fe24eb3--profound-starship-2784bd.netlify.app/preWeddingVideo1.mp4'
            autoPlay
            loop
            muted
          />
        </div>
        <div className={classes.marquee}>
          <Marquee speed='125'>
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/5364783/pexels-photo-5364783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/6530967/pexels-photo-6530967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/14526684/pexels-photo-14526684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/7946308/pexels-photo-7946308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/3942861/pexels-photo-3942861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/984918/pexels-photo-984918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.marqueeImage}
              src='https://images.pexels.com/photos/9196393/pexels-photo-9196393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </Marquee>
        </div>
        <div className={`${classes.weddingDesc} ${classes.preWeddingDesc}`}>
          <span className={classes.we}>
            Weaving<span className={classes.dreams}> Dreams</span>
          </span>
          <span className={classes.film}>into Motion Pictures</span>
          <span className={`${classes.weddingTeam} ${classes.preWeddingTeam}`}>
            When it comes to filming pre-wedding videos and photos, we go above
            and beyond to ensure an exceptional experience for our clients.We
            strive to create a cinematic experience that is not only visually
            captivating but also emotionally evocative.
          </span>
        </div>
      </div>
      <div className={classes.celebrityGuest}>
        <div className={`${classes.weddingHeading} ${classes.celebrityGuest}`}>
          Celebrity Guest
        </div>
        <div className={classes.celebrityGuestDesc}>
          <span className={classes.have}>Have Your Favourite Celebrity</span>
          <span className={classes.your}>In Your Wedding.</span>
        </div>
        <div className={classes.celebrityGuestImages}>
          <img
            className={classes.celebrityImage1}
            src='https://images.pexels.com/photos/6119535/pexels-photo-6119535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.celebrityImage2}
            src='https://images.pexels.com/photos/4565026/pexels-photo-4565026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
        <div className={classes.imagine}>
          <span>
            <span className={classes.imagineSpan}>Imagine</span> the excitement
            and glamour of having your favorite celebrity grace your wedding
            day.Whether it's a surprise appearance or a planned performance, we
            work diligently to ensure an unforgettable experience.
          </span>
        </div>
      </div>
      <div className={classes.weddingSong}>
        <div
          className={`${classes.weddingHeading} ${classes.weddingSongHeading}`}
        >
          Wedding Song
        </div>
        <div className={`${classes.weddingDesc} ${classes.weddingSongDesc}`}>
          <span className={classes.weddingTeam}>
            We craft the best wedding song exclusively tailored for you as a
            couple.Our team of talented musicians and songwriters works closely
            with you to understand your
            <span className={classes.loveStory}> love story</span>, your unique
            journey, and your musical preferences.
          </span>
        </div>

        <div className={classes.plus}>
          <div className={classes.musician}>Iconic musician</div>
          <div className={classes.add}>+</div>
          <div className={classes.songWriter}>Versatile songwriter</div>
        </div>

        <div className={classes.songs}>
          <div className={classes.song1}>
            <img
              className={classes.songImage}
              src='https://images.pexels.com/photos/15919899/pexels-photo-15919899/free-photo-of-woman-sitting-on-subway-platform.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <div className={classes.audioPlayer}>
              <div className={classes.songName}>Coming Soon.</div>
              <div className={classes.player}>
                <audio className={classes.audio} controls src=''></audio>
              </div>
            </div>
          </div>
          <div className={classes.song2}>
            <img
              className={classes.songImage}
              src='https://images.pexels.com/photos/5238645/pexels-photo-5238645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <div className={classes.audioPlayer}>
              <div className={classes.songName}>Coming Soon.</div>
              <div className={classes.player}>
                <audio className={classes.audio} controls src=''></audio>
              </div>
            </div>
          </div>
          <div className={classes.song3}>
            <img
              className={classes.songImage}
              src='https://images.pexels.com/photos/3056056/pexels-photo-3056056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <div className={classes.audioPlayer}>
              <div className={classes.songName}>Coming Soon.</div>
              <div className={classes.player}>
                <audio className={classes.audio} controls src=''></audio>
              </div>
            </div>
          </div>
          <div className={classes.song4}>
            <img
              className={classes.songImage}
              src='https://images.pexels.com/photos/2403054/pexels-photo-2403054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <div className={classes.audioPlayer}>
              <div className={classes.songName}>Coming Soon.</div>
              <div className={classes.player}>
                <audio className={classes.audio} controls src=''></audio>
              </div>
            </div>
          </div>
          <div className={classes.song5}>
            <img
              className={classes.songImage}
              src='https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <div className={classes.audioPlayer}>
              <div className={classes.songName}>Coming Soon.</div>
              <div className={classes.player}>
                <audio className={classes.audio} controls src=''></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
