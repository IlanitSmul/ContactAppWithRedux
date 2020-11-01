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
            <div>
                <ContactForm handlerAddContact={this.handlerAdddContact} />
            </div>
        )
    }
}

const mapDispatchToProps = disaptch => {
    return {
        addContact: (name, email) => { disaptch(addContactAction(name, email)); }
    }
}

export default connect(null, mapDispatchToProps)(AddContact);
