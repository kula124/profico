import React from 'react'

import HomePagePrompt from 'modules/homepagePrompt/hpPrompt'
import HorizontalSpacer from 'modules/hSpacer/hSpacer'
import SearchBar from 'modules/searchbar/searchbar'

import styles from './homepage.module.scss'
import CategoriesBar from 'modules/categoriesBar/categories'
import NewsContent from 'modules/newsContent/news'

const Homepage:React.FC = () => {
  return (
    <>
      <HomePagePrompt />
      <main className={styles.main}>
        <SearchBar />
        <HorizontalSpacer />
        <div className={styles.content}>
          <CategoriesBar />
          <NewsContent />
        </div>
      </main>
    </>
  )
}

export default Homepage