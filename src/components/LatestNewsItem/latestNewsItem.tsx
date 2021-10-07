import { INewsArticle } from 'constants/newsItem'
import * as React from 'react'

import styles from './latestNewsItem.module.scss'
 
const LatestNewsItem: React.FunctionComponent<INewsArticle> = ({ url, title }) => {
  return (
    <li className={styles.main}>
      <a href={url}
        rel='noreferrer'
        target='_blank'>
        <span>14:50</span>
        <h3>
          {title}
        </h3>
      </a>
    </li>
  )
}
 
export default LatestNewsItem
