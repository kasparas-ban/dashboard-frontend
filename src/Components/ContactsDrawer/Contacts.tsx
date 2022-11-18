import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext, IUser } from '../../AppContext';
import { motion } from "framer-motion";
import { ReactComponent as CloseDrawerIcon } from '../../Assets/Basic/close_drawer_icon.svg';
import { ReactComponent as LocationIcon } from '../../Assets/Chat/location_icon.svg';
import { ReactComponent as ChevronDown } from '../../Assets/Basic/chevron_down_icon.svg';
import './contacts.scss';

const slideDrawer = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "linear", staggerChildren: 0.005, duration: 0.02 }
  },
  closed: {
    opacity: 0,
    x: "-22vw",
    transition: { type: "linear" }
  }
};

const userRow = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", duration: 0.3 }
  },
  closed: {
    opacity: 0,
    x: "-22vw",
  }
};

function Contacts() {
  const { setOverlays } = useContext(AppContext);

  const handleDrawerClose = () =>
    setOverlays(prev => ({
      ...prev,
      leftDrawer: {
        contacts: false,
        chatHistory: false,
      }
    }));

  const contactsList: IUser[] = [
    { pic: null, name: 'Jordyn Donin', id: 1 },
    { pic: null, name: 'Desirae Siphoron', id: 2 },
    { pic: null, name: 'Brandon Donin', id: 3 },
    { pic: null, name: 'Philip Press', id: 4 },
    { pic: null, name: 'Nolan Septimus', id: 5 },
    { pic: null, name: 'Madelyn Carder', id: 6 },
    { pic: null, name: 'Kierra Franci', id: 7 },
    { pic: null, name: 'Anika Aminoff', id: 8 },
    { pic: null, name: 'Aspen Bergson', id: 9 },
    { pic: null, name: 'Roger Donin', id: 10 },
    { pic: null, name: 'Mike Lenin', id: 11 },
    { pic: null, name: 'Odin Malodin', id: 12 },
    { pic: null, name: 'Melody Jackson', id: 13 },
    { pic: null, name: 'Anna Lumberjack', id: 14 },
    { pic: null, name: 'Jack Sephire', id: 15 },
    { pic: null, name: 'Lark Mickelson', id: 16 },
    { pic: null, name: 'Hilton Park', id: 17 },
    { pic: null, name: 'Mark Hitman', id: 18 },
    { pic: null, name: 'Willson Jackson', id: 19 },
    { pic: null, name: 'Don Markson', id: 20 },
    { pic: null, name: 'Will Clarkson', id: 21 },
    { pic: null, name: 'Bergjson William', id: 22 },
    { pic: null, name: 'Klark Samson', id: 23 },
    { pic: null, name: 'Lump Press', id: 24 },
    { pic: null, name: 'Brandon Semidon', id: 25 },
  ];

  return (
    <>
      <motion.div
        variants={slideDrawer}
        initial="closed"
        animate="open"
        exit="closed"
        className='contacts-background'
      ></motion.div>

      <div className='contacts-container'>
        <motion.div
          variants={slideDrawer}
          initial="closed"
          animate="open"
          exit="closed"
          className="contacts-title"
        >
          Contacts
          <CloseDrawerIcon className='close-drawer-icon' onClick={handleDrawerClose} />
        </motion.div>
        <UserList users={contactsList} />
      </div>
    </>
  );
}

function UserList(props: { users: IUser[] }) {
  const { overlays, setOverlays } = useContext(AppContext);
  const [listClass, setListClass] = useState('');
  const userListRef = useRef<HTMLUListElement>(null);

  const handleScroll = (e: any) => {
    const hideEnd = e.target.scrollTop + e.target.offsetHeight > e.target.scrollHeight - 10;
    if (hideEnd) {
      setListClass(() => '');
    } else {
      setListClass(() => 'list-end-hidden');
    }
  };

  const scrollToBottom = () => userListRef.current?.scrollBy({ top: 300, behavior: 'smooth' });

  useEffect(() => {
    if (userListRef.current &&
      (userListRef.current.clientHeight !== userListRef.current.scrollHeight)) {
      setListClass('list-end-hidden');
    }
  }, [userListRef]);

  const addChat = (user: IUser) => {
    // Ignore if duplicate
    if (overlays.chats.some((chat: any) => chat.user?.id === user.id)) return;

    // Limit to 4 chat overlays
    const chatOverlays = overlays.chats.slice(0, 3);
    chatOverlays.push({ minimized: false, user });

    // Update overlays
    setOverlays(prev => ({
      ...prev,
      chats: chatOverlays,
    }));
  };

  return (
    <>
      <motion.ul
        variants={slideDrawer}
        initial="closed"
        animate="open"
        exit="closed"
        ref={userListRef}
        onScroll={e => handleScroll(e)}
        className={listClass}
      >
        {props.users.map(user =>
          <motion.li
            key={user.id}
            variants={userRow}
            whileTap={{ scale: 0.98, transition: { duration: 0.01 } }}
            onClick={() => addChat(user)}
          >
            <User user={user} />
          </motion.li>
        )}
      </motion.ul>
      {listClass &&
        <motion.div
          variants={slideDrawer}
          initial="closed"
          animate="open"
          exit="closed"
          whileTap={{ scale: 0.98, transition: { duration: 0.01 } }}
        >
          <ChevronDown className='list-end-icon' onClick={scrollToBottom} />
        </motion.div>
      }
    </>
  );
}

function User(props: { user: IUser }) {
  return (
    <>
      <div className='c-user-pic'></div>
      <div className='c-user-name'>{props.user.name}</div>
      <div className='c-user-options'>
        <LocationIcon className='c-user-icon' />
      </div>
    </>
  );
}

export default Contacts;