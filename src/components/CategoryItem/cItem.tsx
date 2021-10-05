import React from 'react'

import { ICategory } from 'constants/categories'

import styles from './item.module.scss'

const CategoryItem: React.FC<ICategory> = ({ name, icon: Icon }) => {

  return (
    <li className={styles.main}>
      <Icon />
      <p>{name}</p>
    </li>
  )
}
 
export default CategoryItem