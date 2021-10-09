import React from 'react'
import { createPortal } from 'react-dom'

import { modalRootName } from 'constants/consts'
import Logo from 'components/Logo/logo'
import Searchbox from 'components/Searchbox/searchbox'
import CategoriesBar from 'modules/categoriesBar/categories'

import styles from './modal.module.scss'

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
      <Logo />
      <Searchbox />
      <CategoriesBar />
    </main>
  ), portalHandle) : null
}
 
export default Modal