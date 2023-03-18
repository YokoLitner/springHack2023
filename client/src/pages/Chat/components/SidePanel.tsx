import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Chats from './Chats'
import Users from './Users'

import cls from 'classnames'

const SidePanel = () => {
  const [search, setSearch] = useState('')
  const params = useParams()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div
      className={cls('sm:flex flex-col h-screen w-full sm:w-1/4 bg-gray-100', {
        hidden: Object.entries(params).length !== 0
      })}
    >
      <div className="pb-5 border-b px-3">
        <input
          className="w-full mt-5 h-10 bg-gray-200 rounded-lg outline-none px-3 placeholder-shown:text-center"
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={handleSearch}
        />
      </div>
      {search ? <Users search={search} setSearch={setSearch} /> : <Chats />}
    </div>
  )
}

export default SidePanel
