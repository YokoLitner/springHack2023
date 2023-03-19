import { IUser } from 'types/EXPORT'
import { AxiosInstance } from 'utils/EXPORT'

const fetchCurrentUser = async () => {
  const { data } = await AxiosInstance.get<IUser>('authentication')
  return await data
}

export default fetchCurrentUser
