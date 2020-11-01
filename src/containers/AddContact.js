import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addContactAction } from '../actions'
import ContactForm from '../components/ContactForm';

class AddContact extends Component {

    handlerAdddContact = (name, email) => {
        this.props.addContact(name, email);
    }

    render() {
        return (
            <div className="add-contact">
                <ContactForm handlerAddContact={this.handlerAdddContact} />
            </div>
        )
    }
}

const mapDispatchToProps = disaptch => {
    return {
        addContact: (name, email) => {
            disaptch(addContactAction(name, email));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddContact);

// const AddContact = ({ dispatch }) => {

//     let input
//     return (
//         <div>
//             <form onSubmit={e => {
//                 e.preventDefault()
//                 if (!input.value.trim()) {
//                     return
//                 }
//                 dispatch(addContact(input.value))
//                 input.value = ''
//             }}>
//                 <input ref={node => input = node} />
//                 <button type="submit">Add Contact</button>
//             </form>
//         </div>
//     )
// }

// export default connect()(AddContact)
