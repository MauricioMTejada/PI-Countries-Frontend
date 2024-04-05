export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';

export const selectActivity = (selectedId) => {

    console.log(selectedId);

    return {
        type: SELECT_ACTIVITY,
        payload: selectedId
    }
}