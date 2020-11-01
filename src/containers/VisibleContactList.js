import { connect } from 'react-redux'
import { deleteContact } from '../actions'
import ContactList from '../components/ContactList'
import { VisibilityFilters } from '../actions'

const getVisibleContact = (todos) => {
    return todos
    // switch (filter) {
    //     case VisibilityFilters.SHOW_ALL:
    //         return todos
    //     case VisibilityFilters.SHOW_COMPLETED:
    //         return todos.filter(t => t.completed)
    //     case VisibilityFilters.SHOW_ACTIVE:
    //         return todos.filter(t => !t.completed)
    //     default:
    //         throw new Error('Unknown filter: ' + filter)
    // }
}

const mapStateToProps = state => ({
    contacts: getVisibleContact(state.contacts)
})

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(deleteContact(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList)
