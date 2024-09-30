import React from 'react'
import styles from "./SidbarCard.module.css"

function SidbarCard({data}) {
    const {title , image } = data ;
  return (
    <div className={styles.card}>
        <img src={image } title={title} />
        <p>{title}</p>
    </div>
  )
}

export default SidbarCard