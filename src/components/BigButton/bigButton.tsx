import * as React from 'react'

import styles from './styles.module.scss'

interface BigButtonProps {
  text: string,
  color?: 'red' | 'blue' | 'green',
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
 
const BigButton: React.FC<BigButtonProps> = (props) => {
  return <button className={styles.main}
    onClick={props.onClick}
    style={{ backgroundColor: props.color }}>
    {props.text}
  </button>
}

BigButton.defaultProps= {
  color: 'red'
}
 
export default BigButton