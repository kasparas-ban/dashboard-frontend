import { useContext } from 'react';
import { AppContext, ChatOverlay, IUser } from '../../AppContext';
import { ReactComponent as LocationIcon } from '../../Assets/Chat/location_icon.svg';
import './contactsDrawer.scss';
import LeftDrawer from '../LeftDrawer/LeftDrawer';

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

function ContactsDrawer() {
  const { overlays, setOverlays } = useContext(AppContext);

  const handleItemClick = (item: IUser) => {
    // Ignore if duplicate
    if (overlays.chats.some((chat: ChatOverlay) => chat.user?.id === item.id)) return;

    // Limit to 4 chat overlays
    const chatOverlays = overlays.chats.slice(0, 3);
    chatOverlays.push({ minimized: false, user: item });

    // Update overlays
    setOverlays(prev => ({
      ...prev,
      chats: chatOverlays,
    }));
  };

  return (
    <LeftDrawer
      drawerTitle={'Contacts'}
      itemList={contactsList}
      handleItemClick={handleItemClick}
      content={(props: { item: IUser }) => <User user={props.item} />}
    />
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

export default ContactsDrawer;