import cls from 'classnames'
import { FC, memo } from 'react'
import { IIconProps } from './EXPORT'

const PaperClipIcon: FC<IIconProps> = props => {
  const { width, className, ...rest } = props
  return (
    <svg
      className={cls(className)}
      width={width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 507.963 507.963"
      xmlSpace="preserve"
      {...rest}
    >
      <g>
        <g>
          <path
            d="M464.782,25.247c-49.8-37.9-115.8-28.9-153.6,20.8l-175.5,230.5c-20.7,27.1-15.4,66,11.7,86.7
			c26.7,20.3,65.4,16.2,86.7-11.7l158.9-208.6c4.7-6.2,3.5-15-2.7-19.7c-6.2-4.7-15-3.5-19.7,2.7l-158.9,208.5
			c-13.7,18-35.2,15.5-47.2,6.4c-14.8-11.2-17.7-32.5-6.4-47.3l175.5-230.5c28.1-37,76-44.5,114.2-15.4
			c35.8,27.2,42.7,78.5,15.5,114.2l-203.1,266.7c-46.7,53.5-125.9,66.5-181.1,24.5c-56.8-43.1-67.8-124.5-24.6-181.2l133.3-175.1
			c4.7-6.2,3.5-15-2.7-19.7c-6.2-4.7-15-3.5-19.7,2.7l-133.3,175.1c-52.5,69-39.2,168.1,29.9,220.6c68.4,52,171.2,35.1,220.6-29.8
			l203.1-266.7C522.182,130.747,512.882,61.847,464.782,25.247z"
          />
        </g>
      </g>
    </svg>
  )
}

export default memo(PaperClipIcon)
