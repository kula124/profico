import React, { useState, useEffect } from 'react'
 
import { ReactComponent as CircleIcon } from 'assets/icons/Latest.svg'
import { ReactComponent as ArrowIcon } from 'assets/icons/Down.svg'
import { INewsArticle } from 'constants/newsItem'

import styles from './latestNews.module.scss'

const LatestNews: React.FC = () => {
  const [latestNews, setLatestNews] = useState<INewsArticle[]>()
  const [oldrest, setOldest] = useState<Date>()

  return (
    <section className={styles.main}>
      <header>
        <CircleIcon />
        <h2>Latest news</h2>
      </header>
      <ul>
      </ul>
      <footer>
        <span>See all news</span>
        <ArrowIcon />
      </footer>
    </section>
  )
}
 
export default LatestNews