import React, { useState } from 'react'

import BigButton from 'components/BigButton/bigButton'

import styles from './prompt.module.scss'

const HomePagePrompt: React.FC = () => {
  const [shown, setShown] = useState<boolean>(true)
  
  return (
    <header className={shown ? styles.main : styles.hidden}>
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
    </header>
  )
}
 
export default HomePagePrompt