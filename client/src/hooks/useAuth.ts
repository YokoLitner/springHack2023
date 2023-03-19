import { useEffect, useState } from 'react'
import axios from 'axios'
import { ILoginForm } from 'pages/Login/components/LoginForm'

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    checkIsAuth()
  }, [])

  const checkIsAuth = async () => {
    await axios
      .get('http://localhost:3000/authentication', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      .catch(() => {
        setIsAuth(false)
      })
      .then(data => {
        data ? setIsAuth(true) : setIsAuth(false)
      })
  }

  const login = (data: ILoginForm) => {
    const res = axios
      .post(
        'http://localhost:3000/authentication/log-in',
        {
          ...data,
          email: data.email + '@gmail.com'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      )
      .catch(error => {
        return error
      })
    return res
  }

  const logout = (id: number) => {
    axios.get('http://localhost:3000/authentication/log-out', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: {
        id
      }
    })
  }

  return { isAuth, login, logout }
}

export default useAuth
