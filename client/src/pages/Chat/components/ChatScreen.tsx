import { Link } from 'react-router-dom'

// components
import { Message } from 'components/EXPORT'

// icons
import { ArrowIcon, KebabMenuIcon, PaperClipIcon } from 'assets/icons/EXPORT'

// types
import { IMessage } from 'types/EXPORT'

const mockMessages: IMessage[] = [
  {
    id: 0,
    content: 'Как ты себя чувтсвуешь?',
    created_at: new Date(999999),
    sender_id: 1,
    type: 'text'
  },
  {
    id: 1,
    content: 'Круто!',
    created_at: new Date(),
    sender_id: 5,
    type: 'text'
  }
]

const ChatScreen = () => {
  return (
    <div className="h-full p-3 sm:p-8">
      <div className="flex flex-row items-center w-full pb-4 border-b justify-between">
        <div className="flex flex-row items-center">
          <Link to="/" className="block p-5 sm:hidden">
            <ArrowIcon width="35px" className="rotate-180 fill-blue-600" />
          </Link>
          <Link to={`/profile/${0}`} className="flex flex-row items-center cursor-pointer">
            <div className="w-[50px] h-[50px] rounded-full bg-gray-300" />
            {/* TODO create mocked chats and link */}
            <div className="text-lg font-semibold ml-4">Чат продаж</div>
          </Link>
        </div>
        {/* <KebabMenuIcon width="20px" className="fill-blue-600 cursor-pointer ml-auto" /> */}
      </div>
      <div className="overflow-y-auto align-bottom flex flex-col justify-end h-4/5 mb-4">
        <div className="w-full text-gray-400 text-center">20 апреля</div>
        {mockMessages.map(msg => (
          <Message message={msg} key={msg.id} />
        ))}
      </div>
      <div className="flex flex-row w-full border-t pt-4">
        <PaperClipIcon width="30px" onClick={() => null} className="fill-blue-600 cursor-pointer mr-4" />
        <textarea
          rows={2}
          placeholder="Сообщение"
          className="w-full bg-gray-100 py-2 px-4 rounded-3xl resize-none focus:outline-blue-600"
        />
        <ArrowIcon width="40px" onClick={() => null} className="fill-blue-600 cursor-pointer ml-4" />
      </div>
    </div>
  )
}

export default ChatScreen
