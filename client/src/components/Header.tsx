<<<<<<< Updated upstream
import { Link, useLocation } from 'react-router-dom'
import { BsChat } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
// import { Avatar } from '@mui/material'
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillChatFill } from 'react-icons/bs'
>>>>>>> Stashed changes

const Header = () => {
  const { pathname } = useLocation()

  const isMainPage = pathname === '/'

  return (
    <div className="flex justify-center bg-[#F3F4F6] items-center p-3">
      <div className="flex justify-between max-w-[1200px] w-full">
        <div className="flex">
          <div className="flex items-center">
            <Link to={'/profile'}>
              <div className="rounded-[50%] w-12 h-12">
                {/* <img src={`${}`} alt="avatar" className="bg-cover	" /> */}
              </div>
            </Link>
            <Link to={'/profile'}>
              <div className="ml-5">{'User Name'}</div>
            </Link>
          </div>
        </div>
        <BsFillChatFill size={'40px'} />
      </div>
<<<<<<< Updated upstream
      <Link to={isMainPage ? '/chat' : '/'}>
        {isMainPage ? (
          <BsChat size={'40px'} className="fill-blue-600" />
        ) : (
          <AiOutlineHome className="fill-blue-600" size={'40px'} />
        )}
      </Link>
=======
>>>>>>> Stashed changes
    </div>
  )
}

export default Header
