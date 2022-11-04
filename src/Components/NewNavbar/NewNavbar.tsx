import { NavLink } from 'react-router-dom';
import { ReactComponent as PeopleIcon } from '../../Assets/people_icon.svg';
import { ReactComponent as ChatIcon } from '../../Assets/chat_icon.svg';
import { ReactComponent as SettingsIcon } from '../../Assets/settings_icon.svg';
import { ReactComponent as SearchIcon } from '../../Assets/search_icon.svg';
import EarthIcon from '../../Assets/earth_icon';
import './newnavbar.scss';

function NewNavbar() {

  return (
    <nav>
      <NavLink
        end
        to="chat-list"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-selected' : 'nav-link'
        }
      >
        <ChatIcon className='nav-icon' />
      </NavLink>
      <NavLink
        end
        to="contacts"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-selected' : 'nav-link'
        }
      >
        <PeopleIcon className='nav-icon' />
      </NavLink>
      <NavLink
        end
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav-link nav-earth-selected' : 'nav-link nav-earth'
        }
      >
        <EarthIcon className='nav-icon' />
      </NavLink>
      <NavLink
        end
        to="messages"
        className={({ isActive }) =>
          isActive ? 'nav-link smaller nav-selected' : 'nav-link smaller'
        }
      >
        <SearchIcon className='nav-icon' />
      </NavLink>
      <NavLink
        end
        to="settings"
        className={({ isActive }) =>
          isActive ? 'nav-link smaller nav-selected' : 'nav-link smaller'
        }
      >
        <SettingsIcon className='nav-icon' />
      </NavLink>
    </nav>
  );
}

export default NewNavbar;