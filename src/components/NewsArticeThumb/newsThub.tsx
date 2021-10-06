import { INewsArticle } from 'constants/newsItem'
import * as React from 'react'

import styles from './thumb.module.scss'
 
const NewsArticleThumb: React.FC<INewsArticle> = ({ author, url, title, category, urlToImage }) => {
  return (
    <a href={url}
      rel='noreferrer'
      target='_blank' >
      <li className={styles.item}>
        <img alt='article image'
          src={urlToImage} />
        <article>
          <p>{category || 'general'}</p>
          <h1>{title}</h1>
          <span>{author || 'author: n/a'}</span>
        </article>
      </li>
    </a>
  )
}
 
export default NewsArticleThumb