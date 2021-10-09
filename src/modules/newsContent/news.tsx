import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router'
import useDeepCompareEffect from 'use-deep-compare-effect'

import { getNewsByCategory, getNewsByQuery } from 'utils/api'
import { INewsArticle } from 'constants/newsItem'
import { useBookmarks } from 'hooks/useBookmarks'
import { useMobile } from 'hooks/useMobile'

import NewsArticleThumb from 'components/NewsArticleThumb/newsThumb'
import SkeletonItem from 'components/Loading/newsArticle/skeletonArticle'
import LatestNewsSkeleton from 'components/Loading/newsArticle/skeletonLatestNews'
import Error from 'components/Error/error'

import LatestNews from 'modules/latestNews/latestNews'
import Switch, { Nav } from 'modules/MobileSpecific/Switch/switch'

import styles from './news.module.scss'

const NewsContent: React.FC<{query?: string}> = ({ query }) => {
  const [articles, setArticles] = useState<INewsArticle[] | void>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [mobileSelected, setMobileSelected] = useState<Nav>('f')
  const requestMade = useRef<boolean>(false)

  const location = useLocation()
  const { cache } = useBookmarks()
  const isMobile = useMobile()

  useEffect(() => {
    const category = location.pathname.split('/')[1]
    
    if (category === 'favorites') {
      return
    }

    if (requestMade.current) {
      return
    }

    const fetch = async () => {
      setLoading(true)
      requestMade.current=true
      setError(false)
      const getNews = category === '' || !category ? getNewsByQuery : getNewsByCategory
      const r = await getNews({ category, pageSize: 12, q:query })
        .catch(() => setError(true))
        .finally(() => {setLoading(false); requestMade.current = false})

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
    return <section className={styles.main}>
      <Error text={'Connection error...'} />
    </section>
  }

  let category = ''

  if (location) {
    category = location.pathname.split('/')[1]
  }

  return (
    <section className={styles.main}>
      {!isMobile
        ? <h2>News</h2>
        : <Switch onSwitch={f =>setMobileSelected(f)} />
      }
      {(!loading && articles) && <ul className={[styles.mobile,styles[mobileSelected]].join(' ')}>
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