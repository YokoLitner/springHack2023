import { useState } from 'react'

type NewsProps = {
  title: string
  text: string
}

const NewsBlock = ({ title, text }: NewsProps) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="block text-center bg-[#E5E7EB] rounded-[5%] p-4 mb-4 mx-3">
      <h6 className="text-lg font-bold text-[20px] dark:text-black">{title}</h6>
      <h6 className="flex flex-col text-lg text-[16px] leading-normal my-3 text-gray-900 dark:text-black">
        {showMore ? text : `${text.substring(0, 400)}`}
      </h6>
      <button
        className="bg-blue-600 transition-all text-white rounded-lg p-3 hover:bg-blue-700 "
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Скрыть' : 'Читать дальше...'}
      </button>
    </div>
  )
}
export default NewsBlock
