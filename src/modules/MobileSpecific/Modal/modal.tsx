import React from 'react'
import { createPortal } from 'react-dom'

import { modalRootName } from 'constants/consts'
import CategoriesBar from 'modules/categoriesBar/categories'

import styles from './modal.module.scss'
import SearchBar from 'modules/header/header'

const Modal: React.FC<{isOpen: boolean, close: () => void}> = ({ isOpen, close }) => {
  const portalHandle = document.getElementById(modalRootName)

  if (!portalHandle) {
    throw 'Portal handle not found!'
  }
  
  return isOpen ? createPortal((
    <main className={styles.main}>
      <div className={styles.close}
        onClick={close}>
      </div>
      <SearchBar overrideClass='modal'/>
      <CategoriesBar />
    </main>
  ), portalHandle) : null
}
 
export default Modal