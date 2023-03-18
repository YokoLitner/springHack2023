import axios from 'axios'
import { ILoginForm } from 'pages/Login/components/LoginForm'
import { IRegistrationForm } from 'pages/Registration/components/RegistrationForm'

const useAuth = () => {
  const isAuth = () => {
    // axios.get('http://localhost:3000/authentication', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   }
    // })
    return false
  }

  const register = (data: IRegistrationForm) => {
    axios.post(
      'http://localhost:3000/authentication/register',
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
  }

  const login = (data: ILoginForm) => {
    axios.post(
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

  return { isAuth: isAuth(), register, login, logout }
}

export default useAuth
