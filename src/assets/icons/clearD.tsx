import React, { FC } from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 40, ...rest }) => {
  return (
    <Svg
      width={width}
      height={width}
      viewBox="0 0 432 432"
      fill="none"
      {...rest}
    >
      <Path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M216 426C331.98 426 426 331.98 426 216C426 100.02 331.98 6 216 6C100.02 6 6 100.02 6 216C6 331.98 100.02 426 216 426ZM216 432C335.294 432 432 335.294 432 216C432 96.7065 335.294 0 216 0C96.7065 0 0 96.7065 0 216C0 335.294 96.7065 432 216 432Z"
        fill="#FFD465"
      />
      <Path
        opacity="0.6"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M214.8 397.6C315.758 397.6 397.6 315.758 397.6 214.8C397.6 113.842 315.758 32 214.8 32C113.842 32 32 113.842 32 214.8C32 315.758 113.842 397.6 214.8 397.6ZM214.8 405.6C320.176 405.6 405.6 320.176 405.6 214.8C405.6 109.424 320.176 24 214.8 24C109.424 24 24 109.424 24 214.8C24 320.176 109.424 405.6 214.8 405.6Z"
        fill="#FFD465"
      />
      <Circle cx="214.8" cy="214.8" r="162" fill="#FFD465" />
    </Svg>
  )
}

export default SvgComponent
