import { useEffect, useState } from 'react'
import { ILoginForm } from 'pages/Login/components/LoginForm'
import { AxiosInstance } from 'utils/EXPORT'

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    checkIsAuth()
  }, [])

  const checkIsAuth = async () => {
    await AxiosInstance.get('authentication')
      .catch(() => {
        setIsAuth(false)
      })
      .then(response => {
        response ? setIsAuth(true) : setIsAuth(false)
      })
  }

  const login = (data: ILoginForm) => {
    const res = AxiosInstance.post('authentication/log-in', {
      ...data,
      email: data.email + '@gmail.com'
    }).catch(error => {
      return error
    })
    return res
  }

  const logout = (id: number) => {
    AxiosInstance.get('authentication/log-out')
  }

  return { isAuth, login, logout }
}

export default useAuth
