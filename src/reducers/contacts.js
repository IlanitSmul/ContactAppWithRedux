const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case 'DELETE_CONTACT':
            return state.filter(contact => contact.id !== action.id)

        default:
            return state
    }
}

export default contacts
