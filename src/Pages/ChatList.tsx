import { useState } from "react";

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
    <>
      <div className='h-full w-96 flex flex-col py-10 border-r'>
        <div className="text-3xl mb-6 pl-6 font-semibold">Messages</div>
        {Object.values(chatList).map(chat => {
          const members = chat.members;
          const lastMessage = chat.messages[chat.messages.length - 1];

          return (
            <div className={`grid grid-cols-7 pl-6 py-2 hover:bg-slate-300 hover:cursor-pointer ${selectedChat?.chatId === chat.chatId ? 'bg-slate-300' : ''}`} key={chat.chatId} onClick={() => handleSelect(chat.chatId)}>
              <div className="bg-blue-300 w-10 h-10 rounded-full my-auto"></div>
              <div className="col-span-6">
                <div className="flex justify-between mr-6">
                  <div className="font-semibold">{members[0]}</div>
                  <div className="">{`${lastMessage.time.getHours()}:${lastMessage.time.getMinutes()}`}</div>
                </div>
                <div className="">{lastMessage.body}</div>
              </div>
            </div>
          )
        })}
      </div>
      <ChatSection chat={selectedChat} />
    </>
  );
}

function ChatSection(props: { chat: IChat | null }) {
  return (
    <div className="grow flex flex-col">
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
    <div className="flex border-b py-4 px-4">
      <div className="w-14 h-14 bg-blue-300 rounded-full mr-4"></div>
      <div className="font-bold my-auto text-xl">{props.chatMembers[0]}</div>
    </div>
  );
}

function ChatBody(props: { chat: IChat }) {
  return (
    <div className="p-4 grow bg-slate-100">
      {props.chat.messages.map(mess => (
        <div className={`flex ${mess.author === 'You' ? 'justify-end' : ''}`}>
          {mess.author !== 'You' ? <div className="w-10 h-10 bg-slate-300 rounded-full mr-2"></div> : null}
          <div>
            <div className="bg-slate-300 rounded-lg p-2">{mess.body}</div>
            <div className={`text-sm ${mess.author === 'You' ? 'text-end' : ''}`}>{mess.time.toLocaleDateString() + ' ' + mess.time.toLocaleTimeString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatInputs() {
  return (
    <div className="flex h-12 border-t">
      <input className="grow h-8 mx-2 my-auto placeholder:italic placeholder:text-slate-400 pl-2 focus:outline-none" type="text" placeholder="Enter message" title="Enter text message here" />
      <button className="h-8 px-4 bg-blue-300 rounded-lg mr-2 my-auto hover:bg-blue-400">Send</button>
    </div>
  );
}

export default ChatList;