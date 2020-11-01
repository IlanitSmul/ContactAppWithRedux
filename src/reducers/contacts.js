import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    contacts: [],
    limit: -1,
    canAdd: true
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
    const updatedArray = state.contacts.filter(contact => contact.id !== action.payload.id);
    return updateObject(state,
        {
            contacts: updatedArray,
            canAdd: checkIfCanAddContact(updatedArray, state.limit),
        });
};

const addContactUtil = (state, action) => {
    const updatedArray = state.contacts.concat({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
    })

    return updateObject(state,
        {
            contacts: updatedArray,
            canAdd: checkIfCanAddContact(updatedArray, state.limit),
        });
};

const limitContactListUtil = (state, action) => {
    const updatedArray = state.contacts.filter((contact, index) => index < action.payload.limit);
    return updateObject(state,
        {
            contacts: updatedArray,
            limit: action.payload.limit,
            canAdd: checkIfCanAddContact(updatedArray, action.payload.limit),

        });
};

const checkIfCanAddContact = (contactsArray, limit) => {
    return (contactsArray.length < limit || limit < 0) ? true : false
}