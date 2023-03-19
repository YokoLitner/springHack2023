import { IUser } from 'types/EXPORT'
import axios from 'axios'

const fetchCurrentUser = async () => {
  const { data } = await axios.get<IUser>('http://localhost:3000/authentication', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return await data
}

export default fetchCurrentUser
