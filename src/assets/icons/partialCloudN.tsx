import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const SvgComponent: FC<SvgProps> = ({ width = 40, ...rest }) => {
  return (
    <Svg
      width={width}
      height={Math.floor(Number(width) * 0.89)}
      viewBox="0 0 322 288"
      fill="none"
      {...rest}
    >
      <Path
        d="M300.148 216.723C290.61 218.776 280.71 219.856 270.558 219.856C193.306 219.856 130.68 157.296 130.68 80.1246C130.68 50.315 140.025 22.6856 155.947 0C95.4375 14.7924 50.5374 69.3212 50.5374 134.326C50.5374 210.699 112.514 272.611 188.966 272.611C234.512 272.611 274.921 250.637 300.148 216.723Z"
        fill="#FFD465"
      />
      <Path
        d="M222.369 61.1948C222.139 60.8668 221.889 60.4912 221.569 60.0116C220.832 58.9061 219.728 57.2479 217.656 54.3461C217.718 54.408 203.436 36.0503 203.436 36.0503C201.679 33.7916 202.123 33.415 204.41 35.1945L222.628 49.3715C225.482 51.4112 227.145 52.5266 228.262 53.2761L228.263 53.2769C228.745 53.5999 229.125 53.855 229.455 54.0868C229.783 53.8568 230.159 53.6064 230.638 53.2866C231.743 52.5496 233.4 51.4442 236.3 49.3715C236.239 49.4334 254.586 35.1437 254.586 35.1437C256.844 33.3856 257.22 33.8305 255.442 36.1186L241.272 54.3461C239.234 57.2016 238.119 58.8653 237.37 59.9832C237.047 60.4653 236.791 60.8464 236.56 61.1774C236.789 61.5054 237.04 61.8809 237.359 62.3606C238.096 63.466 239.201 65.1242 241.272 68.0261C241.21 67.9642 255.492 86.3219 255.492 86.3219C257.25 88.5806 256.805 88.9572 254.518 87.1777L236.3 73.0007C233.447 70.9613 231.784 69.8459 230.667 69.0964C230.185 68.773 229.804 68.5174 229.473 68.2854C229.145 68.5153 228.77 68.7656 228.291 69.0853C227.186 69.8222 225.528 70.928 222.628 73.0007C222.69 72.9388 204.342 87.2285 204.342 87.2285C202.084 88.9866 201.708 88.5417 203.487 86.2536L217.656 68.0261C219.694 65.171 220.809 63.5074 221.558 62.3895L221.559 62.3876C221.882 61.9059 222.137 61.5255 222.369 61.1948Z"
        fill="#FFD465"
      />
      <Path
        d="M297.208 132.344C297.208 132.344 303.742 140.743 303.713 140.715C304.662 142.044 305.169 142.804 305.506 143.31C305.652 143.53 305.767 143.702 305.872 143.852C305.766 144.004 305.649 144.178 305.501 144.399C305.158 144.911 304.647 145.674 303.713 146.982L297.222 155.333C296.407 156.381 296.585 156.581 297.626 155.77C297.626 155.77 306.019 149.233 305.991 149.261C307.32 148.311 308.079 147.805 308.585 147.467C308.805 147.321 308.977 147.206 309.127 147.101C309.279 147.207 309.453 147.324 309.674 147.472C310.186 147.815 310.947 148.326 312.255 149.261L320.601 155.756C321.649 156.571 321.848 156.393 321.038 155.352C321.038 155.352 314.505 146.954 314.533 146.982C313.584 145.653 313.078 144.893 312.74 144.387C312.594 144.167 312.479 143.995 312.374 143.844C312.48 143.693 312.597 143.518 312.745 143.297C313.088 142.785 313.599 142.023 314.533 140.715L321.024 132.364C321.839 131.316 321.661 131.116 320.621 131.926C320.621 131.926 312.227 138.464 312.255 138.436C310.926 139.385 310.167 139.892 309.661 140.229C309.441 140.376 309.269 140.49 309.119 140.596C308.967 140.489 308.793 140.373 308.572 140.224C308.06 139.881 307.299 139.37 305.991 138.436L297.645 131.94C296.597 131.125 296.398 131.303 297.208 132.344Z"
        fill="#FFD465"
      />
      <Path
        d="M65.0395 127.511H163.917C177.751 127.511 188.966 116.644 188.966 103.239C188.966 93.9829 183.619 85.9369 175.755 81.8429C175.773 81.3122 175.782 80.7792 175.782 80.2442C175.782 54.1393 153.943 32.9771 127.003 32.9771C105.632 32.9771 87.4708 46.294 80.8753 64.8312C76.1386 62.4361 70.7522 61.0819 65.0395 61.0819C46.1085 61.0819 30.7619 75.9526 30.7619 94.2966C30.7619 112.641 46.1085 127.511 65.0395 127.511Z"
        fill="#AFDEFF"
      />
      <Path
        d="M34.2776 288H133.155C146.989 288 158.204 277.133 158.204 263.728C158.204 254.472 152.857 246.426 144.993 242.332C145.011 241.801 145.02 241.268 145.02 240.733C145.02 214.628 123.181 193.466 96.2408 193.466C74.8699 193.466 56.7089 206.783 50.1134 225.32C45.3767 222.925 39.9903 221.571 34.2776 221.571C15.3466 221.571 0 236.441 0 254.785C0 273.129 15.3466 288 34.2776 288Z"
        fill="#AFDEFF"
      />
    </Svg>
  )
}

export default SvgComponent