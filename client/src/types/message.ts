export type MsgType = 'text' | 'image' | 'file'

export interface IMessage {
  id: number
  content: string
  created_at: Date | number
  sender_id: number
  type: MsgType
}
