import React from 'react'

import HomePagePrompt from 'modules/homepagePrompt/hpPrompt'
import HorizontalSpacer from 'modules/hSpacer/hSpacer'
import SearchBar from 'modules/searchbar/searchbar'

import styles from './homepage.module.scss'

const Homepage:React.FC = () => {
  return (
    <>
      <HomePagePrompt />
      <main className={styles.main}>
        <SearchBar />
        <HorizontalSpacer />
      </main>
    </>
  )
}

export default Homepage