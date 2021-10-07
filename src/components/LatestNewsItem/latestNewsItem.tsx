import * as React from 'react'
import moment from 'moment'

import { INewsArticle } from 'constants/newsItem'

import styles from './latestNewsItem.module.scss'
 
const LatestNewsItem: React.FunctionComponent<INewsArticle> = ({ url, title, publishedAt }) => {
  return (
    <li className={styles.main}>
      <a href={url}
        rel='noreferrer'
        target='_blank'>
        <span>{moment(publishedAt).format('hh:mm')}</span>
        <h3>
          {title}
        </h3>
      </a>
    </li>
  )
}
 
export default LatestNewsItem
