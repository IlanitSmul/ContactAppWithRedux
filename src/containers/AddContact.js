import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addContactAction } from '../actions'
import ContactForm from '../components/ContactForm';

class AddContact extends Component {

    handlerAdddContact = (name, email) => {
        this.props.addContact(name, email);
    }

    render() {

        let renderedForm = <p className="message">
            Unable to add new contact.<br />
            Please delete one of ypur contacts or increase the limit.</p>;
        if (this.props.contacts.canAdd) {
            renderedForm = <ContactForm handlerAddContact={this.handlerAdddContact} />;
        }

        return (
            <div className="bright-section mr-2 mb-3 px-3 py-2">
                <h2 className="pt-2 pb-2">Create Contact</h2 >
                {renderedForm}
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = disaptch => {
    return {
        addContact: (name, email) => { disaptch(addContactAction(name, email)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
