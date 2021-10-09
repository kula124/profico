import React from 'react'

import { ReactComponent as SearchIcon } from 'assets/icons/Search.svg'
import styles from './searchbox.module.scss'
 
const Searchbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <div className={styles.main}>
    <SearchIcon />
    <input className={styles.input}
      {...props} />
  </div> 
}
 
export default Searchbox