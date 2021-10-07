import * as React from 'react'

import styles from 'components/NewsArticleThumb/thumb.module.scss'
 
const SkeletonItem: React.FunctionComponent = () => {
  return (
    <li className={styles.item + ' skeleton-item'}>
      <img className='skeleton-image' />
      <div className='skeleton-cat'></div>
      <article className='skeleton-section'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </article>
    </li>
  )
}
 
export default SkeletonItem