import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeIcon = (props : any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="m20.64 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L4.38 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78ZM13.35 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
    />
  </Svg>
)
export default HomeIcon
