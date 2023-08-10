import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 40, ...rest }) => {
  return (
    <Svg
      width={width}
      height={Math.floor(Number(width) * 0.44)}
      viewBox="0 0 472 208"
      fill="none"
      {...rest}
    >
      <Path
        d="M44.3885 185.699C46.4399 82.7923 130.839 0 234.653 0C338.467 0 422.866 82.7923 424.917 185.699H414.99C412.94 88.3102 333.022 9.92499 234.653 9.92499C136.284 9.92499 56.3657 88.3102 54.3157 185.699H44.3885Z"
        fill="#FF9D65"
      />
      <Path
        d="M65.5179 185.699C67.0106 94.5179 141.69 21.0601 233.596 21.0601C325.502 21.0601 400.181 94.5179 401.674 185.699H389.265C387.774 101.415 318.696 33.4664 233.596 33.4664C148.496 33.4664 79.4175 101.415 77.926 185.699H65.5179Z"
        fill="#FF9D65"
      />
      <Path
        d="M90.8956 185.699C92.3844 108.475 155.703 46.3302 233.596 46.3302C311.488 46.3302 374.807 108.475 376.296 185.699H90.8956Z"
        fill="#FF9D65"
      />
      <Rect y="173.688" width="471.437" height="33.4968" rx="16" fill="white" />
    </Svg>
  )
}

export default SvgComponent
