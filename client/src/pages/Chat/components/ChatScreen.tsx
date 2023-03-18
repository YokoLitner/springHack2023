import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mockedChats } from './Chats'
import SendBlock from './SendBlock'

// components
import { Message } from 'components/EXPORT'

// icons
import { ArrowIcon, KebabMenuIcon, PaperClipIcon } from 'assets/icons/EXPORT'

// types
import { IChat } from 'types/EXPORT'

const ChatScreen = () => {
  const { id = '0' } = useParams<{ id?: string }>()
  const [chatInfo, setChatInfo] = useState({} as IChat)

  useEffect(() => {
    setChatInfo(mockedChats[Number(id)])
  }, [id])

  return (
    <div className="h-full p-3 sm:p-8">
      <div className="flex flex-row items-center w-full pb-4 border-b justify-between">
        <div className="flex flex-row items-center">
          <Link to="/" className="block p-5 sm:hidden">
            <ArrowIcon width="35px" className="rotate-180 fill-blue-600" />
          </Link>
          <Link to={`/profile/${1}`} className="flex flex-row items-center cursor-pointer">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-300" />
            <div className="text-lg font-semibold ml-4">{chatInfo.name}</div>
          </Link>
        </div>
        {/* <KebabMenuIcon width="20px" className="fill-blue-600 cursor-pointer ml-auto" /> */}
      </div>
      <div className="overflow-y-auto align-bottom flex flex-col justify-end h-4/5 mb-4">
        <div className="w-full text-gray-400 text-center">20 апреля</div>
        {chatInfo.messages?.map(msg => (
          <Message message={msg} key={msg.id} />
        ))}
      </div>
      <SendBlock />
    </div>
  )
}

export default ChatScreen
