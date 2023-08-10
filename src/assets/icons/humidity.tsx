import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 40, ...rest }) => {
  return (
    <Svg
      width={width}
      height={Math.floor(Number(width) * 1.16)}
      viewBox="0 0 313 363"
      fill="none"
      {...rest}
    >
      <Path
        d="M223 251.5C223 189.92 111.5 40 111.5 40C111.5 40 0 189.92 0 251.5C0 313.08 49.9202 363 111.5 363C173.08 363 223 313.08 223 251.5Z"
        fill="#85A7FF"
      />
      <Path
        d="M313 211.5C313 149.92 201.5 0 201.5 0C201.5 0 90 149.92 90 211.5C90 273.08 139.92 323 201.5 323C263.08 323 313 273.08 313 211.5Z"
        fill="#AFDEFF"
      />
    </Svg>
  )
}

export default SvgComponent
