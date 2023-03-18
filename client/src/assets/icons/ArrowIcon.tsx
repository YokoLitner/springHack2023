import { FC, memo } from 'react'
import { IIconProps } from './EXPORT'

import cls from 'classnames'

const ArrowIcon: FC<IIconProps> = props => {
  const { width, className, ...rest } = props

  return (
    <svg
      className={cls(className)}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 459 459"
      xmlSpace="preserve"
      {...rest}
    >
      <g>
        <g>
          <path
            d="M229.5,0C102.8,0,0,102.8,0,229.5S102.8,459,229.5,459C356.3,459,459,356.2,459,229.5S356.3,0,229.5,0z
               M351.7,246.1c-0.1,0.1-0.1,0.1-0.2,0.2c-0.7,0.7,4.2-4.1-85.1,85.1c-9.8,9.8-25.6,9.8-35.4,0c-9.8-9.8-9.8-25.6,0-35.4l41.5-41.5
              H126c-13.8,0-25-11.2-25-25s11.2-25,25-25h146.7L231.1,163c-9.8-9.8-9.8-25.6,0-35.4c9.8-9.8,25.6-9.8,35.4,0
              c89.8,89.8,84.7,84.6,85.9,86C360.1,223.1,359.9,236.9,351.7,246.1z"
          />
        </g>
      </g>
    </svg>
  )
}

export default memo(ArrowIcon)
