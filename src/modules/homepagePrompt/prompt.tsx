import React, { useState } from 'react'

import { useMobile } from 'hooks/useMobile'
import BigButton from 'components/BigButton/bigButton'

import styles from './prompt.module.scss'

const HomePagePrompt: React.FC = () => {
  const [shown, setShown] = useState<boolean>(true)
  const isMobile = useMobile()

  if (isMobile) {
    return null
  }
  
  return (
    <header className={shown ? styles.main : styles.hidden}>
      <main className={styles.content}>
        <section className={styles.text}>
          <h1>Make MyNews your homepage</h1>
          <span>Every day discover what is trending on the internet</span>
        </section>
        <section className={styles.buttons}
          onClick={() => setShown(!shown)}>
          <BigButton color='white'
            sizes= {{
              h: '40px',
              w: '69px'
            }}
            text="get"
            textColor='black' />
          <span>No, thanks</span>
        </section>
      </main>
    </header>
  )
}
 
export default HomePagePrompt