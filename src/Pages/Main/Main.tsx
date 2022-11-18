import { useContext } from 'react';
import { AnimatePresence } from "framer-motion";
import { AppContext, ChatOverlay } from '../../AppContext';
import Contacts from '../../Components/ContactsDrawer/ContactsDrawer';
import GlobeWindow from '../../Components/Globe/GlobeWindow';
import './main.scss';
import ChatPanel from '../../Components/ChatPanel/ChatPanel';
import ChatHistoryDrawer from '../../Components/ChatHistoryDrawer/ChatHistoryDrawer';

function Main() {
  const { overlays } = useContext(AppContext);

  return (
    <div className="main-container">
      <GlobeWindow />
      <AnimatePresence>
        {overlays.leftDrawer.contacts && (
          <Contacts key='contacts' />
        )}
        {overlays.leftDrawer.chatHistory && (
          <ChatHistoryDrawer key='chatHistory' />
        )}
        {overlays.chats.map((chat: ChatOverlay, idx: number) =>
          <ChatPanel key={'chat-panel-' + chat.user.id} chatInfo={chat} index={idx} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Main;