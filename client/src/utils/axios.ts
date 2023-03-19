import axios, { AxiosInstance } from 'axios'

/**
 * Core axios instance
 * */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // TODO env
  timeout: 30000,
  // withCredentials: true, // TODO on
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}) as AxiosInstance & { sleep: (ms: number) => Promise<void> }

/**
 * Axios sleep function for testing
 * */
axiosInstance.sleep = (ms = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default axiosInstance
