import React from 'react'

import styles from './searchbox.module.scss'
 
const Searchbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className={styles.main}
    {...props} />
}
 
export default Searchbox