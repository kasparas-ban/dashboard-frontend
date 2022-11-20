import { ReactComponent as ProfileIcon } from '../../Assets/Navbar/profile_icon.svg';
import { ReactComponent as LogoutIcon } from '../../Assets/Navbar/logout_icon.svg';
import './navProfile.scss';

function NavProfile() {
  return (
    <div className='nav-profile-container'>
      <div className='nav-profile-item'>
        <ProfileIcon className='nav-profile-item-icon' />
        <div className='nav-profile-item-text'>Profile settings</div>
      </div>
      <div className='nav-profile-item'>
        <LogoutIcon className='nav-profile-item-icon' />
        <div className='nav-profile-item-text'>Logout</div>
      </div>
    </div>
  );
}

export default NavProfile;