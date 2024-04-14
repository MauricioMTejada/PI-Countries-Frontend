export const RESET_ASSIGN_ACTIVITY = 'RESET_ASSIGN_ACTIVITY';
export const RESET_IN_FALSE = 'RESET_IN_FALSE';


export const resetStateAssignActivity = () => {
    return {
        type: RESET_ASSIGN_ACTIVITY,
    }
}

export const resetInFalse = () => ({
  type: RESET_IN_FALSE,
});
