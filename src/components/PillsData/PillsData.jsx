import React from "react";
import style from "./PillsData.module.css";
import { noImage } from "../../assets/others/index";

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
  const iconSrc = image ? image : noImage;

  return (
    <div className={style.pill}>
      <div className={style.contentImage}>
        <img src={iconSrc} alt={title} className={style.image} />
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