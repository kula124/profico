import React from 'react'

import { testArray } from 'constants/newsItem'
import NewsArticleThumb from 'components/NewsArticeThumb/newsThub'

import styles from './news.module.scss'
/* interface NewsContentProps {
  
} */
 
const NewsContent: React.FC = () => {
  return (
    <section className={styles.main}>
      <h2>News</h2>
      <ul>
        {testArray.map(e => <NewsArticleThumb {...e}
          key={e.title} />)}
        <div className={styles.tst}></div>
      </ul>
    </section>
  )
}
 
export default NewsContent