import { useContext } from 'react';
import { AnimatePresence } from "framer-motion";
import { AppContext } from '../../AppContext';
import Contacts from '../../Components/ContactsDrawer/Contacts';
import GlobeWindow from '../../Components/Globe/GlobeWindow';
import './main.scss';
import ChatPanel from '../../Components/ChatPanel/ChatPanel';

function Main() {
  const { overlays } = useContext(AppContext);

  return (
    <div className="main-container">
      <GlobeWindow />
      <AnimatePresence>
        {overlays.contacts && (
          <Contacts key='contacts' />
        )}
        {overlays.chats && (
          <ChatPanel key='chat-panel' />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Main;