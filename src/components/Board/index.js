import React from 'react'
import uniqId from 'uniqid'

import styles from './Board.scss'

const Board = () => {
  const board = [
    {src: '/assets/board/aniss.jpeg', name: 'Dr. Aniss Al-Doaiss', role: 'Vorsitzender'},
    {src: '/assets/board/ahmed.jpeg', name: 'Dr. Ahmed Al-Khameri', role: 'Stellvertretender Vorsitzender'},
    {src: '/assets/board/anis-hassan.jpeg', name: 'Anes Hassan', role: 'Zuständig für Datenbanken'},
  ]
  return (
    <div className={styles.wrapper}>
      { board.map(member => {
        return (
          <div  key={uniqId()} className={styles.boardWrapper}>
            <div className={styles.imageWrapper}>
              <img src={member.src} alt={member.name} className={styles.image} />
            </div>
            <div className={styles.description}>
              <h3 className={styles.name}>{member.name}</h3>
              <h4 className={styles.role}>{member.role}</h4>
            </div>
          </div>
        )
      }) }
    </div>
  )
}

export default Board