import { Controller, useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'

// components
import { Input } from 'components/EXPORT'

// utils
import changePassword from 'utils/changePassword'

export interface IPasswordForm {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}

const ChangingPassword = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IPasswordForm> = data => changePassword(data)

  return (
    <div className="mt-8">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="currentPassword"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              error={!!error}
              errorMessage={error?.message}
              containerClassName="mb-3"
              isPassword
              placeholder="Текущий пароль"
            />
          )}
        />
        <Controller
          name="newPassword"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              error={!!error}
              errorMessage={error?.message}
              containerClassName="mb-3"
              isPassword
              placeholder="Новый пароль"
            />
          )}
        />
        <Controller
          name="confirmNewPassword"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              value={value}
              onChange={onChange}
              error={!!error}
              errorMessage={error?.message}
              containerClassName="mb-3"
              isPassword
              placeholder="Подтвердите новый пароль"
            />
          )}
        />
        <button className="h-12 mt-3 bg-blue-600 text-white rounded-lg font-medium max-w-[200px]">
          Сменить пароль
        </button>
      </form>
    </div>
  )
}

export default ChangingPassword
