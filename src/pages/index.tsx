import React, { useState } from 'react'

import HomePagePrompt from 'modules/homepagePrompt/hpPrompt'
import HorizontalSpacer from 'modules/hSpacer/hSpacer'
import SearchBar from 'modules/searchbar/searchbar'
import styles from './homepage.module.scss'
import CategoriesBar from 'modules/categoriesBar/categories'
import NewsContent from 'modules/newsContent/news'

const MainPage:React.FC = () => {
  const [query, setQuery] = useState<string>()

  return (
    <>
      <HomePagePrompt />
      <main className={styles.main}>
        <SearchBar setQuery={setQuery} />
        <HorizontalSpacer />
        <section className={styles.content}>
          <CategoriesBar />
          <NewsContent query={query} />
        </section>
      </main>
    </>
  )
}

export default MainPage