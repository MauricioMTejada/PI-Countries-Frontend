import React from "react";
import { SmallLoading } from "../../../components/Loading/Loading";
import style from "./SubmitButton.module.css";

export const SubmitButton = ({ loading }) => {
  return (
    <div className={style.buttonContainer}>
      <div className={style.buttonCapsule}>
        <button type="submit">Enviar</button>
        {loading && (
          <div className={style.SmallLoading}>
            <SmallLoading />
          </div>
        )}
      </div>
    </div>
  );
};
