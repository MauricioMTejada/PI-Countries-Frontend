export const STATE_ASSIGN_ACTIVITY = "STATE_ASSIGN_ACTIVITY";

export const actionStateAssignActivity = (value) => {
    console.log(value);
    // console.log("actionStateAssignActivity: ");
    // console.log(optionActivity);
    return {
        type: STATE_ASSIGN_ACTIVITY,
        payload: value,
    }
}