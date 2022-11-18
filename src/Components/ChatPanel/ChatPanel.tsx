import { motion } from 'framer-motion';
import { useContext, useRef, useState } from 'react';
import { AppContext, ChatOverlay } from '../../AppContext';
import { dateToYMD, isSameDay, isToday } from '../../Helpers/dateUtils';
import { ReactComponent as CloseIcon } from '../../Assets/Basic/x_icon.svg';
import { ReactComponent as MinimizeIcon } from '../../Assets/Basic/minimize_icon.svg';
import { ReactComponent as MaximizeIcon } from '../../Assets/Basic/chevron_down_icon.svg';
import { ReactComponent as ArrowDown } from '../../Assets/Basic/arrow_down_icon.svg';
import { ReactComponent as EmojiIcon } from '../../Assets/Chat/emoji_icon.svg';
import { ReactComponent as PhotoIcon } from '../../Assets/Chat/photo_icon.svg';
import { ReactComponent as SendIcon } from '../../Assets/Chat/send.svg';
import './chatPanel.scss';

interface IMessage {
  messId: number,
  from: number,
  mess: string,
  time: Date,
}

const slideChat = {
  open: {
    bottom: "0rem",
    transition: { type: "linear", duration: 0.08 }
  },
  minimized: {
    bottom: "-26.8rem",
    transition: { type: "linear", duration: 0.08 }
  },
  closed: {
    bottom: "-30rem",
    transition: { type: "linear", duration: 0.08 }
  }
};

function ChatPanel(props: { chatInfo: ChatOverlay, index: number }) {
  const { setOverlays } = useContext(AppContext);
  const [showScroll, setShowScroll] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const user = props.chatInfo.user;

  const handleClose = () =>
    setOverlays(prev => (
      {
        ...prev,
        chats: [
          ...prev.chats.filter((chat: ChatOverlay, idx: number) => idx !== props.index)
        ]
      }
    ));

  const handleMinimize = () =>
    setOverlays(prev => (
      {
        ...prev,
        chats: [
          ...prev.chats.map((chat: ChatOverlay, idx: number) => {
            if (idx === props.index) chat.minimized = true;
            return chat;
          })
        ]
      }
    ));

  const handleMaximize = () =>
    setOverlays(prev => (
      {
        ...prev,
        chats: [
          ...prev.chats.map((chat: ChatOverlay, idx: number) => {
            if (idx === props.index) chat.minimized = false;
            return chat;
          })
        ]
      }
    ));

  const handleScroll = (e: any) => {
    const hideEnd = Math.abs(e.target.scrollTop) < 10;
    if (hideEnd) {
      setShowScroll(() => false);
    } else {
      setShowScroll(() => true);
    }
  };

  const scrollToBottom = () => chatRef.current?.scrollBy({
    top: Math.abs(chatRef.current.scrollTop),
    behavior: 'smooth'
  })

  const messages: IMessage[] = [
    {
      messId: 1,
      from: user.id,
      mess: 'Hi there!',
      time: new Date('2022-10-16T03:24:00'),
    },
    {
      messId: 2,
      from: user.id,
      mess: 'How are ya?',
      time: new Date('2022-10-16T03:24:00'),
    },
    {
      messId: 3,
      from: 1234567890,
      mess: "Hey! I'm fine, how are you?",
      time: new Date('2022-11-14T03:25:00'),
    },
    {
      messId: 4,
      from: user.id,
      mess: "I'm fine too. Thanks for asking!",
      time: new Date('2022-11-14T03:26:00'),
    },
    {
      messId: 5,
      from: 1234567890,
      mess: "No problem. You asked me first.",
      time: new Date('2022-11-16T03:27:00'),
    },
    {
      messId: 6,
      from: user.id,
      mess: "Oh yea, I just noticed it.",
      time: new Date('2022-11-16T03:48:00'),
    },
    {
      messId: 7,
      from: user.id,
      mess: "Nevermind then, I take back my compliment. It was silly for me to say it.",
      time: new Date('2022-11-16T03:50:00'),
    },
    {
      messId: 8,
      from: 1234567890,
      mess: "Well, it's a bit too late for that.",
      time: new Date('2022-11-17T09:48:00'),
    },
    {
      messId: 9,
      from: 1234567890,
      mess: "I mean the compliment is already out there and I received it. You can't do nothin about that.",
      time: new Date('2022-11-17T09:50:00'),
    },
    {
      messId: 10,
      from: 1234567890,
      mess: "Anyway, the compliment is mine. I took it.",
      time: new Date('2022-11-18T09:50:00'),
    },
    {
      messId: 11,
      from: user.id,
      mess: "You took it alright",
      time: new Date('2022-11-18T10:20:00'),
    },
    {
      messId: 12,
      from: user.id,
      mess: "I'm not gonna argue with that",
      time: new Date('2022-11-18T10:32:00'),
    },
  ].reverse();

  return (
    <motion.div
      variants={slideChat}
      initial='closed'
      animate={props.chatInfo.minimized ? 'minimized' : 'open'}
      exit='closed'
      className='chat-container'
      style={{ left: 23 + (21 * props.index) + 'rem' }}
      layout
    >
      <div className="chat-header">
        <div className='chat-header-pic'></div>
        <div className='chat-header-name'>{props.chatInfo.user?.name}</div>
        {
          props.chatInfo.minimized
            ? (<MaximizeIcon className='chat-header-icon maximize-icon' onClick={handleMaximize} />)
            : (<MinimizeIcon className='chat-header-icon minimize-icon' onClick={handleMinimize} />)
        }
        <CloseIcon className='chat-header-icon' onClick={handleClose} />
      </div>
      <div ref={chatRef} className="chat-body" onScroll={handleScroll}>
        <ChatMessages messages={messages} />
        {showScroll && (
          <motion.div
            className='scroll-arrow'
            whileTap={{ scale: 0.9, transition: { duration: 0.01 } }}
            onClick={scrollToBottom}
          >
            <ArrowDown />
          </motion.div>
        )}
      </div>
      <div className="chat-footer">
        <PhotoIcon className='input-icon' />
        <EmojiIcon className='input-icon' />
        <input type="text" placeholder='Enter message' />
        <SendIcon className='input-icon send-icon' />
      </div>
    </motion.div >
  );
}

function ChatMessages(props: { messages: IMessage[] }) {
  let showTimeOnly = false;

  const isNextRowDate = (date: Date, prevDate: Date | undefined) =>
    isToday(date) && prevDate
      ? (date.getTime() - prevDate?.getTime()) / 1000 / 60 > 10
      : !isSameDay(date, prevDate);

  const shouldShowDate = (currMsg: IMessage, prevMsg: IMessage | undefined) =>
    isToday(currMsg.time) && prevMsg
      ? (currMsg.time.getTime() - prevMsg.time.getTime()) / 1000 / 60 > 10
      : !isSameDay(currMsg.time, prevMsg?.time);

  return (
    <>
      {
        props.messages.map((msg, idx) => {
          const nextMsg: IMessage | undefined = props.messages[idx - 1];
          const prevMsg: IMessage | undefined = props.messages[idx + 1];

          const isAuthor = msg.from === 1234567890;
          const sideChange = nextMsg?.from !== msg.from;
          const hideIcon = (nextMsg?.from === msg.from) || isAuthor;

          const nextDateRow = isNextRowDate(nextMsg?.time, msg?.time);

          showTimeOnly = isToday(prevMsg?.time);

          // Time is shown in the following format
          // - if it's today, show time at 10 min intervals
          // - otherwise, show time for the whole day
          const showDate = shouldShowDate(msg, prevMsg);

          const trCorner = isAuthor && prevMsg?.from === msg.from && !showDate;
          const brCorner = isAuthor && !sideChange && !nextDateRow;

          const tlCorner = !isAuthor && prevMsg?.from === msg.from && !showDate;
          const blCorner = !isAuthor && !sideChange && !nextDateRow;

          if (isAuthor) {
            return (
              <div key={msg.messId}>
                {showDate && <div className='chat-date'>{dateToYMD(msg.time, showTimeOnly)}</div>}
                <div className={`message-row message-author ${sideChange ? 'row-mb' : ''}`}>
                  <div
                    className={`message-body message-no-icon ${trCorner ? 'tr-corner' : ''} ${brCorner ? 'br-corner' : ''}`}
                  >
                    {msg.mess}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={msg.messId}>
              {showDate && <div className='chat-date'>{dateToYMD(msg.time, showTimeOnly)}</div>}
              <div className={`message-row ${sideChange ? 'row-mb' : ''}`}>
                {!hideIcon && <div className='message-icon'></div>}
                <div
                  className={`message-body ${hideIcon ? 'message-no-icon' : ''} ${tlCorner ? 'tl-corner' : ''} ${blCorner ? 'bl-corner' : ''}`}
                >
                  {msg.mess}
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

export default ChatPanel;