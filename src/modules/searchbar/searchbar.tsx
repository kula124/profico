/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react'

import BigButton from 'components/BigButton/bigButton'
import Logo from 'components/Logo/logo'
import styles from './styles.module.scss'
import { defaultSearchValue } from 'constants/consts'
import { useMobile } from 'hooks/useMobile'
import { useQuery } from 'hooks/useQuery'
import BurgerMenu from 'components/Mobile/BurgerMenu/burger'
import Searchbox from 'components/Searchbox/searchbox'
import Modal from 'modules/MobileSpecific/Modal/modal'

const SearchBar : React.FC<{overrideClass?: string}> = ({ overrideClass }) => {
  const { setQuery, query } = useQuery()
  const [input, setInput] = useState<string>(query)
  const isMobile = useMobile()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    setInput(query)
  }, [query])

  return (
    <header className={styles[overrideClass || 'main']}>
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
        <React.Fragment>
          <BurgerMenu onClickCallback={() => setModalIsOpen(true)} />
          <Modal close={() => setModalIsOpen(false)}
            isOpen={modalIsOpen} />
        </React.Fragment>
      }
    </header>
  )
}
 
export default SearchBar 