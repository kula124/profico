/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'

import BigButton from 'components/BigButton/bigButton'
import Logo from 'components/Logo/logo'
import { ReactComponent as SearchIcon } from 'assets/icons/Search.svg'
import styles from './styles.module.scss'
import { defaultSearchValue } from 'constants/consts'
import { useMobile } from 'hooks/useMobile'
import BurgerMenu from 'components/Mobile/BurgerMenu/burger'
import Searchbox from 'components/Searchbox/searchbox'

export interface IUseQuery {
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
}

const SearchBar : React.FC<IUseQuery> = ({ setQuery }) => {
  const [input, setInput] = useState<string>(defaultSearchValue)
  const isMobile = useMobile()

  return (
    <header className={styles.main}>
      <Logo />
      <form 
        className={styles.searchBox}
        onSubmit={e => {
          if (input === '') {
            setInput(defaultSearchValue)
            setQuery(defaultSearchValue)
            alert("Input on homepage can't be empty, try searching for something :)")
            
            return
          }

          setQuery(input)
          e.preventDefault()
        }}
        role='search'
      >
        <SearchIcon />
        <Searchbox
          maxLength={100}
          onChange={e => setInput(e.target.value)}
          placeholder = 'Search news'
          value={input}
        />
        {!isMobile && 
          <BigButton
            onClick={() => setQuery(input)}
            text='search'
            type='submit'
          /> 
        }
      </form>
      {isMobile && 
          <BurgerMenu />
      }
    </header>
  )
}
 
export default SearchBar 