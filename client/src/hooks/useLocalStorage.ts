import { useState, useEffect } from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    const item = JSON.stringify(value)
    window.localStorage.setItem(key, item)
    // отключаем линтер, чтобы не получать предупреждений об отсутствии useEffectне зависит от зависимости key
    // eslint-disable-next-line
  }, [value])

  return [value, setValue]
}
