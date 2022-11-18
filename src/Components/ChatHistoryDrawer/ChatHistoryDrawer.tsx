import { useContext } from 'react';
import { AppContext, ChatOverlay, IMessage, IUser } from '../../AppContext';
import { shortenedDateToYMD } from '../../Helpers/dateUtils';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import './chatHistoryDrawer.scss';

export interface IChat {
  id: number,
  new: boolean,
  user: IUser,
  lastMsg: IMessage,
}

const chatList: IChat[] = [
  {
    id: 1,
    new: false,
    user: {
      pic: null,
      name: "Anna Somberg",
      id: 1,
    },
    lastMsg: {
      messId: 1,
      from: 1,
      msg: "Hi there! How are you?",
      time: new Date('2022-10-16T03:24:00'),
    },
  },
  {
    id: 2,
    new: false,
    user: {
      pic: null,
      name: "Josh Mandelbrot",
      id: 2,
    },
    lastMsg: {
      messId: 1,
      from: 2,
      msg: "When are we going out?",
      time: new Date('2022-10-16T04:24:00'),
    },
  },
  {
    id: 3,
    new: false,
    user: {
      pic: null,
      name: "Bret Wonderwood",
      id: 3,
    },
    lastMsg: {
      messId: 1,
      from: 3,
      msg: "Where are ya?",
      time: new Date('2022-10-16T11:24:00'),
    },
  },
  {
    id: 4,
    new: false,
    user: {
      pic: null,
      name: "Anabelle William",
      id: 4,
    },
    lastMsg: {
      messId: 1,
      from: 4,
      msg: "Haha! This is the best joke I've ever heard! Seriously!",
      time: new Date('2022-10-16T11:26:00'),
    },
  },
  {
    id: 5,
    new: false,
    user: {
      pic: null,
      name: "Miriam Park",
      id: 5,
    },
    lastMsg: {
      messId: 1,
      from: 5,
      msg: "So anyway, I was walking my dog and then I this wonderful sign!",
      time: new Date('2022-10-17T03:24:00'),
    },
  },
];

function ChatHistoryDrawer() {
  const { overlays, setOverlays } = useContext(AppContext);

  const handleItemClick = (item: IChat) => {
    // Ignore if duplicate
    if (overlays.chats.some((chat: ChatOverlay) => chat.user?.id === item.id)) return;

    // Limit to 4 chat overlays
    const chatOverlays = overlays.chats.slice(0, 3);
    chatOverlays.push({ minimized: false, user: item.user });

    // Update overlays
    setOverlays(prev => ({
      ...prev,
      chats: chatOverlays,
    }));
  };

  return (
    <LeftDrawer
      drawerTitle={'Chats'}
      itemList={chatList}
      handleItemClick={handleItemClick}
      content={(props: { item: IChat }) => <ChatItem item={props.item} />}
    />
  );
}

function ChatItem(props: { item: IChat }) {
  const date = shortenedDateToYMD(props.item.lastMsg.time);

  const formatText = (text: string, limit: number) => {
    const stripLengh = limit - 3 - date.length;
    const strippedText = text.slice(0, stripLengh);
    return text.length === strippedText.length
      ? strippedText + ''
      : strippedText + '...';
  };

  return (
    <>
      <div className='ch-user-pic'></div>
      <div className='ch-chat-summary'>
        <div className='ch-top'>
          <span className='ch-user-name'>{formatText(props.item.user.name, 40)} · </span>
          <span className='ch-date'>{date}</span>
        </div>
        <div className='ch-last-msg'>{formatText(props.item.lastMsg.msg, 45)}</div>
      </div>
    </>
  );
}

export default ChatHistoryDrawer;