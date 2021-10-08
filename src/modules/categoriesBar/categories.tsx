import React from 'react'
 
import { categories } from 'constants/categories'
import CategoryItem from 'components/CategoryItem/cItem'

import styles from './categories.module.scss'
import { useMobile } from 'hooks/useMobile'

const CategoriesBar: React.FC = () => {
  const isMobile = useMobile()

  if (isMobile) {
    return null
  }

  return (
    <ul className={styles.main}>
      {categories.map(c => <CategoryItem key={c.name}
        {...c} />)}
    </ul>
  )
}
 
export default CategoriesBar