import { CategoryName } from 'constants/categories'
import { INewsArticle } from 'constants/newsItem'
import * as React from 'react'

import styles from './thumb.module.scss'
 
const NewsArticleThumb: React.FC<INewsArticle> = ({ author, url, title, category, urlToImage }) => {
  return (
    <li className={styles.item}>
      <a href={url}
        rel='noreferrer'
        target='_blank' >
        <img alt='article image'
          src={urlToImage} />
        <article>
          <p>{category || 'general'}</p>
          <h1>{title}</h1>
          <span>{author || 'author: n/a'}</span>
        </article>
      </a>
    </li>
  )
}
 
export default NewsArticleThumb