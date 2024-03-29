export const ACTIVE_COUNTRIES = 'ACTIVE_COUNTRIES';

export const activeCountries = (value) => {
    return {
        type: ACTIVE_COUNTRIES,
        payload: value
    }
}