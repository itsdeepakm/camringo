import React from 'react';
import { useEffect } from 'react';
import classes from './Projcects.module.css';
import Marquee from 'react-fast-marquee';
import ProjectVideo from '../../Assets/projectVideo.mp4';
import ArtVideo1 from '../../Assets/artVideo1.mp4';
import ArtVideo2 from '../../Assets/artVideo2.mp4';
import ArtVideo3 from '../../Assets/artVideo3.mp4';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.projects}>
      <div className={classes.projectInfo}>
        We invite you to explore our portfolio and experience the beauty,
        emotion, and cinematic brilliance of our previous projects.
      </div>

      <div className={classes.projectHeading}>Projects</div>
      <div className={classes.marquee}>
        <Marquee speed='30'>
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
        <Marquee speed='28' direction='right'>
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/8106787/pexels-photo-8106787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/11341383/pexels-photo-11341383.jpeg'
            alt=''
          />
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/6530735/pexels-photo-6530735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/16702677/pexels-photo-16702677/free-photo-of-man-and-woman-hugging.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/4971468/pexels-photo-4971468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/13931701/pexels-photo-13931701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.marqueeImage}
            src='https://images.pexels.com/photos/3942861/pexels-photo-3942861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </Marquee>
      </div>
      <div className={classes.projectVideo}>
        <video
          className={classes.projectTvVideo}
          src={ProjectVideo}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={classes.projectPunchline}>
        <div className={classes.lines}>
          Our portfolio showcases a diverse range of weddings, each with its
          distinctive style and atmosphere.Our dedication to cinematic
          excellence shines through in every project.
        </div>
      </div>

      <div className={classes.art1}>
        <div className={classes.leftArt}>
          <img
            className={`${classes.smallImage} ${classes.none}`}
            src='https://images.pexels.com/photos/285938/pexels-photo-285938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={`${classes.smallImage} ${classes.smallImage1}`}
            src='https://images.pexels.com/photos/3009324/pexels-photo-3009324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={`${classes.smallImage} ${classes.none}`}
            src='https://images.pexels.com/photos/3089887/pexels-photo-3089887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={`${classes.smallImage} ${classes.smallImage2}`}
            src='https://images.pexels.com/photos/2382288/pexels-photo-2382288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
        <div className={classes.centerArt}>
          <img
            className={classes.centerImage}
            src='https://images.pexels.com/photos/9545496/pexels-photo-9545496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
        <div className={classes.rightArt}>
          <img
            className={`${classes.smallImage} ${classes.smallImage3}`}
            src='https://images.pexels.com/photos/2451590/pexels-photo-2451590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={`${classes.smallImage} ${classes.none}`}
            src='https://images.pexels.com/photos/3089874/pexels-photo-3089874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={`${classes.smallImage} ${classes.smallImage4}`}
            src='https://images.pexels.com/photos/1191490/pexels-photo-1191490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={`${classes.smallImage} ${classes.none}`}
            src='https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
      </div>

      <div className={classes.artVideos}>
        <div className={classes.artVideos1}>
          <video
            className={classes.artVideo1}
            src={ArtVideo1}
            autoPlay
            muted
            loop
          ></video>
          <div className={classes.artDesc1}>Turning Moments</div>
        </div>
      </div>
      <div className={classes.artVideos2}>
        <div className={classes.artDesc2}>Into</div>
        <video
          className={classes.artVideo2}
          src={ArtVideo2}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={classes.artVideos3}>
        <video
          className={classes.artVideo3}
          src={ArtVideo3}
          autoPlay
          muted
          loop
        ></video>
        <div className={classes.artDesc3}>Eternal Memories</div>
      </div>

      <div className={classes.mix}>
        <div className={classes.mix1}>
          <img
            className={classes.portrait6}
            src='https://images.pexels.com/photos/7119188/pexels-photo-7119188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.landscape1}
            src='https://images.pexels.com/photos/4630030/pexels-photo-4630030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.portrait1}
            src='https://images.pexels.com/photos/2719500/pexels-photo-2719500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.landscape2}
            src='https://images.pexels.com/photos/3057925/pexels-photo-3057925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.portrait2}
            src='https://images.pexels.com/photos/10948528/pexels-photo-10948528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.landscape3}
            src='https://images.pexels.com/photos/1067563/pexels-photo-1067563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>

        <div className={classes.mix2}>
          <img
            className={classes.portrait3}
            src='https://images.pexels.com/photos/13624624/pexels-photo-13624624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.landscape4}
            src='https://images.pexels.com/photos/13955181/pexels-photo-13955181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.portrait4}
            src='https://images.pexels.com/photos/12456001/pexels-photo-12456001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.landscape5}
            src='https://images.pexels.com/photos/219776/pexels-photo-219776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.portrait5}
            src='https://images.pexels.com/photos/7119188/pexels-photo-7119188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <img
            className={classes.landscape6}
            src='https://images.pexels.com/photos/3057925/pexels-photo-3057925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
      </div>

      <div className={classes.married}>Happy Married Life</div>
    </div>
  );
};

export default Projects;
