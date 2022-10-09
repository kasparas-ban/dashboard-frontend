function ChatList() {
  const messagesList = [
    {
      name: 'John Doe',
      message: 'How are you doing?',
      time: new Date(),
    },
    {
      name: 'Kate Rose',
      message: 'See you tonight!',
      time: new Date(),
    },
    {
      name: 'Rick Owens',
      message: 'Good idea!',
      time: new Date(),
    },
  ];

  return (
    <>
      <div className='h-full w-96 flex flex-col py-10 border-r'>
        <div className="text-3xl mb-6 pl-6 font-semibold">Messages</div>
        {messagesList.map(mess => (
          <div className="grid grid-cols-7 pl-6 py-2 hover:bg-slate-300 hover:cursor-pointer">
            <div className="bg-blue-300 w-10 h-10 rounded-full my-auto"></div>
            <div className="col-span-6">
              <div className="flex justify-between mr-6">
                <div className="font-semibold">{mess.name}</div>
                <div className="">{`${mess.time.getHours()}:${mess.time.getMinutes()}`}</div>
              </div>
              <div className="">{mess.message}</div>
            </div>
          </div>
        ))}
      </div>
      <ChatSection />
    </>
  );
}

function ChatSection() {
  return (
    <div className="grow flex flex-col">
      <ChatHeader />
      <ChatBody />
      <ChatInputs />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="flex border-b py-4 px-4">
      <div className="w-14 h-14 bg-blue-300 rounded-full mr-4"></div>
      <div className="font-bold my-auto text-xl">Travis Barker</div>
    </div>
  );
}

function ChatBody() {
  const messages = [
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
  ]

  return (
    <div className="m-4 grow">
      {messages.map(mess => (
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