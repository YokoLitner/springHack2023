import axios from 'axios'

const fetchAllUsers = async () => {
  const res = axios.get('http://localhost:3000/user', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return (await res).data
}

export default fetchAllUsers
