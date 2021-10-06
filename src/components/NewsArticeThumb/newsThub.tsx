import { CategoryName } from 'constants/categories'
import { INewsArticle } from 'constants/newsItem'
import * as React from 'react'

import styles from './thumb.module.scss'
 
const NewsArticleThumb: React.FC<INewsArticle> = ({ author, title, category, urlToImage }) => {
  return (
    <li className={styles.item}>
      <img alt='article image'
        src={urlToImage} />
      <article>
        <p>{category || 'general'}</p>
        <h1>{title}</h1>
        <span>{author || 'author: n/a'}</span>
      </article>
    </li>
  )
}
 
export default NewsArticleThumb