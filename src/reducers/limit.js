// import * as actionTypes from '../actions/actionsTypes';

// const initialState = {
//     limit: -1,
//     hasLimit: false
// };
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.SET_LIMIT:
//             return updateObject(state, { limit: action.payload.limit, hasLimit: true });
//         case actionTypes.CLEAR_LIMIT:
//             return updateObject(state, { limit: -1, hasLimit: false });
//         default:
//             return state
//     }
// };

// export default reducer;


// // utils: //TODO: USE EXPORT

// const updateObject = (oldObject, updatedValues) => {
//     return {
//         ...oldObject,
//         ...updatedValues
//     }
// };