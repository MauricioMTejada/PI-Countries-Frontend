import store from "../store";

export const STATE_ASSIGN_ACTIVITY = "STATE_ASSIGN_ACTIVITY";

export const actionStateAssignActivity = (value) => {
    // console.log(value);
    // console.log("actionStateAssignActivity: ");
    // console.log(optionActivity);
    return {
        type: STATE_ASSIGN_ACTIVITY,
        payload: value,
    }
}

export const actionPushStateAssignActivity = (value) => {
    // console.log(value);

    const { listCountriesToActivity } = store.getState().statesAssignActivity;

    listCountriesToActivity.push(value);
    // console.log(listCountriesToActivity);

    return {
        type: STATE_ASSIGN_ACTIVITY,
        payload: {listCountriesToActivity},
    }
}

export const deleteCountry = (value) => {
    // console.log(value);

    const { listCountriesToActivity } = store.getState().statesAssignActivity;

    const updatedList = listCountriesToActivity.filter(item => item.countryIndex !== value);

    return {
        type: STATE_ASSIGN_ACTIVITY,
        payload: { listCountriesToActivity: updatedList},
    }

};

export const addContinent = (value, selectedContinentValue) => {
    // console.log(selectedContinentValue);
    // console.log(value);

    let updateData = {};

    if (selectedContinentValue.continente === '') {

        // Armo el objeto a ser insertado:
        updateData = {...value, selectedCountry: {}, active: false};
        // console.log(updateData);

    } else {

        // Armo el objeto a ser insertado:
        updateData = {...value, selectedCountry: selectedContinentValue};
        // console.log(updateData);

    }

    const { listCountriesToActivity } = store.getState().statesAssignActivity;
    // console.log(listCountriesToActivity);

    // extraigo el objeto dentro del array de objetos:
    const updateList = listCountriesToActivity.filter(objeto => objeto.countryIndex !== updateData.countryIndex);
    // console.log(updateList);

    // agrego el nuevo objeto dentro del array de objetos:
    updateList.push(updateData);
    // console.log(updateList);

    return {
        type: STATE_ASSIGN_ACTIVITY,
        payload: { listCountriesToActivity: updateList },
    }
}


export const addCountry = (value, selectedCountryValue) => {
    // console.log(value);
    // console.log(selectedCountryValue);

    let updateData = {};

    if (selectedCountryValue === "Choose") {

        // Objeto "País vacío":
        // const emptyCountryData = { countryIndex: props.data.countryIndex, active: false, selectedCountry: {}, saveData: false, }

        // Armo el objeto a ser insertado:
        updateData = {...value, selectedCountry: {continente: value.selectedCountry.continente}, active: false};
        // console.log(updateData);

    } else {

        // busco la lista de países:
        const countryList = store.getState().mainCountries;

        // extraigo los datos del país utilizando el id:
        const dataCountry = countryList.find(country => country.id === selectedCountryValue);

        // Armo el objeto a ser insertado:
        updateData = {...value, selectedCountry: dataCountry, active: true};
        // console.log(updateData);
    }

    const { listCountriesToActivity } = store.getState().statesAssignActivity;

    // extraigo el objeto dentro del array de objetos:
    const updateList = listCountriesToActivity.filter(objeto => objeto.countryIndex !== updateData.countryIndex)

    // agrego el nuevo objeto dentro del array de objetos:
    updateList.push(updateData);

    return {
        type: STATE_ASSIGN_ACTIVITY,
        payload: { listCountriesToActivity: updateList},
    }
}