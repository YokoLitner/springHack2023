import { FC, useCallback } from 'react'
import { Link } from 'react-router-dom'

// types
import { IChat } from 'types/EXPORT'

const mockedChats: IChat[] = [
  {
    id: 0,
    name: 'Чат продаж',
    messages: [
      {
        id: 0,
        content: 'afafaaf afafafafa242 fafaaafa 22422 afa a89 afaua 787 afhjah 897a8a jhafjfa 8787 afhahkja 8af87',
        created_at: new Date(999999),
        sender_id: 1,
        type: 'text'
      }
    ],
    users: [
      {
        id: 0,
        fullname: 'Виктор Викторов Викторович',
        department: 'Продажи',
        position: 'Начальник',
        access_level: 'moderator'
      },
      {
        id: 1,
        fullname: 'Иван Иванов Иванович',
        department: 'Продажи',
        position: 'Сотрудник',
        access_level: 'user'
      }
    ]
  },
  {
    id: 1,
    name: 'Чат маркетинга',
    messages: [
      {
        id: 0,
        content: 'Круто!',
        created_at: new Date(),
        sender_id: 3,
        type: 'text'
      }
    ],
    users: [
      {
        id: 3,
        fullname: 'Анна Анновна Анатольевна',
        department: 'Маркетинг',
        position: 'Начальник',
        access_level: 'moderator'
      },
      {
        id: 4,
        fullname: 'Юлия Юльевна Юрьевна',
        department: 'Маркетинг',
        position: 'Сотрудник',
        access_level: 'user'
      }
    ]
  }
]

const Chats: FC = () => {
  const currentUser = {
    id: 5,
    fullname: 'Денис Басенко Сергеевич',
    department: 'Разработка',
    position: 'Администратор',
    access_level: 'admin'
  }

  const handleMessageLimit = useCallback(
    (msg: string = '') => (msg.length >= 95 ? msg.substring(0, 92) + '...' : msg),
    []
  )

  const handleChatSelect = (chat: IChat) => () => {
    console.log(chat.id)
  }

  return (
    <div className="overflow-y-auto">
      {mockedChats.map(chat => {
        const { id, name, messages } = chat
        return (
          <Link
            to={`/chat/${id}`}
            className="flex flex-row h-24 py-4 border-b cursor-pointer hover:bg-gray-200 px-3"
            key={id}
            onClick={handleChatSelect(chat)}
          >
            <div className="min-w-[62px] h-[62px] rounded-full bg-gray-300" />
            <div className="flex flex-col w-fit grow ml-4">
              <div className="font-semibold">{name}</div>
              <div className="text-gray-400 text-sm overflow-hidden h-10">
                {currentUser.id === messages[0].sender_id && <span className="font-semibold text-black">Вы: </span>}
                {handleMessageLimit(messages[0].content)}
              </div>
            </div>
            <div className="flex flex-col ml-auto justify-between pl-4">
              <div className="text-gray-400 text-xs">18:42</div>
              {true && (
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex justify-center items-center">{5}</div>
              )}
            </div>
          </Link>
        )
      })}
      {mockedChats.length === 0 && <div className="text-center text-xl text-gray-400 mt-5">No chats</div>}
    </div>
  )
}

export default Chats
