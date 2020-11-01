let nextContactId = 0
export const addContactAction = (name, email) => ({
    type: 'ADD_CONTACT',
    payload: {
        id: nextContactId++,
        name,
        email
    }
})

export const addRandomContactAction = () => {
    return async (dispatch) => {
        fetch("https://randomuser.me/api/")
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                data = data.results[0];
                return dispatch({
                    type: "ADD_RANDOM_CONTACT",
                    payload: {
                        id: nextContactId++,
                        name: `${data.name.first} ${data.name.last}`,
                        // phone: data.phone,
                        email: data.email,
                        // address: `${data.location.city}, ${data.location.country}`,
                    },
                });
            });
    }
}


export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const deleteContact = id => ({
    type: 'DELETE_CONTACT',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
