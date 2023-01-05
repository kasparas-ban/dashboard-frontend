import { AnimatePresence } from "framer-motion";
import { ChatOverlay, useAppStore } from "../../appStore";
import Contacts from '../../Components/ContactsDrawer/ContactsDrawer';
import GlobeWindow from '../../Components/Globe/GlobeWindow';
import ChatPanel from '../../Components/ChatPanel/ChatPanel';
import ChatHistoryDrawer from '../../Components/ChatHistoryDrawer/ChatHistoryDrawer';
import FeedDrawer from '../../Components/FeedDrawer/FeedDrawer';
import './main.scss';

function Main() {
  const openChats = useAppStore(state => state.chats);
  const leftDrawer = useAppStore(state => state.leftDrawer);

  return (
    <div className="main-container">
      <GlobeWindow />
      <AnimatePresence>
        {leftDrawer.feed && (
          <FeedDrawer key='feed' />
        )}
        {leftDrawer.contacts && (
          <Contacts key='contacts' />
        )}
        {leftDrawer.chatHistory && (
          <ChatHistoryDrawer key='chatHistory' />
        )}
        {openChats.map((chat: ChatOverlay, idx: number) =>
          <ChatPanel key={'chat-panel-' + chat.user.id} chatInfo={chat} index={idx} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Main;