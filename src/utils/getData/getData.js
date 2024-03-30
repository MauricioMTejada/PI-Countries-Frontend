import { addPropAreaString } from "../formatData/formatArea";
import { addPropPopulationString } from "../formatData/formatPopulationData";
import { dataMock } from "../mock/dataMock";

const configGetData = () => {

    // trabajo con datos locales?
	const localhost = true;

    // trabajo con api?
	const api = false;

	return {
		localhost,
		api,
	};
};

export const getData = () => {

    const { localhost, api } = configGetData();

    let data = []

    if (localhost) {
        data = dataMock;
        let formatData = addPropPopulationString(data);
        formatData = addPropAreaString(formatData);
        console.log(formatData);
        return formatData;
    }
}
