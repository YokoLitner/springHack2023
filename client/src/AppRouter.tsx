import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import { Loader } from 'components/EXPORT'

// pages
<<<<<<< Updated upstream
import { Chat, Error, Login, Profile, Registration, Home } from 'pages/EXPORT'
=======
import { Chat, Error, Home, Login, Profile, Registration } from 'pages/EXPORT'
>>>>>>> Stashed changes

// types
import { IRoute } from 'types/routes'

// hooks
import useAuth from 'hooks/useAuth'

export const privateRouter = [
  {
<<<<<<< Updated upstream
    path: '/',
    element: <Home />
  },
  {
=======
>>>>>>> Stashed changes
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

export const publicRouter: IRoute[] = [
  {
    path: '/',
    // element: <Registration />
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Error />
  }
]

const AppRouter = () => {
  const { isAuth } = useAuth()
  const loading = false

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {(isAuth ? privateRouter : publicRouter).map(({ path, element }) => (
=======
        {(!user ? privateRouter : publicRouter).map(({ path, element }) => (
>>>>>>> b792482f10ded5749e75d5ae6066238a413be8c8
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
