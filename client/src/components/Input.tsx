import React, { useMemo } from 'react'
import { IMaskInput } from 'react-imask'

import cls from 'classnames'

export interface InputProps {
  value: string
  className?: string
  containerClassName?: string
  label?: string
  onChange: (...event: any[]) => void
  error?: boolean
  errorMessage?: string
  isPassword?: boolean
  isNumber?: boolean
  placeholder?: string
  name?: string
}

const Input: React.FC<InputProps> = props => {
  const {
    value,
    className = '',
    containerClassName,
    label,
    onChange,
    error,
    errorMessage,
    isPassword,
    isNumber,
    placeholder,
    name,
    ...rest
  } = props

  const inputStyle = useMemo(
    () =>
      `border-b focus:border-blue-600 focus:outline-none px-1
      ${error && 'text-red-500 border-red-500  focus:border-red-200'} 
      ${className} `,
    [error, className]
  )
  return (
    <label className={cls('flex flex-col', containerClassName)}>
      {label && <div className="text-gray-400 text-sm">{label}</div>}
      {isNumber ? (
        <IMaskInput
          // @ts-ignore
          className={cls(inputStyle)}
          mask={'+7 (000) 000-00-00'}
          value={value}
          placeholder={placeholder}
          onAccept={number => onChange(number)}
          name={name}
          {...rest}
        />
      ) : (
        <input
          value={value}
          onChange={event => onChange(event.target.value)}
          type={isPassword ? 'password' : 'text'}
          className={cls(inputStyle)}
          placeholder={placeholder}
          name={name}
          {...rest}
        />
      )}
      {error && <div className="text-sm text-red-500 mt-1">{errorMessage}</div>}
    </label>
  )
}

export default Input
