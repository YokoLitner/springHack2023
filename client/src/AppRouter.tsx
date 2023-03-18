import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import { Loader } from 'components/EXPORT'

// pages
<<<<<<< Updated upstream
import { Chat, Error, Login, Profile, Registration } from 'pages/EXPORT'
=======
import { Error, Home, Login, Registration } from 'pages/EXPORT'
>>>>>>> Stashed changes

// types
import { IRoute } from 'types/routes'

export const privateRouter = [
  {
<<<<<<< Updated upstream
    path: '/chat',
    element: <Chat />
=======
    path: '/',
    element: <Home />
>>>>>>> Stashed changes
  },
  {
    path: '/chat/:id',
    element: <Chat />
  },
  {
    path: '/profile'
    // element: <Profile />,
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
    element: <Registration />
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
  const user = true
  const loading = false

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Routes>
        {(user ? privateRouter : publicRouter).map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
