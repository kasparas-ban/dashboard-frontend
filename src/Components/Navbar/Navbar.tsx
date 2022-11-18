import { NavLink } from 'react-router-dom';
import { ReactComponent as PeopleIcon } from '../../Assets/Navbar/people_icon.svg';
import { ReactComponent as ChatIcon } from '../../Assets/chat_icon.svg';
import { ReactComponent as SettingsIcon } from '../../Assets/Navbar/settings_icon.svg';
import { ReactComponent as SearchIcon } from '../../Assets/search_icon.svg';
import { ReactComponent as FeedIcon } from '../../Assets/Navbar/feed_icon.svg';
import EarthIcon from '../../Assets/Navbar/earth_icon';
import profile from '../../Assets/profile_example.jpg';
import './navbar.scss';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

function Navbar() {
  const { overlays, setOverlays } = useContext(AppContext);

  const toggleContactsDrawer = () =>
    setOverlays(prev => ({
      ...prev,
      leftDrawer: {
        contacts: !prev.leftDrawer.contacts,
        chatHistory: false,
      }
    }));

  const toggleChatHistoryDrawer = () =>
    setOverlays(prev => ({
      ...prev,
      leftDrawer: {
        contacts: false,
        chatHistory: !prev.leftDrawer.chatHistory,
      }
    }));

  return (
    <nav>
      <div className='nav-left'>
        <div className='logo-icon'>b.</div>
        <SearchBar />
      </div>
      <div className='nav-center'>
        <NavLink
          end
          to="feed"
          className={({ isActive }) =>
            isActive ? 'nav-link nav-selected' : 'nav-link'
          }
        >
          <FeedIcon className='nav-icon' />
        </NavLink>
        {/* <div
          className={(!overlays.contacts && !overlays.chat) ? 'nav-link nav-earth-selected' : 'nav-link nav-earth'}
          onClick={() => setOverlays(() => ({ chat: false, contacts: false }))}
        >
          <EarthIcon className='nav-icon' />
        </div> */}
        <div
          className={overlays.leftDrawer.chatHistory ? 'nav-link nav-selected' : 'nav-link'}
          onClick={toggleChatHistoryDrawer}
        >
          <ChatIcon className='nav-icon' />
        </div>
        <div
          className={overlays.leftDrawer.contacts ? 'nav-link nav-selected' : 'nav-link'}
          onClick={toggleContactsDrawer}
        >
          <PeopleIcon className='nav-icon' />
        </div>
        <NavLink
          end
          to="messages"
          className={({ isActive }) =>
            isActive ? 'nav-link smaller nav-selected' : 'nav-link smaller'
          }
        >
          <SearchIcon className='nav-icon' />
        </NavLink>
      </div>
      <div className='nav-right'>
        <NavLink
          end
          to="settings"
          className={({ isActive }) =>
            isActive ? 'nav-link smaller nav-selected' : 'nav-link smaller'
          }
        >
          <SettingsIcon className='nav-icon' />
        </NavLink>
        <div className='nav-link smaller nav-profile'>
          <div className='nav-icon'>
            <img src={profile} alt='Profile' className='profile-icon' />
          </div>
        </div>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className='nav-search'>
      <SearchIcon className='search-icon' />
      <input type="text" placeholder="Search the planet" />
    </div>
  );
}

export default Navbar;