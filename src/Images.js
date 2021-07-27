import ACCOUNT from './data/images/account.svg';
import LOOPS from './data/images/loop-studios.svg';
import PHOTO_SNAP from './data/images/photosnap.svg';
import MANAGE from './data/images/manage.svg';
import MY_HOME from './data/images/myhome.svg';
import SHORTLY from './data/images/shortly.svg';
import FACEIT from './data/images/faceit.svg';
import EYE_CAM from './data/images/eyecam-co.svg';
import INSURE from './data/images/insure.svg';
import AIR_FILTER from './data/images/air-filter.svg';
import DEFAULT from './data/images/default.png';

const Icon = ({ name }) => {
  let image = null;
  switch (name) {
    case 'Photosnap':
      image = PHOTO_SNAP;
      break;
    case 'Manage':
      image = MANAGE;
      break;
    case 'Account':
      image = ACCOUNT;
      break;
    case 'MyHome':
      image = MY_HOME;
      break;
    case 'Loop Studios':
      image = LOOPS;
      break;
    case 'FaceIt':
      image = FACEIT;
      break;
    case 'Shortly':
      image = SHORTLY;
      break;
    case 'Insure':
      image = INSURE;
      break;
    case 'Eyecam Co.':
      image = EYE_CAM;
      break;
    case 'The Air Filter Company':
      image = AIR_FILTER;
      break;
    default:
      image = DEFAULT;
      break;
  }

  return (
    <div className='company-icon-div'>
      <img src={image} alt='Company' className='company-icon' />
    </div>
  );
};

export default Icon;
