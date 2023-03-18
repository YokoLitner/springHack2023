import { ArrowIcon, PaperClipIcon } from 'assets/icons/EXPORT'

const SendBlock = () => {
  return (
    <div className="flex flex-row w-full border-t pt-4">
      <PaperClipIcon width="30px" onClick={() => null} className="fill-blue-600 cursor-pointer mr-4" />
      <textarea
        rows={2}
        placeholder="Сообщение"
        className="w-full bg-gray-100 py-2 px-4 rounded-3xl resize-none focus:outline-blue-600"
      />
      <ArrowIcon width="40px" onClick={() => null} className="fill-blue-600 cursor-pointer ml-4" />
    </div>
  )
}

export default SendBlock
