import React from 'react'

import style from './PaperBackground.module.css'

export const PaperBackground = ({ children }) => {
  return (
    <div className={style.mainContainer}>{children}</div>
  )
}
