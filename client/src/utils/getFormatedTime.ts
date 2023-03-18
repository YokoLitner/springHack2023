import { format } from 'date-fns'

const getFormatedTime = (time: Date | number) => format(time, 'HH:mm')

export default getFormatedTime
