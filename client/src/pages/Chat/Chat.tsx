import ChatScreen from './components/ChatScreen'
import SplitPaneLeft from './components/SidePanel'

const Chat = () => {
  return (
    <div className="flex flex-row">
      <SplitPaneLeft />
      <div className="w-full sm:w-3/4 h-screen sm:block">
        {true ? (
          <ChatScreen />
        ) : (
          <div className="h-full flex justify-center items-center text-xl text-gray-500">Chats not selected</div>
        )}
      </div>
    </div>
  )
}

export default Chat
