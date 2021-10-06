import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { ICategory } from 'constants/categories'

import styles from './item.module.scss'

const CategoryItem: React.FC<ICategory> = ({ name, icon: Icon }) => {
  const location = useLocation()

  let selected = location.pathname.split('/')[1] === name

  if (name === 'home') {
    selected = location.pathname.split('/')[1] === ''
  }

  return (
    <Link to={`/${name === 'home' ? '' : name}`}>
      <li className={`${styles.main} ${selected ? styles.selected : ''}`}>
        <Icon />
        <p>{name}</p>
      </li>
    </Link>
  )
}
 
export default CategoryItem