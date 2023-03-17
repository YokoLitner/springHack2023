import { FC } from 'react'

// types
import { IUser } from 'types/EXPORT'

const mockedUsers: IUser[] = [
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
  },
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

const currentUser = {
  id: 5,
  fullname: 'Денис Басенко Сергеевич',
  department: 'Разработка',
  position: 'Администратор',
  access_level: 'admin'
}

export interface IUserssProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Users: FC<IUserssProps> = props => {
  const { search = '', setSearch } = props

  const handleUserClick = (id: number) => () => {
    setSearch('')
    // set params to chat/id
  }

  const filterForUser = (user: IUser) => {
    const searchLowerCase = search.toLowerCase()
    return (
      user.fullname.toLowerCase().includes(searchLowerCase) ||
      user.department.toLowerCase().includes(searchLowerCase) ||
      user.id !== currentUser.id
    )
  }

  return (
    <div className="overflow-y-auto">
      {mockedUsers
        .filter(user => filterForUser(user))
        .map(({ fullname, id, department }) => (
          <div
            onClick={handleUserClick(id)}
            className="flex flex-row h-24 py-4 border-b cursor-pointer hover:bg-gray-200 px-3"
            key={id}
          >
            <div className="min-w-[62px] h-[62px] rounded-full bg-gray-300" />
            <div className="flex flex-col w-fit grow ml-4 justify-center">
              <div className="font-medium text-lg">{fullname}</div>
              <div>{department}</div>
            </div>
            <div className="flex flex-col ml-auto justify-between"></div>
          </div>
        ))}
      {mockedUsers.length === 0 && <div className="text-center text-xl text-gray-400 mt-5">No users found</div>}
    </div>
  )
}

export default Users
