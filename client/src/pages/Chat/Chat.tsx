import Header from 'components/Header'
import ChatScreen from './components/ChatScreen'
import SplitPaneLeft from './components/SidePanel'
import { useParams } from 'react-router-dom'
import cls from 'classnames'

const Chat = () => {
  const params = useParams()
  return (
    <div className="h-[100vh]">
      <Header />
      <div className="flex flex-row">
        <SplitPaneLeft />
        <div className={cls('w-full sm:w-3/4', { hidden: Object.entries(params).length === 0 })}>
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
