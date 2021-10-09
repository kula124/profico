import React, { useState } from 'react'

import { QueryContext } from 'hooks/useQuery'
import HomePagePrompt from 'modules/homepagePrompt/hpPrompt'
import HorizontalSpacer from 'modules/hSpacer/hSpacer'
import SearchBar from 'modules/searchbar/searchbar'
import styles from './homepage.module.scss'
import CategoriesBar from 'modules/categoriesBar/categories'
import NewsContent from 'modules/newsContent/news'
import { useMobile } from 'hooks/useMobile'

const MainPage:React.FC = () => {
  const [query, setQuery] = useState<string>('latest')
  const isMobile = useMobile()

  return (
    <>
      <HomePagePrompt />
      <main className={styles.main}>
        <QueryContext.Provider value={{ query, setQuery }}>
          <SearchBar />
          <HorizontalSpacer />
          <section className={styles.content}>
            { !isMobile &&  <CategoriesBar />}
            <NewsContent />
          </section>
        </QueryContext.Provider>
      </main>
    </>
  )
}

export default MainPage