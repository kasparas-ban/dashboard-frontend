import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppStore } from '../../appStore';
import { ReactComponent as PeopleIcon } from '../../Assets/Navbar/people_icon.svg';
import { ReactComponent as ChatIcon } from '../../Assets/chat_icon.svg';
import { ReactComponent as SettingsIcon } from '../../Assets/Navbar/settings_icon.svg';
import { ReactComponent as SearchIcon } from '../../Assets/search_icon.svg';
import { ReactComponent as FeedIcon } from '../../Assets/Navbar/feed_icon.svg';
import EarthIcon from '../../Assets/Navbar/earth_icon';
import profile from '../../Assets/profile_example.jpg';
import NavProfile from '../NavProfile/NavProfile';
import './navbar.scss';

function Navbar() {
  const leftDrawer = useAppStore(state => state.leftDrawer);
  const navProfile = useAppStore(state => state.navProfile);
  const toggleLeftDrawer = useAppStore(state => state.toggleLeftDrawer);
  const toggleNavProfile = useAppStore(state => state.toggleNavProfile);
  const clearOverlays = useAppStore(state => state.clearOverlays);

  return (
    <nav>
      <div className='nav-left'>
        <div className='logo-icon' onClick={clearOverlays}>b.</div>
        <SearchBar />
      </div>
      <div className='nav-center'>
        <div
          className={leftDrawer.feed ? 'nav-link nav-selected' : 'nav-link'}
          onClick={() => toggleLeftDrawer('feed')}
        >
          <FeedIcon className='nav-icon' />
        </div>
        {/* <div
          className={(!overlays.contacts && !overlays.chat) ? 'nav-link nav-earth-selected' : 'nav-link nav-earth'}
          onClick={() => setOverlays(() => ({ chat: false, contacts: false }))}
        >
          <EarthIcon className='nav-icon' />
        </div> */}
        <div
          className={leftDrawer.chatHistory ? 'nav-link nav-selected' : 'nav-link'}
          onClick={() => toggleLeftDrawer('chatHistory')}
        >
          <ChatIcon className='nav-icon' />
        </div>
        <div
          className={leftDrawer.contacts ? 'nav-link nav-selected' : 'nav-link'}
          onClick={() => toggleLeftDrawer('contacts')}
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
          <motion.div
            className='nav-icon'
            whileTap={{ scale: 0.95, transition: { duration: 0.01 } }}
            onClick={toggleNavProfile}
          >
            <img src={profile} alt='Profile' className='profile-icon' />
          </motion.div>
          {navProfile && (
            <NavProfile />
          )}
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