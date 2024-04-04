import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDetail } from "../../redux/actions/index";
import { Loading } from "../../components/Loading/Loading";
import { Layout } from "../../components/Layout/Layout";
import {DetailData} from "./childrenComponents/index";

import style from "./Detail.module.css";

export default function Detail() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		dispatch(getDetail(id)).then(() => {
			setIsLoading(false);
		});
	}, [dispatch, id]);

	return (
		<Layout>
			{isLoading ? <Loading /> : <DetailData />}
		</ Layout>
	);
}
