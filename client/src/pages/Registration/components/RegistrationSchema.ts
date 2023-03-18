//@ts-nocheck
//TODO fix ts
import * as yup from 'yup'

const REQUIRED_MSG = 'Это поле обязательно'
const MIN_LENGTH = (minLength: number) => {
  return [minLength, `Минимальная длина ${minLength}`]
}
const MAX_LENGTH = (maxLength: number) => {
  return [maxLength, `Максимальная длина ${maxLength}`]
}
const EMAIL_MSG = 'Почта не должна содержать @'
const PASS_MSG =
  'Должен содержать минимум 8 символов, обязательной заглавной буквой, обязательной  цифрой или спецсимволом'

const schema = yup
  .object({
    email: yup
      .string()
      .required(REQUIRED_MSG)
      .matches(/^[^@]+$/g, EMAIL_MSG),
    fullname: yup
      .string()
      .required(REQUIRED_MSG)
      .min(...MIN_LENGTH(6))
      .max(...MAX_LENGTH(60)),
    password: yup
      .string()
      .required(REQUIRED_MSG)
      .matches(/(?=.*[0-9!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g, PASS_MSG)
      .max(...MAX_LENGTH(20))
  })
  .required()

export default schema
