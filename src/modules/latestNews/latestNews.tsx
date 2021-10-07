import React, { useState, useEffect } from 'react'
 
import { ReactComponent as CircleIcon } from 'assets/icons/Latest.svg'
import { ReactComponent as ArrowIcon } from 'assets/icons/Down.svg'
import { INewsArticle, tstData } from 'constants/newsItem'

import styles from './latestNews.module.scss'
import LatestNewsItem from 'components/LatestNewsItem/latestNewsItem'
import { getNewsByQuery } from 'utils/api'


const LatestNews: React.FC = () => {
  const [latestNews, setLatestNews] = useState<INewsArticle[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [oldest, setOldest] = useState<string>()

  useEffect(() => {
    const fetchNewData = async () => {
      const r = await getNewsByQuery({
        language: 'en',
        limit: 10,
        sortBy: 'publishedAt',
        to: oldest,
      }).finally(() => setLoading(false))
        .catch(() => setError(true))

      if (r) {
        setLatestNews([...latestNews, ...r])
      }

    }

    fetchNewData()
  })

  return (
    <section className={styles.main}>
      <header>
        <CircleIcon />
        <h2>Latest news</h2>
      </header>
      <ul className={styles.latestNewsList}>
        {tstData.map(e => <LatestNewsItem key={e.title}
          {...e} />)}
        <li>loading...</li>
      </ul>
      <footer>
        <span>See all news</span>
        <ArrowIcon />
      </footer>
    </section>
  )
}
 
export default LatestNews