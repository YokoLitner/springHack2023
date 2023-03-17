import cls from 'classnames'
import { FC, memo } from 'react'
import { IIconProps } from './EXPORT'

const KebabMenuIcon: FC<IIconProps> = props => {
  const { width, className, ...rest } = props
  return (
    <svg className={cls(className)} width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </svg>
  )
}

export default memo(KebabMenuIcon)
