import * as actionTypes from './actionsTypes';

let nextContactId = 0

export const addRandomContactAction = () => {
    return async (dispatch) => {
        fetch("https://randomuser.me/api/")
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                data = data.results[0];
                return dispatch({
                    type: actionTypes.ADD_RANDOM_CONTACT,
                    payload: {
                        id: nextContactId++,
                        name: `${data.name.first} ${data.name.last}`,
                        phone: data.phone,
                        email: data.email,
                        address: `${data.location.city}, ${data.location.country}`,
                    },
                });
            }).catch(error => console.log('Error: ' + error.message));
        ;
    }
}

export const addContactAction = (contact) => ({
    type: actionTypes.ADD_CONTACT,
    payload: {
        id: nextContactId++,
        ...contact
    }
})

export const deleteContact = id => ({
    type: actionTypes.DELETE_CONTACT,
    payload: {
        id
    }
})

