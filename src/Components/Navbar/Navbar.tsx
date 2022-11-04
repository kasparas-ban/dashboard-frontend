import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as ContactsIcon } from '../../Assets/contacts_icon.svg';
import { ReactComponent as ChatIcon } from '../../Assets/chat_icon.svg';
import { ReactComponent as SettingsIcon } from '../../Assets/settings_icon.svg';
import EarthIcon from '../../Assets/earth_icon';
import './navbar.scss';

function Navbar() {
  const location = useLocation();

  const getSelected = () => {
    if (location.pathname === '/') return 'earth';
    if (location.pathname === '/chat-list') return 'chat-list';
    if (location.pathname === '/contacts') return 'contacts';
    if (location.pathname === '/settings') return 'settings';
    return '';
  };

  return (
    <nav>
      <div className='profile-icon'></div>
      <hr className='nav-separator' />
      <div className='nav-link'>
        <Link to={`/`}>
          <EarthIcon
            className={`nav-icon ${getSelected() === 'earth' && 'selected-icon'}`}
          />
        </Link>
      </div>
      <div className='nav-link'>
        <Link to={`/chat-list`}>
          <ChatIcon
            className={`nav-icon ${getSelected() === 'chat-list' && 'selected-icon'}`}
          />
        </Link>
      </div>
      <div className='nav-link'>
        <Link to={`/contacts`}>
          <ContactsIcon
            className={`nav-icon ${getSelected() === 'contacts' && 'selected-icon'}`}
          />
        </Link>
      </div>
      <div className='nav-link'>
        <Link to={`/settings`}>
          <SettingsIcon
            className={`nav-icon ${getSelected() === 'settings' && 'selected-icon'}`}
          />
        </Link>
      </div>
    </nav>
  );
}


export default Navbar;