import React from 'react'
import styles from './index.module.css'
const Wrapper = (props) => {
  return (
    <div className={styles.div}>
        <div>{props.children}</div>
    </div>
  )
}

export default Wrapper