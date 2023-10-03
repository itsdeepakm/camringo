import React from 'react';
import { useEffect } from 'react';
import classes from './About.module.css';
import Marquee from 'react-fast-marquee';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.about}>
      <div className={classes.aboutHeading}>About Us</div>
      <div className={classes.aboutUs}>
        <div className={classes.top}>
          Welcome to Camringo Pictures, where we believe in capturing love in
          its purest form, turning precious moments into lifelong memories. Our
          team of passionate and creative professionals is dedicated to creating
          cinematic wedding films that beautifully narrate your love story.
          Camringo Pictures was founded on the belief that every love story
          deserves to be celebrated and immortalized. Our journey began with a
          burning passion for storytelling and a deep appreciation for the magic
          that unfolds on a couple's special day. With years of experience in
          the wedding videography industry, we have had the honor of witnessing
          countless love stories, and we consider it a privilege to be entrusted
          with preserving those heartfelt emotions on film.
        </div>
        <div className={classes.bottom}>
          At Camringo Pictures, we take a personalized approach to wedding
          videography. We believe that each couple is unique, and their love
          story is a reflection of their journey together. From the joyous
          laughter to the heartfelt vows, we strive to capture every fleeting
          moment, ensuring that your wedding film is a genuine portrayal of your
          love and connection. Our team of talented videographers and editors is
          not only skilled in their craft but also deeply committed to
          understanding your vision for your wedding film. We take the time to
          get to know you as a couple, understanding your preferences and the
          elements that make your love story extraordinary. Our goal is to
          create a wedding film that resonates with your heart and leaves you
          with cherished memories for a lifetime.
        </div>
      </div>

      <div className={classes.teamHeading}>Our Team</div>
      <div className={classes.videographers}>
        <div className={classes.videographersHeading}>Videographer</div>
        <div className={classes.desc}>
          Meet our incredibly talented videographer With a passion for
          storytelling and a keen eye for capturing heartfelt moments,is the
          creative genius behind our exceptional wedding films.
        </div>
        <div className={classes.videographer}>
          <Marquee speed='80'>
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/16168371/pexels-photo-16168371/free-photo-of-man-posing-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/3178274/pexels-photo-3178274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/16808861/pexels-photo-16808861/free-photo-of-dark-portrait-of-a-pensive-young-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/3757419/pexels-photo-3757419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/2932666/pexels-photo-2932666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.videographerImage}
              src='https://images.pexels.com/photos/3402800/pexels-photo-3402800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </Marquee>
          <Marquee speed='80'>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
          </Marquee>
        </div>
      </div>
      <div className={classes.photographers}>
        <div className={classes.videographersHeading}>Photographer</div>
        <div className={classes.desc}>
          With an exceptional eye for detail and an innate ability to capture
          the beauty of every moment, our photographer are the creative force
          behind our breathtaking wedding photography.
        </div>
        <div className={classes.photographer}>
          <Marquee speed='70'>
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/16168371/pexels-photo-16168371/free-photo-of-man-posing-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/3178274/pexels-photo-3178274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/16808861/pexels-photo-16808861/free-photo-of-dark-portrait-of-a-pensive-young-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/3757419/pexels-photo-3757419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/2932666/pexels-photo-2932666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.photographerImage}
              src='https://images.pexels.com/photos/3402800/pexels-photo-3402800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </Marquee>
          <Marquee speed='70'>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
          </Marquee>
        </div>
      </div>
      <div className={classes.editors}>
        <div className={classes.videographersHeading}>Editors</div>
        <div className={classes.desc}>
          Our team of editors shares a common passion for storytelling, and they
          understand the significance of your wedding day. Their keen eye for
          detail allows them to curate the most captivating moments.
        </div>
        <div className={classes.editor}>
          <Marquee speed='60'>
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/16168371/pexels-photo-16168371/free-photo-of-man-posing-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/3178274/pexels-photo-3178274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/16808861/pexels-photo-16808861/free-photo-of-dark-portrait-of-a-pensive-young-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/3757419/pexels-photo-3757419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/2932666/pexels-photo-2932666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
            <img
              className={classes.editorImage}
              src='https://images.pexels.com/photos/3402800/pexels-photo-3402800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </Marquee>
          <Marquee speed='60'>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
            <div className={classes.name}>Join Our Team</div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
