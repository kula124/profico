/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'

import BigButton from 'components/BigButton/bigButton'
import Logo from 'components/Logo/logo'
import { ReactComponent as SearchIcon } from 'assets/icons/Search.svg'
import styles from './styles.module.scss'

export interface IUseQuery {
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SearchBar : React.FC<IUseQuery> = ({ setQuery }) => {
  const [input, setInput] = useState<string>('')

  return (
    <header className={styles.main}>
      <Logo />
      <form action='' 
        className={styles.searchBox}
        onSubmit={() => {
          setQuery(input)
          //e.preventDefault()
        }}
        role='search'
      >
        <SearchIcon />
        <input
          maxLength={100}
          onChange={e => setInput(e.target.value)}
          placeholder = 'Search news'
          type='search'
          value={input}
        />
        <BigButton
          onClick={() => setQuery(input)}
          text='search'
          type='submit'
        />
      </form>
    </header>
  )
}
 
export default SearchBar 