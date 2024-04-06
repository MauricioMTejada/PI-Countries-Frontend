import React from "react";
import style from "./PillsData.module.css";

export const Pill = ({ image, title, data }) => {
  return (
    <div className={style.pill}>
      <div className={style.contentImage}>
        <img src={image} alt={title} className={style.image} />
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <strong>{title}</strong>
        </div>
        <div className={style.text}>
          <span>{data}</span>
        </div>
      </div>
    </div>
  );
};

export const PillChildren = ({ image, title, children }) => {
  // console.log(image);
  // console.log(title);
  return (
    <div className={style.pill}>
      <div className={style.contentImage}>
        <img src={image} alt={title} className={style.image} />
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <strong>{title}</strong>
        </div>
        <div className={style.component}>
          {children}
        </div>
      </div>
    </div>
  );
};