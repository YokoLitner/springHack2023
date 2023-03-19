import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import { Loader } from 'components/EXPORT'

// pages
import { Chat, Error, Login, Profile, Home } from 'pages/EXPORT'

// types
import { IRoute } from 'types/routes'

// hooks
import useAuth from 'hooks/useAuth'
import { useState } from 'react'

export const privateRouter = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/chat/:id',
    element: <Chat />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/profile/:id',
    element: <Profile />
  },
  {
    path: '*',
    element: <Error />
  }
]
// const [isAuth, setIsAuth] = useState(false)

export const publicRouter: IRoute[] = [
  // {
  //   path: '/',
  //   element: <Registration />
  // },
  {
    path: '/',
    element: <Login />
  },
  {
    path: '*',
    element: <Error />
  }
]

const AppRouter = () => {
  const isAuth = true
  // const { isAuth } = useAuth()
  const loading = false

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Routes>
        {(isAuth ? privateRouter : publicRouter).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
