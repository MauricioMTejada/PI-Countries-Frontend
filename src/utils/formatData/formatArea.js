export const addPropAreaString = (data) => {
    return data.map(prop => {
        return {
            ...prop,
            stringArea: formatArea(prop.area)
        };
    });
};

const formatArea = (area) => {
    const areaString = area.toLocaleString()

    return areaString;
}