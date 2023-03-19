import { AxiosInstance } from 'utils/EXPORT'

const fetchUserById = async (id: number) => {
  const res = await AxiosInstance.get(`user/${id}`)
  return res.data
}

export default fetchUserById
