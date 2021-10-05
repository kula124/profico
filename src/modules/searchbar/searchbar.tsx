/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import BigButton from 'components/BigButton/bigButton'
import Logo from 'components/Logo/logo'
import styles from './styles.module.scss'

const SearchBar : React.FC = () => {
  return (
    <header className={styles.main}>
      <Logo />
      <div className={styles.searchBox}>
        <input
          maxLength={100}
          placeholder = 'Search news'
          type='text'
        />
        <BigButton onClick={() => {}}
          text='search' />
      </div>
    </header>
  )
}
 
export default SearchBar 