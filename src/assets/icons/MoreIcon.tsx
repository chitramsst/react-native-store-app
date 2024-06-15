import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MoreIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}  width={25}
  height={24}>
  <Path
     fill={props.color}
    d="M12.5 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10Zm-4 11c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Z"
  />
</Svg>
)
export default MoreIcon