import React, { useState, useEffect } from 'react'

import styles from './switch.module.scss'

export type Nav = 'f' | 'l' | ''

const Switch: React.FC<{onSwitch: (a:Nav) => void}> = ({ onSwitch }) => {
  const [selected, setSelected] = useState<Nav>('')

  const isSelected = (f:Nav):boolean => selected === f

  useEffect(() => {
    if (selected === '') {
      setSelected('f')
    }

    onSwitch(selected)
  }, [onSwitch, selected])

  return (
    <nav className={styles.main}>
      <li className={styles[isSelected('f') ? 'selected' : '']}
        onClick={() => setSelected('f')}
      >
        <span>Features</span>
      </li>
      <li className={styles[isSelected('l') ? 'selected' : '']}
        onClick={() => setSelected('l')}
      >
        <span>Latest</span>
      </li>
    </nav>
  )
}
 
export default Switch