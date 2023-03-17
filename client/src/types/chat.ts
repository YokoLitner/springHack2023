import { IMessage } from './message'

export type AcessLevels = 'admin' | 'moderator' | 'user'

export interface IChat {
  id: number
  name: string
  messages: IMessage[]
  users: IUser[]
}

export interface IUser {
  id: number
  fullname: string
  department: string
  position: string
  access_level: AcessLevels
  password?: string
}
