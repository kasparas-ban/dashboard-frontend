import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as ContactsIcon } from '../Assets/contacts_icon.svg';
import { ReactComponent as ChatIcon } from '../Assets/chat_icon.svg';
import { ReactComponent as SettingsIcon } from '../Assets/settings_icon.svg';
import EarthIcon from '../Assets/earth_icon';
import './header.scss';

function Header() {
  const selectedClass = 'outline outline-slate-600 outline-4';
  const selectedIconClass = 'outline outline-slate-600 outline-8 bg-slate-600 fill-slate-100';
  const hoverClass = 'hover:bg-slate-300 hover:outline hover:outline-slate-300 hover:outline-8';

  const location = useLocation();

  const getSelected = () => {
    if (location.pathname === '/') return 'earth';
    if (location.pathname === '/chat-list') return 'chat-list';
    if (location.pathname === '/contacts') return 'contacts';
    if (location.pathname === '/settings') return 'settings';
    return '';
  };

  return (
    <header className='h-full w-20 flex flex-col py-6 bg-slate-200'>
      <div className='mx-auto mb-2'>
        <Link to={`/`}>
          <EarthIcon
            className={`header-icon h-10 w-10 my-4 rounded-full ${getSelected() === 'earth' ? selectedClass : "hover:outline-4 " + hoverClass}`}
          />
        </Link>
      </div>
      <div className='mx-auto mb-2'>
        <Link to={`/chat-list`}>
          <ChatIcon
            className={`header-icon fill-sky-800 h-7 w-7 my-4 ${getSelected() === 'chat-list' ? selectedIconClass : hoverClass}`}
          />
        </Link>
      </div>
      <div className='mx-auto mb-2'>
        <Link to={`/contacts`}>
          <ContactsIcon
            className={`header-icon fill-sky-800 h-7 w-7 my-4 ${getSelected() === 'contacts' ? selectedIconClass : hoverClass}`}
          />
        </Link>
      </div>
      <div className='mx-auto mb-2 mt-auto'>
        <Link to={`/settings`}>
          <SettingsIcon
            className={`header-icon fill-sky-800 h-7 w-7 my-4 ${getSelected() === 'settings' ? selectedIconClass : hoverClass}`}
          />
        </Link>
      </div>
    </header>
  );
}


export default Header;