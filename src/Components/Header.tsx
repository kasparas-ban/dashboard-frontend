import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../Assets/account_icon.svg';
import { ReactComponent as ChatIcon } from '../Assets/chat_icon.svg';
import EarthIcon from '../Assets/earth_icon';
import './header.scss';

function Header() {
  const selectedClass = 'outline outline-white outline-4';
  const selectedIconClass = 'outline outline-white outline-8 bg-white fill-slate-800';
  const hoverClass = 'hover:bg-sky-700 hover:outline hover:outline-sky-700 hover:outline-8';

  const location = useLocation();

  const getSelected = () => {
    if (location.pathname === '/') return 'earth';
    if (location.pathname === '/chat-list') return 'chat-list';
    if (location.pathname === '/account') return 'account';
    return '';
  }

  return (
    <header className='h-full w-20 flex flex-col py-10 bg-sky-900'>
      <Link to={`/`}>
        <EarthIcon
          className={`header-icon h-10 w-10 m-auto mb-8 cursor-pointer rounded-full ${getSelected() === 'earth' ? selectedClass : "hover:outline-4 " + hoverClass}`}
        />
      </Link>
      <Link to={`/chat-list`}>
        <ChatIcon
          className={`header-icon fill-slate-300 h-7 w-7 m-auto mb-8 cursor-pointer ${getSelected() === 'chat-list' ? selectedIconClass : hoverClass}`}
        />
      </Link>
      <Link to={`/account`}>
        <AccountIcon
          className={`header-icon fill-slate-300 h-7 w-7 m-auto mb-8 cursor-pointer ${getSelected() === 'account' ? selectedIconClass : hoverClass}`}
        />
      </Link>
    </header>
  );
}


export default Header;