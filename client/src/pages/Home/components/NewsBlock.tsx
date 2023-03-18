import { useState } from 'react'

type NewsProps = {
  title: string
  text: string
}

const NewsBlock = ({ title, text }: NewsProps) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[100%]">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
        {showMore ? text : `${text.substring(0, 500)}`}
      </h6>
      <button
        onClick={() => setShowMore(!showMore)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {showMore ? 'Скрыть' : 'Читать дальше...'}
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    // <div className="block text-center bg-[#E5E7EB] rounded-[5%] p-4 mb-4 mx-3 w-[]">
    //   <h6 className="text-lg font-bold text-[20px] dark:text-black">{title}</h6>
    //   <h6 className="flex flex-col text-lg text-[16px] leading-normal my-3 text-gray-900 dark:text-black">
    //     {showMore ? text : `${text.substring(0, 400)}`}
    //   </h6>
    //   <button
    //     className="bg-blue-600 transition-all text-white rounded-lg p-3 hover:bg-blue-700 "
    //     onClick={() => setShowMore(!showMore)}
    //   >
    //     {showMore ? 'Скрыть' : 'Читать дальше...'}
    //   </button>
    // </div>
  )
}
export default NewsBlock
