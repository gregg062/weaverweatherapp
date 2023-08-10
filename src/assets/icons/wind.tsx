import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 40, ...rest }) => {
  return (
    <Svg
      width={width}
      height={Math.floor(Number(width) * 0.95)}
      viewBox="0 0 350 333"
      fill="none"
      {...rest}
    >
      <Path
        d="M265.954 168.565C312.371 168.565 350 130.83 350 84.2823C350 37.7345 312.371 0 265.954 0C219.537 0 181.908 37.7345 181.908 84.2823C181.908 90.25 186.732 95.0877 192.683 95.0877C198.634 95.0877 203.458 90.25 203.458 84.2823C203.458 49.6698 231.438 21.6108 265.954 21.6108C300.469 21.6108 328.45 49.6698 328.45 84.2823C328.45 118.895 300.469 146.954 265.954 146.954C264.918 146.954 263.916 147.1 262.968 147.374C262.909 147.372 262.85 147.371 262.79 147.37C262.738 147.369 262.685 147.368 262.632 147.368H10C4.47715 147.368 0 151.846 0 157.368V158.246C0 163.768 4.47714 168.246 9.99999 168.246H262.632C262.845 168.246 263.056 168.239 263.266 168.226C264.125 168.447 265.026 168.565 265.954 168.565Z"
        fill="#AFDEFF"
      />
      <Path
        d="M37.0175 85.9649C31.4947 85.9649 27.0175 90.4421 27.0175 95.9649V98.0702C27.0175 103.593 31.4947 108.07 37.0175 108.07H120.175C125.698 108.07 130.175 103.593 130.175 98.0702V95.9649C130.175 90.4421 125.698 85.9649 120.175 85.9649H37.0175Z"
        fill="#AFDEFF"
      />
      <Path
        d="M61.4035 201.228C61.4035 206.751 65.8807 211.228 71.4035 211.228H178.479C179.556 211.59 180.709 211.787 181.908 211.787C209.282 211.787 231.474 234.04 231.474 261.492C231.474 288.943 209.282 311.197 181.908 311.197C175.957 311.197 171.133 316.034 171.133 322.002C171.133 327.97 175.957 332.807 181.908 332.807C221.184 332.807 253.024 300.878 253.024 261.492C253.024 222.105 221.184 190.176 181.908 190.176C181.245 190.176 180.596 190.236 179.966 190.351H71.4035C65.8807 190.351 61.4035 194.828 61.4035 200.351V201.228Z"
        fill="#AFDEFF"
      />
    </Svg>
  )
}

export default SvgComponent
