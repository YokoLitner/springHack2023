import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillChatFill } from 'react-icons/bs'
// import { Avatar } from '@mui/material'

const Header = () => {
  return (
    <div className="flex justify-between bg-[#F3F4F6] items-center p-3">
      <div className="flex">
        <div className="flex items-center">
          <Link to={'/profile'}>{/* <Avatar sx={{ bgcolor: 'black' }}>N</Avatar> */}</Link>
          <Link to={'/profile'}>
            <div className="ml-5">{'User Name'}</div>
          </Link>
        </div>
      </div>
      <BsFillChatFill size={'40px'} />
    </div>
  )
}

export default Header
