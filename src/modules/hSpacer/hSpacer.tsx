import { useMobile } from 'hooks/useMobile'
import  React from 'react'

const style: React.CSSProperties = {
  border: '1px solid #979797',
  boxSizing: 'border-box',
  height: '1px',
  opacity: 0.1,
  width: '100%',
}
 
const HorizontalSpacer: React.FunctionComponent = () => {
  const isMobile = useMobile()

  if (isMobile) {
    return null
  }

  return <hr style={style} />
}
 
export default HorizontalSpacer