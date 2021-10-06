import { INewsArticle } from 'constants/newsItem'
import * as React from 'react'

import styles from './thumb.module.scss'
 
const NewsArticleThumb: React.FC<INewsArticle> = ({ author, title, urlToImage }) => {
  return (
    <li className={styles.item}>
      <img alt='article image'
        src={urlToImage} />
      <article>
        <p>Tech</p>
        <h1>{title}</h1>
        <span>{author}</span>
      </article>
    </li>
  )
}
 
export default NewsArticleThumb