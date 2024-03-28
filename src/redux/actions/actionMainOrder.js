export const MAIN_ORDER = "MAIN_ORDER";

export const actionMainOrder = (value) => {
    return {
        type: MAIN_ORDER,
        payload:value,
    }
}