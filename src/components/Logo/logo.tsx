import React from 'react'
 
const style:React.CSSProperties = {
  fontFamily: 'Inter',
  fontSize: '2rem',
  fontWeight: 900,
  height: '39px',
  letterSpacing: 0,
  lineHeight: '39px',
  width: '139px',
}

const Logo: React.FC = () => {
  return (<p style={{ display: 'inline-block' }}>
    <span style={{ ...style, color: '#BB1E1E' }}>My</span>
    <span style={{ ...style, color: '#1D1D1B' }}>News</span>
  </p>)
}
 
export default Logo