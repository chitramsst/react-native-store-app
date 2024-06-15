import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DashboardIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}   width={25}
  height={24}>
<Path
 fill={props.color}
d="M22.5 22h-20c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z"
/>
<Path
fill={props.color}
d="M10.25 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2ZM3.5 10v12h4V10c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2ZM17.5 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z"
/>
</Svg>
)
export default DashboardIcon




