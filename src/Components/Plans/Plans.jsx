import React from 'react';
import { useEffect } from 'react';
import classes from './Plans.module.css';
import Plan from '../../UI/Plan';
import FourKPlusIcon from '@mui/icons-material/FourKPlus';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import GroupsIcon from '@mui/icons-material/Groups';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PlanDes from '../../UI/PlanDes';
import Photos from '../../Assets/photos.png';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Person3Icon from '@mui/icons-material/Person3';

const Plans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.plans}>
        <div className={classes.choose}>Choose Plan</div>
        <div className={classes.art}>
          <div className={classes.best}>Choose From The 3 Best</div>
          <div className={classes.designed}>Plans Designed</div>
          <div className={classes.for}>For You.</div>
        </div>

        <div className={classes.allPlans}>
          <Plan
            imgSrc='https://images.pexels.com/photos/14404429/pexels-photo-14404429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            planHeading='Silver'
            featureIcon1={<GroupsIcon />}
            feature1='4 Videographers'
            featureIcon2={<PhotoSizeSelectActualIcon />}
            feature2='Album - 200+ Photos'
            featureIcon3={<BlurOnIcon />}
            feature3='Cinematic Editing'
            featureIcon4={<BlurOnIcon />}
            feature4='Special Effects & VFX'
            featureIcon5={<FourKPlusIcon />}
            feature5='4K Video Recording'
            featureIcon6={<PhotoSizeSelectActualIcon />}
            feature6='500+ Photos'
            featureIcon7={<GroupsIcon />}
            feature7='7 Photographers'
          />
          <Plan
            imgSrc='https://images.pexels.com/photos/15448448/pexels-photo-15448448/free-photo-of-a-man-taking-a-picture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            planHeading='Gold'
            featureIcon1={<GroupsIcon />}
            feature1='6 Videographers'
            featureIcon2={<PhotoSizeSelectActualIcon />}
            feature2='Album - 300+ Photos'
            featureIcon3={<BlurOnIcon />}
            feature3='Cinematic Editing'
            featureIcon4={<LibraryMusicIcon />}
            feature4='Wedding Song'
            featureIcon5={<FourKPlusIcon />}
            feature5='4K Video Recording'
            featureIcon6={<PhotoSizeSelectActualIcon />}
            feature6='500+ Photos'
            featureIcon7={<GroupsIcon />}
            feature7='7 Photographers'
          />
          <Plan
            className={classes.plan3}
            imgSrc='https://images.pexels.com/photos/11462046/pexels-photo-11462046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            planHeading='Diamond'
            featureIcon1={<GroupsIcon />}
            feature1='8 Videographers'
            featureIcon2={<PhotoSizeSelectActualIcon />}
            feature2='Album - 400+ Photos'
            featureIcon3={<BlurOnIcon />}
            feature3='Cinematic Editing'
            featureIcon4={<LibraryMusicIcon />}
            feature4='Wedding Song'
            featureIcon5={<Person3Icon />}
            feature5='Celebrity Guest'
            featureIcon6={<PhotoSizeSelectActualIcon />}
            feature6='500+ Photos'
            featureIcon7={<GroupsIcon />}
            feature7='7 Photographers'
          />
        </div>

        <div className={classes.planDescription}>
          <PlanDes
            planName='Silver'
            feature1='Drone'
            feature2='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
            feature3='4 Videographers'
            src1='https://images.pexels.com/photos/7311070/pexels-photo-7311070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            src2={Photos}
            feature4='200+ Photos'
            feature5='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
            feature6='Pro Res. Video'
            feature7='4K'
            feature8='Video Recording'
            feature9='4K Camera'
            feature10='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
          />
          <PlanDes
            planName='Gold'
            feature1='Drone'
            feature2='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
            feature3='6 Videographers'
            src1='https://images.pexels.com/photos/7311070/pexels-photo-7311070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            src2={Photos}
            feature4='300+ Photos'
            feature5='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
            feature6='Pro Res. Video'
            feature7='4K'
            feature8='Video Recording'
            feature9='4K Camera'
            feature10='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
          />
          <PlanDes
            planName='Diamond'
            feature1='Drone'
            feature2='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
            feature3='8 Videographers'
            src1='https://images.pexels.com/photos/7311070/pexels-photo-7311070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            src2={Photos}
            feature4='400+ Photos'
            feature5='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
            feature6='Pro Res. Video'
            feature7='4K'
            feature8='Video Recording'
            feature9='4K Camera'
            feature10='Incorporate breathtaking ariel shots using drones to add a unique
            and ynamic element to the videos.'
          />
        </div>
      </div>
    </>
  );
};

export default Plans;
