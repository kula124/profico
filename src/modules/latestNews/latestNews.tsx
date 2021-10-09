import React, { useState, useEffect, useRef } from 'react'
 
import { ReactComponent as CircleIcon } from 'assets/icons/Latest.svg'
import { ReactComponent as ArrowIcon } from 'assets/icons/Down.svg'
import { INewsArticle } from 'constants/newsItem'

import styles from './latestNews.module.scss'
import LatestNewsItem from 'components/LatestNewsItem/latestNewsItem'
import { getNewsByQuery } from 'utils/api'
import ReactVisibilitySensor from 'react-visibility-sensor'


const LatestNews: React.FC = () => {
  const [latestNews, setLatestNews] = useState<INewsArticle[]>([])
  const requestMade = useRef(false)
  const [error, setError] = useState(false)
  const [visible, setVisible] = useState(false)
  const oldest = useRef<INewsArticle>()

  useEffect(() => {

    if (!visible) {
      return
    }

    if (requestMade.current) {
      return
    }

    const fetchNewData = async () => {
      requestMade.current = true
      const r = await getNewsByQuery({
        language: 'en',
        pageSize: 10,
        sortBy: 'publishedAt',
        to: oldest.current ? new Date(oldest.current.publishedAt).toISOString() : undefined
      }).then(list => oldest?.current ? list.filter(x => x.title != oldest.current?.title) : list)
        .finally(() => {requestMade.current = false})
        .catch(() => setError(true))

      if (r) { // magics, do not touch
        setLatestNews(ln => [...Array.from(new Map([...ln, ...r].map(item => [item['title'], item])).values())])
        oldest.current=r[r.length-1]
      }
    }

    fetchNewData()
  }, [visible])

  return (
    <section className={styles.main}>
      <header>
        <CircleIcon />
        <h2>Latest news</h2>
      </header>
      {error ? <div>Failed to load data :/</div> : 
        <ul className={styles.latestNewsList}>
          {latestNews.map(e => <LatestNewsItem key={e.title}
            {...e} />)}
          <ReactVisibilitySensor offset={{ top: 0 }}
            onChange={isVisible => setVisible(isVisible)}
            partialVisibility>
            <li>loading...</li>
          </ReactVisibilitySensor>
        </ul>
      }
      <footer>
        <span>See all news</span>
        <ArrowIcon />
      </footer>
    </section>
  )
}
 
export default LatestNews