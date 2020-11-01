import * as actionTypes from './actionsTypes';

export const setLimitAction = (limit) => ({
    type: actionTypes.SET_LIMIT,
    payload: {
        limit: limit,
    }
})

export const clearLimitAction = () => ({
    type: actionTypes.CLEAR_LIMIT,
})