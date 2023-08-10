import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 24, height = 24, ...rest }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}
    >
      <Path
        d="M17.376 14.424C17.376 11.4682 12.024 4.272 12.024 4.272C12.024 4.272 6.672 11.4682 6.672 14.424C6.672 17.3798 9.06817 19.776 12.024 19.776C14.9798 19.776 17.376 17.3798 17.376 14.424Z"
        fill="#85A7FF"
      />
    </Svg>
  )
}

export default SvgComponent
