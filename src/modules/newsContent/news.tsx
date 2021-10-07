import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { INewsArticle } from 'constants/newsItem'
import NewsArticleThumb from 'components/NewsArticleThumb/newsThumb'
import { getNewsByCategory, getNewsByQuery } from 'utils/api'

import styles from './news.module.scss'
import LatestNews from 'modules/latestNews/latestNews'
import { useBookmarks } from 'hooks/useBookmarks'
import useDeepCompareEffect from 'use-deep-compare-effect'
import SkeletonItem from 'components/Loading/newsArticle/skeletonArticle'
import LatestNewsSkeleton from 'components/Loading/newsArticle/skeletonLatestNews'
 
const NewsContent: React.FC<{query?: string}> = ({ query }) => {
  const [articles, setArticles] = useState<INewsArticle[] | void>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const location = useLocation()
  const { cache } = useBookmarks()

  useEffect(() => {
    const category = location.pathname.split('/')[1]
    
    if (category === 'favorites') {
      return
    }

    const fetch = async () => {
      setLoading(true)
      setError(false)
      const getNews = category === '' || !category ? getNewsByQuery : getNewsByCategory
      const r = await getNews({ category, pageSize: 12, q:query })
        .catch(() => setError(true))
        .finally(() => setLoading(false))

      setArticles(r)
    }

    fetch()
  }, [location.pathname, query])

  useDeepCompareEffect (() => {
    const category = location.pathname.split('/')[1]
    
    if (category === 'favorites') {
      setArticles(cache)
      
      return
    }

    setArticles(prev => {
      if (prev && prev.length !== 0) {
        return prev.map(x => {
          if (!!cache.find(y => y.title === x.title)) {
            return { ...x, bookmarked: true }
          }

          return { ...x, bookmarked: false }
        })
      }
    })
  }, [cache, location.pathname, articles])

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
      {(!loading && articles) && <ul>
        {articles.map(e => <NewsArticleThumb {...e}
          key={e.title}
          location={category==='' ? undefined : category} />)}
        <LatestNews />
      </ul>}
      {loading && 
        <ul>
          {(new Array<number>(10).fill(0)).map((x, i) =>
            <SkeletonItem  key={Math.random() * i} />)
          }
          <LatestNewsSkeleton />
        </ul>
      }
    </section>
  )
}
 
export default NewsContent