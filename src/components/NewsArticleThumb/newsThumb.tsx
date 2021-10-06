import { INewsArticle } from 'constants/newsItem'
import * as React from 'react'

import styles from './thumb.module.scss'

interface NewsArticleThumbProps extends INewsArticle {
  location?: string
}
 
const NewsArticleThumb: React.FC<NewsArticleThumbProps> = ({ author, url, title, category, urlToImage, location }) => {
  return (
    <a href={url}
      rel='noreferrer'
      target='_blank' >
      <li className={styles.item}>
        <img alt='article image'
          src={urlToImage} />
        <article>
          <p>{!location ? category || 'general' : location}</p>
          <h1>{title}</h1>
          <span>{author || 'author: n/a'}</span>
        </article>
      </li>
    </a>
  )
}
 
export default NewsArticleThumb