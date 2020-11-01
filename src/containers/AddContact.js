import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addContactAction } from '../actions'
import ContactForm from '../components/ContactForm';

class AddContact extends Component {

    handlerAdddContact = (name, email) => {
        this.props.addContact(name, email);
    }


    render() {

        let form = <p>can't add</p>;
        if (this.props.contacts.canAdd) {
            form = <ContactForm handlerAddContact={this.handlerAdddContact} />;
        }

        return (
            <div>
                {form}
                {/* <ContactForm handlerAddContact={this.handlerAdddContact} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => { // todo:delete
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
