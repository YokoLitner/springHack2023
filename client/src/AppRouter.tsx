import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import { Loader } from 'components/EXPORT'

// pages
import { Error } from 'pages/EXPORT'

//TODO add IRoute

export const privateRouter = [
  {
    path: '/'
    // element: <Chat />,
  },
  {
    path: '/chat/:id'
    // element: <ChatPage />,
  },
  {
    path: '/profile'
    // element: <Profile />,
  },
  {
    path: '/profile/:id'
    // element: <ProfilePage />
  },
  {
    path: '*',
    element: <Error />
  }
]

export const publicRouter = [
  {
    path: '/'
    // element: <Register />,
  },
  {
    path: '/login'
    // element: <Login />,
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
