export const SET_FORM_ACTIVITY = "SET_FORM_ACTIVITY";

export const setFormActivity = (formData) => {
    return {
        type: SET_FORM_ACTIVITY,
        payload: formData,
    };
};
