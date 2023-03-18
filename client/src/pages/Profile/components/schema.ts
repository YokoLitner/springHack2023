import * as yup from 'yup'

const PASS_MSG =
  'Должен содержать минимум 8 символов, обязательной заглавной буквой, обязательной  цифрой или спецсимволом'
const REQUIRED_MSG = 'Это поле обязательно'
const MIN_LENGTH = (minLength: number) => {
  return [minLength, `Минимальная длина ${minLength}`]
}

const MAX_LENGTH = (maxLength: number) => {
  return [maxLength, `Максимальная длина ${maxLength}`]
}

const passwordSchema = yup
  .object({
    currentPassword: yup
      .string()
      .required(REQUIRED_MSG)
      .matches(/(?=.*[0-9!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g, PASS_MSG)
      .max(...MAX_LENGTH(20)),
    newPassword: yup
      .string()
      .required(REQUIRED_MSG)
      .matches(/(?=.*[0-9!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g, PASS_MSG)
      .max(...MAX_LENGTH(20)),
    confirmNewPassword: yup
      .string()
      .required(REQUIRED_MSG)
      .oneOf([yup.ref('newPassword'), null], 'Пароли не совпадают')
  })
  .required()

export default passwordSchema
