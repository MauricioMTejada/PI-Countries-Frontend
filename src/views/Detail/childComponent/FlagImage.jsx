import React from 'react'

import style from '../Detail.module.css';

export const FlagImage = ({ countryDetail }) => {
  return (
    <div className={style.cardImage}>
    <div className={style.cardDecoration}></div>
    <div className={style.imageBorder}>
        <img
            src={countryDetail.bandera}
            alt="Bandera"
            className={style.image}
        />
    </div>
</div>
  )
}
