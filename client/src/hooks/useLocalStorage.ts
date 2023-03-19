import { useState, useEffect } from 'react'

<<<<<<< Updated upstream
export const useLocalStorage = (key: string, initialValue: any) => {
=======
export const useLocalStorage = (key: any, initialValue: any) => {
>>>>>>> Stashed changes
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    const item = JSON.stringify(value)
    window.localStorage.setItem(key, item)
<<<<<<< Updated upstream
    // отключаем линтер, чтобы не получать предупреждений об отсутствии useEffectне зависит от зависимости key
    // eslint-disable-next-line
=======
>>>>>>> Stashed changes
  }, [value])

  return [value, setValue]
}
