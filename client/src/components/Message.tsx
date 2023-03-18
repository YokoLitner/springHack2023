import { FC, memo, useMemo } from 'react'

import cls from 'classnames'

// types
import { IMessage } from 'types/EXPORT'

// utils
import getFormatedTime from 'utils/getFormatedTime'

export interface IMessageProps {
  message: IMessage
}

const currentUser = {
  id: 5,
  fullname: 'Денис Басенко Сергеевич',
  department: 'Разработка',
  position: 'Администратор',
  access_level: 'admin'
}

const Message: FC<IMessageProps> = props => {
  const { content, created_at, sender_id } = props.message

  const isCurrent = useMemo(() => sender_id === currentUser.id, [currentUser, sender_id])

  return (
    <div
      className={cls(
        'flex flex-row w-fit p-2.5 rounded-xl mb-1',
        isCurrent ? 'ml-auto bg-blue-100 rounded-br-sm' : 'bg-gray-100 rounded-tl-sm'
      )}
    >
      <div>{content}</div>
      <div className={cls('text-xs self-end ml-1', isCurrent ? 'text-blue-500' : 'text-gray-400')}>
        {getFormatedTime(created_at)}
      </div>
    </div>
  )
}

export default memo(Message)
