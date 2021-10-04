import React from 'react'
 
const style:React.CSSProperties = {
  fontSize: '2.5rem',
}

const Logo: React.FC = () => {
  return (<p>
    <span style={{ ...style, color: 'red' }}>My</span>
    <span style={{ ...style, color: 'black' }}>News</span>
  </p>)
}
 
export default Logo