import * as React from 'react'

import styles from './styles.module.scss'

interface BigButtonProps {
  text: string,
  sizes?: {
    w: string,
    h: string
  }
  color?: string,
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'], 
  textColor?:string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
 
const BigButton: React.FC<BigButtonProps> = (props) => {
  return <button className={styles.main}
    onClick={props.onClick}
    style={{ backgroundColor: props.color,
      color: props.textColor,
      height: props.sizes?.h,
      width: props.sizes?.w
    }}
    type={props.type}>
    {props.text}
  </button>
}

BigButton.defaultProps= {
  color: '#BB1E1E',
  textColor: 'white'
}
 
export default BigButton