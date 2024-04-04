import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Layout } from "../../components/Layout/Layout";
import { Loading } from "../../components/Loading/Loading";
import { HomeData } from "./childrenComponents/index";

const Home = () => {
	const [dataLoaded, setDataLoaded] = useState(false);

	const allPaises = useSelector((state) => state.mainCountries);

	useEffect(() => {
		if (allPaises.length > 0) setDataLoaded(true);
	}, [allPaises]);

	return (
		<Layout>
				{dataLoaded === false ? <Loading /> : <HomeData />}
		</Layout>
	);
};

export default Home;
