export const MAIN_PAGE = 'MAIN_PAGE';

export const mainPage = (numberPage) => {
    return {
        type: MAIN_PAGE,
        payload: numberPage,
    }
}