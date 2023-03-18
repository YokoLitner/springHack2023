import axios from 'axios'

const fetchUserById = async (id: number) => {
  const res = await axios.get(`http://localhost:3000/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return res.data
}

export default fetchUserById
