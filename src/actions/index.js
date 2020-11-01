let nextContactId = 0
export const addContactAction = (name, email) => ({
    type: 'ADD_CONTACT',
    id: nextContactId++,
    name,
    email
})

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
