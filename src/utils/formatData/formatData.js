import { addPropAreaString } from "./formatArea";
import { addPropPopulationString } from "./formatPopulationData";

export const formatData = ({data, paramData}) => {
if (paramData === 'mock') {
        data = addPropPopulationString(data);
		data = addPropAreaString(data);

        return data;
    }

    if (paramData === 'api') {
        data = addPropPopulationString(data);
		data = addPropAreaString(data);

        return data;
    }
}