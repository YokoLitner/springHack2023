import { Link, useLocation, useParams } from 'react-router-dom'
import { BsChat } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
// import { Avatar } from '@mui/material'

const Header = () => {
  const { pathname } = useLocation()

  const isMainPage = pathname === '/'

  return (
    <div className="flex justify-between bg-[#F3F4F6] items-center p-3">
      <div className="flex">
        <Link to={'/profile'} className="flex items-center">
          {/* <Avatar sx={{ bgcolor: 'black' }}>N</Avatar> */}
          <div className="min-w-[54px] h-[54px] rounded-full bg-gray-300" />
          <div className="ml-5">{'User Name'}</div>
        </Link>
      </div>
      <Link to={isMainPage ? '/chat' : '/'}>
        {isMainPage ? (
          <BsChat size={'40px'} className="fill-blue-600" />
        ) : (
          <AiOutlineHome className="fill-blue-600" size={'40px'} />
        )}
      </Link>
    </div>
  )
}

export default Header
