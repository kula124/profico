import React, { useEffect, useState } from 'react'

import { INewsArticle } from 'constants/newsItem'
import NewsArticleThumb from 'components/NewsArticeThumb/newsThub'

import styles from './news.module.scss'
import { getNewsByQuery } from 'utils/api'
/* interface NewsContentProps {
  
} */
 
const NewsContent: React.FC = () => {
  const [articles, setArticles] = useState<INewsArticle[] | void>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const r = await getNewsByQuery({ q: 'tesla', limit: 10 })
        .catch(() => setError(true))
        .finally(() => setLoading(false))

      setArticles(r)
    }

    fetch()
  }, [])

  if (error) {
    return <div>ERROR!</div>
  } 

  return (
    <section className={styles.main}>
      <h2>News</h2>
      {!loading && articles ? <ul>
        {articles.map(e => <NewsArticleThumb {...e}
          key={e.title} />)}
        <div className={styles.tst}></div>
      </ul> : <div>Loading...</div>}
    </section>
  )
}
 
export default NewsContent