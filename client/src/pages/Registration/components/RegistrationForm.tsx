import { Controller, useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import schema from './RegistrationSchema'

import cls from 'classnames'

// components
import { Input } from 'components/EXPORT'

// hooks
import useAuth from 'hooks/useAuth'

export interface IRegistrationForm {
  email: string
  fullname: string
  password: string
}

const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      fullname: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { register } = useAuth()

  const onSubmit: SubmitHandler<IRegistrationForm> = data => register(data)

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              name="email"
              value={value}
              onChange={onChange}
              error={!!error}
              errorMessage={error?.message}
              containerClassName="mb-3 w-full"
              label="Почта"
              placeholder="email"
            />
          )}
        />
        <div className={cls('flex items-center w-fit mt-4', errors.email ? 'mb-7' : 'mb-2')}>@gmail.com</div>
      </div>
      <Controller
        name="fullname"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            name="fullname"
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={error?.message}
            containerClassName="mb-3"
            label="Полное имя"
            placeholder="ФИО"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!error}
            errorMessage={error?.message}
            containerClassName="mb-3"
            isPassword
            label="Пароль"
          />
        )}
      />
      <button className="mb-4 h-12 mt-16 bg-blue-600 text-white rounded-lg font-medium">Зарегистрироваться</button>
      <Link to="/login" className="w-fit mx-auto">
        <button className=" text-blue-600">Войти</button>
      </Link>
    </form>
  )
}

export default RegistrationForm
