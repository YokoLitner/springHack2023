import { AxiosInstance } from './EXPORT'

const fetchAllUsers = async () => {
  const res = AxiosInstance.get('user')
  return (await res).data
}

export default fetchAllUsers
