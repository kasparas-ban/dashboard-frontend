import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AppContext, ChatOverlay } from '../../AppContext';
import { ReactComponent as CloseIcon } from '../../Assets/Basic/x_icon.svg';
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
  closed: {
    bottom: "-22rem",
    transition: { type: "linear", duration: 0.08 }
  }
};

function ChatPanel(props: { chatInfo: ChatOverlay, index: number }) {
  const { setOverlays } = useContext(AppContext);
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

  const messages: IMessage[] = [
    {
      messId: 1,
      from: user.id,
      mess: 'Hi there!',
      time: new Date(),
    },
    {
      messId: 2,
      from: user.id,
      mess: 'How are ya?',
      time: new Date(),
    },
    {
      messId: 3,
      from: 1234567890,
      mess: "Hey! I'm fine, how are you?",
      time: new Date(),
    },
    {
      messId: 4,
      from: user.id,
      mess: "I'm fine too. Thanks for asking!",
      time: new Date(),
    },
    {
      messId: 5,
      from: 1234567890,
      mess: "No problem. You asked me first.",
      time: new Date(),
    },
    {
      messId: 6,
      from: user.id,
      mess: "Oh yea, I just noticed it.",
      time: new Date(),
    },
    {
      messId: 7,
      from: user.id,
      mess: "Nevermind then, I take back my compliment. It was silly for me to say it.",
      time: new Date(),
    },
    {
      messId: 8,
      from: 1234567890,
      mess: "Well, it's a bit too late for that.",
      time: new Date(),
    },
    {
      messId: 9,
      from: 1234567890,
      mess: "I mean the compliment is already out there and I received it. You can't do nothin about that.",
      time: new Date(),
    },
  ];

  return (
    <motion.div
      variants={slideChat}
      initial="closed"
      animate="open"
      exit="closed"
      className='chat-container'
      style={{ left: 23 + (21 * props.index) + 'rem' }}
      layout
    >
      <div className="chat-header">
        <div className='chat-header-pic'></div>
        <div className='chat-header-name'>{props.chatInfo.user?.name}</div>
        <CloseIcon className='chat-close-icon' onClick={handleClose} />
      </div>
      <div className="chat-body">
        <ChatMessages messages={messages} />
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
  return (
    <>
      {
        props.messages.map((msg, idx) => {
          const userAuthor = props.messages[idx].from === 1234567890;
          const sideChange = props.messages[idx + 1]?.from !== msg.from;
          const hideIcon = (props.messages[idx + 1]?.from === msg.from) || userAuthor;

          const trCorner = userAuthor && props.messages[idx - 1]?.from === msg.from;
          const brCorner = userAuthor && !sideChange;

          const tlCorner = !userAuthor && props.messages[idx - 1]?.from === msg.from;
          const blCorner = !userAuthor && !sideChange;

          if (userAuthor) {
            return (
              <div className={`message-row message-author ${sideChange ? 'row-mb' : ''}`}>
                <div
                  key={msg.messId}
                  className={`message-body message-no-icon ${trCorner ? 'tr-corner' : ''} ${brCorner ? 'br-corner' : ''}`}
                >
                  {msg.mess}
                </div>
              </div>
            );
          }

          return (
            <div className={`message-row ${sideChange ? 'row-mb' : ''}`}>
              {!hideIcon && <div className='message-icon'></div>}
              <div
                key={msg.messId}
                className={`message-body ${hideIcon ? 'message-no-icon bl-corner' : ''} ${tlCorner ? 'tl-corner' : ''} ${blCorner ? 'bl-corner' : ''}`}
              >
                {msg.mess}
              </div>
            </div>
          )
        })
      }
    </>
  );
}

export default ChatPanel;