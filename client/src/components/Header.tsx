import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between bg-[#F3F4F6] items-center p-3">
      <div className="flex">
        <div className="flex items-center">
          <Link to={'/dcdc'}>
            <div className="w-16 h-16 bg-black"></div>
          </Link>
          <Link to={'/dcdc'}>
            <div className="ml-5">{'User Name'}</div>
          </Link>
        </div>
      </div>
      <div className="w-10 h-10 bg-black">{/* <BsFillChatDotsFill size="20px" /> */}</div>
    </div>
  )
}

export default Header
