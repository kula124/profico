import * as React from 'react'

import { INewsArticle } from 'constants/newsItem'
import { ReactComponent as BookmarkIcon } from 'assets/icons/Bookmark.svg'
import styles from './thumb.module.scss'
import { useBookmarks } from 'hooks/useBookmarks'

interface NewsArticleThumbProps extends INewsArticle {
  location?: string
}
 
const NewsArticleThumb: React.FC<NewsArticleThumbProps> = (p) => {
  const { url, urlToImage, location, category, bookmarked, author, title } = p

  const { toggleCacheElement } = useBookmarks()

  return (
    <a href={url}
      rel='noreferrer'
      target='_blank' >
      <li className={styles.item}>
        <img alt='article image'
          className='skeleton-image'
          src={urlToImage} />
        <article>
          <p>{!location ? category || 'general' : location}</p>
          <h1>{title}</h1>
          <footer>
            <span>{author || 'author: n/a'}</span>
            <BookmarkIcon className={!bookmarked ? styles.grayFill : ''}
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                toggleCacheElement(p)
              }}/>
          </footer>
        </article>
      </li>
    </a>
  )
}
 
export default NewsArticleThumb