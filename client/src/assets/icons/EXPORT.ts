import { SVGProps } from 'react'

export interface IIconProps extends SVGProps<SVGSVGElement> {
  className?: string
  width: string
  height?: string
}

export { default as LoadingIcon } from './LoadingIcon'
