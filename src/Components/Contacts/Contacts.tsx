import { useState } from 'react';
import { ReactComponent as ChatIcon } from '../../Assets/Chat/chat_icon.svg';
import { ReactComponent as LocationIcon } from '../../Assets/Chat/location_icon.svg';
import { ReactComponent as FriendsIcon } from '../../Assets/Chat/friends_icon.svg';
import { ReactComponent as ActiveChatIcon } from '../../Assets/Chat/active_chats_icon.svg';
import './contacts.scss';

interface IUser {
  pic: string | null,
  name: string,
}

function Contacts() {
  const contactsList: IUser[] = [
    { pic: null, name: 'Jordyn Donin' },
    { pic: null, name: 'Desirae Siphoron' },
    { pic: null, name: 'Brandon Donin' },
    { pic: null, name: 'Philip Press' },
    { pic: null, name: 'Nolan Septimus' },
    { pic: null, name: 'Madelyn Carder' },
    { pic: null, name: 'Kierra Franci' },
    { pic: null, name: 'Anika Aminoff' },
    { pic: null, name: 'Aspen Bergson' },
    { pic: null, name: 'Roger Donin' },
  ]

  const [navSelected, setNavSelected] = useState("friends");

  return (
    <>
      <div className='contacts-container'>
        <div className='contacts-nav'>
          <button
            className={navSelected === 'chats' ? 'contacts-nav-button selected' : 'contacts-nav-button'}
            onClick={() => setNavSelected('chats')}
          >
            <ActiveChatIcon />
            <div className='title'>Chats</div>
          </button>
          <button
            className={navSelected === 'friends' ? 'contacts-nav-button selected' : 'contacts-nav-button'}
            onClick={() => setNavSelected('friends')}
          >
            <FriendsIcon />
            <div className='title'>Friends</div>
          </button>
        </div>
        <UserList users={contactsList} />
      </div>
    </>
  );
}

function UserList(props: { users: IUser[] }) {
  return (
    <ul>
      {props.users.map(user => <li><User user={user} /></li>)}
    </ul>
  );
}

function User(props: { user: IUser }) {
  return (
    <>
      <div className='user-pic'></div>
      <div className='user-name'>{props.user.name}</div>
      <div className='user-options'>
        <ChatIcon className='user-icon' />
        <LocationIcon className='user-icon' />
      </div>
    </>
  );
}

export default Contacts;