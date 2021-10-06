import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { INewsArticle } from 'constants/newsItem'
import NewsArticleThumb from 'components/NewsArticleThumb/newsThumb'
import { getNewsByCategory, getNewsByQuery } from 'utils/api'

import styles from './news.module.scss'
 
const NewsContent: React.FC<{query?: string}> = ({ query }) => {
  const [articles, setArticles] = useState<INewsArticle[] | void>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const fetch = async () => {
      const category = location.pathname.split('/')[1]
      
      setLoading(true)
      setError(false)
      const getNews = category === '' || !category ? getNewsByQuery : getNewsByCategory
      const r = await getNews({ category, limit: 12, q:query })
        .catch(() => setError(true))
        .finally(() => setLoading(false))

      setArticles(r)
    }

    fetch()
  }, [location.pathname, query])

  if (error) {
    return <div>ERROR!</div>
  }

  let category = ''

  if (location) {
    category = location.pathname.split('/')[1]
  }

  return (
    <section className={styles.main}>
      <h2>News</h2>
      {!loading && articles ? <ul>
        {articles.map(e => <NewsArticleThumb {...e}
          key={e.title}
          location={category==='' ? undefined : category} />)}
        <div className={styles.tst}></div>
      </ul> : <div>Loading...</div>}
    </section>
  )
}
 
export default NewsContent