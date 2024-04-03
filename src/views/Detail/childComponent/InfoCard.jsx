import React from "react";

import { area, capital, population, subregion } from "../../../assets/decorations";

import styleInfoCard from "./infoCard.module.css";

export const InfoCard = ({ countryDetail }) => {
	return (
		<div className={styleInfoCard.container}>


			<div className={styleInfoCard.pillsContainer}>
				<div className={styleInfoCard.pill}>
					<div className={styleInfoCard.contentImage}>
						<img
							src={subregion}
							alt="subregion"
							className={styleInfoCard.image}
						/>
					</div>
					<div className={styleInfoCard.info}>
						<div className={styleInfoCard.title}>
							<strong>Subregión</strong>
						</div>
						<div className={styleInfoCard.text}>
							<span>{countryDetail.subregion}</span>
						</div>
					</div>
				</div>

				<div className={styleInfoCard.pill}>
					<div className={styleInfoCard.contentImage}>
						<img src={capital} alt="capital" className={styleInfoCard.image} />
					</div>
					<div className={styleInfoCard.info}>
						<div className={styleInfoCard.title}>
							<strong>Capital</strong>
						</div>
						<div className={styleInfoCard.text}>
							<span>{countryDetail.capital}</span>
						</div>
					</div>
				</div>

				<div className={styleInfoCard.pill}>
					<div className={styleInfoCard.contentImage}>
						<img src={area} alt="area" className={styleInfoCard.image} />
					</div>
					<div className={styleInfoCard.info}>
						<div className={styleInfoCard.title}>
							<strong>Área</strong>
						</div>
						<div className={styleInfoCard.text}>
							<span>
								{countryDetail.stringArea} km<sup>2</sup>
							</span>
						</div>
					</div>
				</div>

				<div className={styleInfoCard.pill}>
					<div className={styleInfoCard.contentImage}>
						<img
							src={population}
							alt="poblacion"
							className={styleInfoCard.image}
						/>
					</div>
					<div className={styleInfoCard.info}>
						<div className={styleInfoCard.title}>
							<strong>Población</strong>
						</div>
						<div className={styleInfoCard.text}>
							<span>{countryDetail.stringPoblacion}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
