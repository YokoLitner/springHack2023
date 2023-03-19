//@ts-nocheck

import { useEffect, useRef, useState } from 'react'
// получаем класс IO
import io from 'socket.io-client'
import { nanoid } from 'nanoid'
// наши хуки
import { useLocalStorage } from './useLocalStorage'
import { useBeforeUnload } from './useBeforeUnload'

const SERVER_URL = 'http://localhost:5000'

export const useChat = (roomId: any) => {
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [userId] = useLocalStorage('userId', nanoid(8))
  const [username] = useLocalStorage('username')
  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: { roomId }
    })
    socketRef.current.emit('user:add', { username, userId })

    socketRef.current.on('users', users => {
      setUsers(users)
    })

    socketRef.current.emit('message:get') = socketRef.current.on('messages', messages => {
      const newMessages = messages.map(msg => (msg.userId === userId ? { ...msg, currentUser: true } : msg))
      setMessages(newMessages)
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [roomId, userId, username])

  const sendMessage = ({ messageText, senderName }) => {
    socketRef.current.emit('message:add', {
      userId,
      messageText,
      senderName
    })
  }

  const removeMessage = id => {
    socketRef.current.emit('message:remove', id)
  }

  useBeforeUnload(() => {
    socketRef.current.emit('user:leave', userId)
  })

  return { users, messages, sendMessage, removeMessage }
}
