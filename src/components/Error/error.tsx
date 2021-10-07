import React from 'react'
 
import styles from './error.module.scss'

const Error: React.FunctionComponent<{text: string}> = ({ text }) => {
  return (
    <section className={styles.body}>
      <div className={styles.main}>
    	<div className={styles.fof}>
        		<h1>{text}</h1>
    	</div>
      </div>
    </section>
  )
}
 
export default Error