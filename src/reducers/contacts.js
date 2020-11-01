import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    contacts: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RANDOM_CONTACT: return addContactUtil(state, action);
        case actionTypes.ADD_CONTACT: return addContactUtil(state, action);
        case actionTypes.DELETE_CONTACT: return deleteContactUtil(state, action);
        default: return state
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
    return updateObject(state, { contacts: updatedArray });
};

const addContactUtil = (state, action) => {
    return updateObject(state, {
        contacts: state.contacts.concat({
            id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email,
        })
    });

};
