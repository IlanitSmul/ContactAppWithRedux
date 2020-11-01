import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    contactsArr: [],
    limit: -1,
    canAdd: true,
    debugRedux: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_RANDOM_CONTACT:
            return addContactUtil(state, action);
        case actionTypes.ADD_CONTACT:
            return addContactUtil(state, action);
        case actionTypes.DELETE_CONTACT:
            return deleteContactUtil(state, action);

        case actionTypes.SET_LIMIT:
            return limitContactListUtil(state, action);
        case actionTypes.CLEAR_LIMIT:
            return updateObject(state, { limit: -1, canAdd: true });

        case actionTypes.DISABLE_REDUX_DEBUGGER:
            return updateObject(state, { debugRedux: false });
        case actionTypes.ENABLE_REDUX_DEBUGGER:
            return updateObject(state, { debugRedux: true });

        default:
            return state
    }
}

export default reducer

// utils:

const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

const deleteContactUtil = (state, action) => {
    const updatedArray = state.contactsArr.filter(contact => contact.id !== action.payload.id);
    return updateObject(state,
        {
            contactsArr: updatedArray,
            canAdd: checkIfCanAddContact(updatedArray, state.limit),
        });
};

const addContactUtil = (state, action) => {
    console.log(action)
    const updatedArray = state.contactsArr.concat({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
    })

    return updateObject(state,
        {
            contactsArr: updatedArray,
            canAdd: checkIfCanAddContact(updatedArray, state.limit),
        });
};

const limitContactListUtil = (state, action) => {
    const updatedArray = state.contactsArr.filter((contact, index) => index < action.payload.limit);
    return updateObject(state,
        {
            contactsArr: updatedArray,
            limit: action.payload.limit,
            canAdd: checkIfCanAddContact(updatedArray, action.payload.limit),

        });
};

const checkIfCanAddContact = (contactsArray, limit) => {
    return (contactsArray.length < limit || limit < 0) ? true : false
}