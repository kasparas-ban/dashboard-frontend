import { useState } from "react";
import './chatList.scss';

interface IMessage {
  body: string,
  author: string,
  time: Date,
}

interface IChat {
  chatId: string,
  members: string[],
  messages: IMessage[],
}

interface IChats {
  [key: string]: IChat
}

function ChatList() {
  const chatList: IChats = {
    'chatid-1': {
      'chatId': '1',
      'members': ['John Doe'],
      'messages': [
        {
          body: 'hello, how are you?',
          author: 'John Doe',
          time: new Date(),
        },
        {
          body: "I'm fine! How are you?",
          author: 'You',
          time: new Date(),
        },
        {
          body: "Very well, thanks",
          author: 'John Doe',
          time: new Date(),
        },
      ],
    },
    'chatid-2': {
      'chatId': '2',
      'members': ['Kate Rose'],
      'messages': [
        {
          body: 'hi, Kate! How are you?',
          author: 'You',
          time: new Date(),
        },
        {
          body: "I'm fine! How are you?",
          author: 'Kate Rose',
          time: new Date(),
        },
        {
          body: "Very well, thanks",
          author: 'You',
          time: new Date(),
        },
      ]
    },
    'chatid-3': {
      'chatId': '3',
      'members': ['Rick Owens'],
      'messages': [
        {
          body: "Where's my money, Rick?",
          author: 'You',
          time: new Date(),
        },
        {
          body: "Rick, I know you're reading this!",
          author: 'You',
          time: new Date(),
        },
      ]
    },
  };

  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);

  const handleSelect = (chatId: string) => {
    setSelectedChat(Object.values(chatList).find(el => el.chatId === chatId) ?? null);
  };

  return (
    <div className="chats-section">
      <div className='chat-list-section'>
        <div className='chat-section-message'>Messages</div>
        {Object.values(chatList).map(chat => {
          const members = chat.members;
          const lastMessage = chat.messages[chat.messages.length - 1];

          return (
            <div className={`chat-list ${selectedChat?.chatId === chat.chatId ? 'selected' : ''}`} key={chat.chatId} onClick={() => handleSelect(chat.chatId)}>
              <div className='account-icon'></div>
              <div className="chat-selection">
                <div className="chat-info">
                  <div className="chat-members">{members[0]}</div>
                  <div className="">{`${lastMessage.time.getHours()}:${lastMessage.time.getMinutes()}`}</div>
                </div>
                <div className="">{lastMessage.body}</div>
              </div>
            </div>
          )
        })}
      </div>
      <ChatSection chat={selectedChat} />
    </div>
  );
}

function ChatSection(props: { chat: IChat | null }) {
  return (
    <div className="chat-messages">
      {
        props.chat ? (
          <>
            <ChatHeader chatMembers={props.chat?.members} />
            <ChatBody chat={props.chat} />
            <ChatInputs />
          </>
        ) : null
      }
    </div>
  );
}

function ChatHeader(props: { chatMembers: string[] }) {
  return (
    <div className='chat-header'>
      <div className='header-account-icon'></div>
      <div className='header-members'>{props.chatMembers[0]}</div>
    </div>
  );
}

function ChatBody(props: { chat: IChat }) {
  return (
    <div className='chat-body'>
      {props.chat.messages.map(mess => (
        <div className={`message ${mess.author === 'You' ? 'message-self' : ''}`}>
          {mess.author !== 'You' ? <div className='account-icon message-account-icon'></div> : null}
          <div>
            <div className="message-body">{mess.body}</div>
            <div className={`message-time ${mess.author === 'You' ? 'message-time-r' : ''}`}>{mess.time.toLocaleDateString() + ' ' + mess.time.toLocaleTimeString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatInputs() {
  return (
    <div className="message-input">
      <input type="text" placeholder="Enter message" title="Enter text message here" />
      <button className='send-button'>Send</button>
    </div>
  );
}

export default ChatList;