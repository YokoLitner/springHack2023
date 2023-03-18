import { Controller, useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import schema from './LoginSchema'

import cls from 'classnames'

// components
import { Input } from 'components/EXPORT'

// hooks
import useAuth from 'hooks/useAuth'

export interface ILoginForm {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { login } = useAuth()

  const onSubmit: SubmitHandler<ILoginForm> = data => login(data)

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
        name="password"
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            value={value}
            onChange={onChange}
            error={!!errors.password}
            errorMessage={error?.message}
            containerClassName="mb-3"
            isPassword
            label="Пароль"
          />
        )}
      />
      <button className="mb-4 h-12 mt-16 bg-blue-600 text-white rounded-lg font-medium">Войти</button>
      <Link to="/" className="w-fit mx-auto">
        <button className="text-blue-600">Зарегистрироваться</button>
      </Link>
    </form>
  )
}

export default LoginForm
