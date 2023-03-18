export const REQUIRED_MSG = 'Это поле обязательно'
export const MIN_LENGTH = (minLength: number): [number, string] => {
  return [minLength, `Минимальная длина ${minLength}`]
}
export const MAX_LENGTH = (maxLength: number): [number, string] => {
  return [maxLength, `Максимальная длина ${maxLength}`]
}
