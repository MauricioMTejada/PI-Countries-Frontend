import { formatData } from "../formatData/formatData";
import { dataMock } from "../mock/dataMock";

// Direcciones de Api Local:
const API_LOCAL = "http://localhost:3002";

// Direcciones de Api Remota:
const API_REMOTE = "";

const configGetData = () => {
	// trabajo con api?
	// SI => api = true
	// No => api = false
	const api = true;

	// trabajo con api local?
	// SI => localApi = true
	// No => localApi = false
	const localApi = true;

	return { api, localApi };
};

export const getData = () => {
	const { api, localApi } = configGetData();

	const apiUrl = localApi ? API_LOCAL : API_REMOTE;

	let data = [];

	if (!api) {
		data = dataMock;

        data = formatData({data, paramData: "mock"});
	}

	return { api, apiUrl, data };
};
