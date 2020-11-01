const contacts = (state = [], action) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            console.log(action)
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                }
            ]

        case 'ADD_RANDOM_CONTACT':
            console.log(action)
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                }
            ]

        case 'DELETE_CONTACT':
            return state.filter(contact => contact.id !== action.id)

        default:
            return state
    }
}

export default contacts
