import { ReactComponent as ProfileIcon } from '../../Assets/Navbar/profile_icon.svg';
import { ReactComponent as LogoutIcon } from '../../Assets/Navbar/logout_icon.svg';
import './navProfile.scss';

function NavProfile() {
  const logout = () =>
    fetch('http://localhost:3001/api/logout')
      .then(res => {
        if (res.status === 200) window.location.href = 'http://localhost:3001';
      })
      .catch(err => console.log('Failed to logout'));

  return (
    <div className='nav-profile-container'>
      <div className='nav-profile-item'>
        <ProfileIcon className='nav-profile-item-icon' />
        <div className='nav-profile-item-text'>Profile settings</div>
      </div>
      <div className='nav-profile-item' onClick={logout}>
        <LogoutIcon className='nav-profile-item-icon' />
        <div className='nav-profile-item-text'>Logout</div>
      </div>
    </div>
  );
}

export default NavProfile;