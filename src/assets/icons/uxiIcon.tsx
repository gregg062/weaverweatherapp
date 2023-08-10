import React, { FC } from 'react'
import Svg, { SvgProps, Path, Circle } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 36, ...rest }) => {
  return (
    <Svg width={width} height={width} viewBox="0 0 36 36" fill="none" {...rest}>
      <Path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 34.8C27.2784 34.8 34.8 27.2784 34.8 18C34.8 8.72159 27.2784 1.19997 18 1.19997C8.72159 1.19997 1.19997 8.72159 1.19997 18C1.19997 27.2784 8.72159 34.8 18 34.8ZM18 35.28C27.5434 35.28 35.28 27.5434 35.28 18C35.28 8.45649 27.5434 0.719971 18 0.719971C8.45649 0.719971 0.719971 8.45649 0.719971 18C0.719971 27.5434 8.45649 35.28 18 35.28Z"
        fill="#FFD465"
      />
      <Path
        opacity="0.6"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.904 32.528C25.9806 32.528 32.528 25.9806 32.528 17.904C32.528 9.8274 25.9806 3.28001 17.904 3.28001C9.82734 3.28001 3.27995 9.8274 3.27995 17.904C3.27995 25.9806 9.82734 32.528 17.904 32.528ZM17.904 33.168C26.334 33.168 33.168 26.3341 33.168 17.904C33.168 9.47394 26.334 2.64001 17.904 2.64001C9.47388 2.64001 2.63995 9.47394 2.63995 17.904C2.63995 26.3341 9.47388 33.168 17.904 33.168Z"
        fill="#FFD465"
      />
      <Circle cx="17.904" cy="17.904" r="12.96" fill="#FFD465" />
    </Svg>
  )
}

export default SvgComponent
