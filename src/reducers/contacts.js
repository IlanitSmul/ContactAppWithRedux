const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log(action)
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    email: action.email,
                }
            ]

        case 'DELETE_CONTACT':
            return state.filter(contact => contact.id !== action.id)

        default:
            return state
    }
}

export default contacts
