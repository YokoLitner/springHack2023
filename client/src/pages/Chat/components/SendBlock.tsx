//@ts-nocheck
import { ArrowIcon, PaperClipIcon } from 'assets/icons/EXPORT'
import { useState } from 'react'
import { getMessage } from './ChatScreen'

const SendBlock = () => {
  const [text, setText] = useState('')

  const handleChangeText = (e: any) => {
    setText(e.target.value)
  }

  const handleSendMessage = () => {
    const trimmed = text.trim()
    if (trimmed) {
      getMessage(text)
      setText('')
    }
  }

  return (
    <div className="flex flex-row w-full border-t pt-4">
      <PaperClipIcon width="30px" onClick={() => null} className="fill-blue-600 cursor-pointer mr-4" />
      <textarea
        value={text}
        onChange={handleChangeText}
        type="text"
        placeholder="Message..."
        className="w-full bg-gray-100 py-2 px-4 rounded-3xl resize-none focus:outline-blue-600"
      />
      <ArrowIcon width="40px" onClick={handleSendMessage} className="fill-blue-600 cursor-pointer ml-4" />
    </div>
  )
}

export default SendBlock
