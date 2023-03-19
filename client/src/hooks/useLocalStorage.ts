import { useState, useEffect } from 'react'

<<<<<<< HEAD
export const useLocalStorage = (key: string, initialValue: any) => {
=======
<<<<<<< Updated upstream
export const useLocalStorage = (key: string, initialValue: any) => {
=======
export const useLocalStorage = (key: any, initialValue: any) => {
>>>>>>> Stashed changes
>>>>>>> 8e5451b0715f1372376d24dacff6581214cae209
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    const item = JSON.stringify(value)
    window.localStorage.setItem(key, item)
<<<<<<< HEAD
    // отключаем линтер, чтобы не получать предупреждений об отсутствии useEffectне зависит от зависимости key
    // eslint-disable-next-line
=======
<<<<<<< Updated upstream
    // отключаем линтер, чтобы не получать предупреждений об отсутствии useEffectне зависит от зависимости key
    // eslint-disable-next-line
=======
>>>>>>> Stashed changes
>>>>>>> 8e5451b0715f1372376d24dacff6581214cae209
  }, [value])

  return [value, setValue]
}
