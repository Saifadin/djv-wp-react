import React from 'react'
import uniqId from 'uniqid'

import styles from './BoardImageRow.scss'

const BoardImageRow = ({size}) => {
  const images = [
    {src: '/assets/board/aniss.jpeg', name: 'Dr. Aniss Aldoaiss'},
    {src: '/assets/board/anis-hassan.jpeg', name: 'Dr. Anis Hassan'},
    {src: '/assets/board/ahmed.jpeg', name: 'Dr. Ahmed Al-Khameri'},
  ]
  return (
    <div className={styles.wrapper}>
      {images.map(image => {
        return <img key={uniqId()} src={image.src} alt={image.name} className={[styles.image, styles[size]].join(' ')} />
      })}
    </div>
  )
}

export default BoardImageRow