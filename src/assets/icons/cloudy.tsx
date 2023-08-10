import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 40, ...rest }) => {
  return (
    <Svg
      width={width}
      height={Math.floor(Number(width) * 0.62)}
      viewBox="0 0 402 249"
      fill="none"
      {...rest}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M243.227 248.397H87.0919C38.9924 248.397 0 209.323 0 161.123C0 112.922 38.9924 73.8479 87.0919 73.8479C101.607 73.8479 115.292 77.4062 127.327 83.6997C144.085 34.9914 190.228 0 244.527 0C312.977 0 368.466 55.6057 368.466 124.199C368.466 125.605 368.442 127.005 368.396 128.399C388.377 139.157 401.963 160.298 401.963 184.62C401.963 219.843 373.468 248.397 338.319 248.397H244.527C244.332 248.397 243.227 248.397 243.227 248.397H244.527H243.227Z"
        fill="#AFDEFF"
      />
    </Svg>
  )
}

export default SvgComponent
