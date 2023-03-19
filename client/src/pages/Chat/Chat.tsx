import Header from 'components/Header'
import ChatScreen from './components/ChatScreen'
import SplitPaneLeft from './components/SidePanel'
import { useParams } from 'react-router-dom'

const Chat = () => {
  const params = useParams()
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <SplitPaneLeft />
        <div className="w-full sm:w-3/4 sm:block">
          {Object.entries(params).length !== 0 ? (
            <ChatScreen />
          ) : (
            <div className="h-full flex justify-center items-center text-xl text-gray-500">Chats not selected</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Chat
