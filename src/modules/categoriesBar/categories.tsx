import React from 'react'
 
import { categories } from 'constants/categories'
import CategoryItem from 'components/CategoryItem/item'

import styles from './categories.module.scss'

const CategoriesBar: React.FC = () => {

  return (
    <ul className={styles.main}>
      {categories.map(c => <CategoryItem key={c.name}
        {...c} />)}
    </ul>
  )
}
 
export default CategoriesBar