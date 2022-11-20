import { useContext } from 'react';
import { AnimatePresence } from "framer-motion";
import { AppContext, ChatOverlay } from '../../AppContext';
import Contacts from '../../Components/ContactsDrawer/ContactsDrawer';
import GlobeWindow from '../../Components/Globe/GlobeWindow';
import ChatPanel from '../../Components/ChatPanel/ChatPanel';
import ChatHistoryDrawer from '../../Components/ChatHistoryDrawer/ChatHistoryDrawer';
import FeedDrawer from '../../Components/FeedDrawer/FeedDrawer';
import './main.scss';

function Main() {
  const { overlays } = useContext(AppContext);

  return (
    <div className="main-container">
      <GlobeWindow />
      <AnimatePresence>
        {overlays.leftDrawer.feed && (
          <FeedDrawer key='feed' />
        )}
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