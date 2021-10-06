import React from 'react'

import HomePagePrompt from 'modules/homepagePrompt/hpPrompt'
import HorizontalSpacer from 'modules/hSpacer/hSpacer'
import SearchBar from 'modules/searchbar/searchbar'
import styles from './homepage.module.scss'
import CategoriesBar from 'modules/categoriesBar/categories'
import NewsContent from 'modules/newsContent/news'

const MainPage:React.FC = () => {
  return (
    <>
      <HomePagePrompt />
      <main className={styles.main}>
        <SearchBar />
        <HorizontalSpacer />
        <section className={styles.content}>
          <CategoriesBar />
          <NewsContent />
        </section>
      </main>
    </>
  )
}

export default MainPage