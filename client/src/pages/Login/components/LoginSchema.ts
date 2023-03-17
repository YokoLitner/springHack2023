import * as yup from 'yup'

const REQUIRED_MSG = 'Это поле обязательно'
const MAX_LENGTH = (maxLength: number) => {
  return [maxLength, `Максимальная длина ${maxLength}`]
}
const EMAIL_ERROR_MSG = 'Почта не должна содержать @'
const PASS_ERROR_MSG =
  'Должен содержать минимум 8 символов, обязательной заглавной буквой, обязательной  цифрой или спецсимволом'
//   (?=.*[0-9!@#$%^&*]) - строка содержит хотя бы один спецсимвол или число
//   (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре
//   (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре
//   [0-9a-zA-Z!@#$%^&*]{8,} - строка состоит не менее, чем из 8 вышеупомянутых символов
const PASS_REGEX = /(?=.*[0-9!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g

const schema = yup
  .object({
    email: yup
      .string()
      .required(REQUIRED_MSG)
      .matches(/^[^@]+$/g, EMAIL_ERROR_MSG),
    password: yup
      .string()
      .required(REQUIRED_MSG)
      .matches(PASS_REGEX, PASS_ERROR_MSG)
      //TODO fix ts
      //@ts-ignore
      .max(...MAX_LENGTH(20))
  })
  .required()

export default schema
