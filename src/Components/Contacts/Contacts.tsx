import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { motion } from "framer-motion";
import { ReactComponent as CloseDrawerIcon } from '../../Assets/Contacts/close_icon1.svg';
import { ReactComponent as LocationIcon } from '../../Assets/Chat/location_icon.svg';
import './contacts.scss';

interface IUser {
  pic: string | null,
  name: string,
  id: number,
}

const slideDrawer = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "linear", staggerChildren: 0.01, duration: 0.02 }
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
    transition: { type: "spring", duration: 0.5 }
  },
  closed: {
    opacity: 0,
    x: "-22vw",
  }
};

function Contacts() {
  const { setOverlays } = useContext(AppContext);

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
          <CloseDrawerIcon className='close-drawer-icon' onClick={() => setOverlays(prev => ({ ...prev, contacts: !prev.contacts }))} />
        </motion.div>
        <UserList users={contactsList} />
      </div>
    </>
  );
}

function UserList(props: { users: IUser[] }) {
  return (
    <motion.ul
      variants={slideDrawer}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {props.users.map(user =>
        <motion.li
          key={user.id}
          variants={userRow}
          whileTap={{ scale: 0.98, transition: { duration: 0.01 } }}
        >
          <User user={user} />
        </motion.li>
      )}
    </motion.ul>
  );
}

function User(props: { user: IUser }) {
  return (
    <>
      <div className='user-pic'></div>
      <div className='user-name'>{props.user.name}</div>
      <div className='user-options'>
        <LocationIcon className='user-icon' />
      </div>
    </>
  );
}

export default Contacts;