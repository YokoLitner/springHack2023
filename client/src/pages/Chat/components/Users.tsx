import { FC, useEffect, useState } from 'react'

// types
import { IUser } from 'types/EXPORT'

// utils
import fetchAllUsers from 'utils/fetchAllUsers'

const currentUser = {
  id: 5,
  email: 'denis.basenko@gmail.com',
  fullname: 'Денис Басенко Сергеевич',
  department: 'Разработка',
  position: 'Администратор',
  access_level: 'admin'
}

export interface IUsersProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Users: FC<IUsersProps> = props => {
  const { search = '', setSearch } = props
  const [users, setUsers] = useState([] as IUser[])

  useEffect(() => {
    fetchAllUsers().then(data => setUsers(data))
  }, [])

  const handleUserClick = (id: number) => () => {
    setSearch('')
    // set params to chat/id
  }

  const filterForUser = (user: IUser) => {
    const searchLowerCase = search.toLowerCase()
    return (
      (user.fullname?.toLowerCase().includes(searchLowerCase) ||
        user.department?.toLowerCase().includes(searchLowerCase)) &&
      user.id !== currentUser.id
    )
  }

  return (
    <div className="overflow-y-auto">
      {users.length !== 0 &&
        users
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
      {users.filter(user => filterForUser(user)).length === 0 && (
        <div className="text-center text-xl text-gray-400 mt-5">Пользователи не найдены</div>
      )}
    </div>
  )
}

export default Users
