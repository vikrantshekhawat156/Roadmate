import aboutUs from '../assets/images/Aboutus.png';
import logo from '../assets/images/logo.png';
import ravindraImg from '../assets/images/ravindra.jpeg';
import vikrantImg from '../assets/images/vikrant.png';
import appStoreBadge from '../assets/images/app-store-badge.png';
import googlePlayBadge from '../assets/images/google-play-badge.png';
import googleIcon from '../assets/images/google-icon.png';
import appShowcase from '../assets/images/app-showcase.jpg';
import howItWorks from '../assets/images/how-it-works.jpg';

const images = {
  logo,
  about: aboutUs,
  howItWorks,
  team: {
    ravindra: ravindraImg,
    vikrant: vikrantImg
  },
  badges: {
    appStore: appStoreBadge,
    googlePlay: googlePlayBadge
  },
  icons: {
    google: googleIcon
  },
  appShowcase: appShowcase
};

export default images;