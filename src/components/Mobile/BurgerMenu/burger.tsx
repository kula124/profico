import React from 'react'
 
import styles from './burger.module.scss'

const BurgerMenu: React.FC<{onClickCallback: () => void}> = ({ onClickCallback }) => {
  return (
    <section className={styles.burger}
      onClick={onClickCallback}>
      <div></div>
      <div></div>
      <div></div>
    </section>
  )
}
 
export default BurgerMenu