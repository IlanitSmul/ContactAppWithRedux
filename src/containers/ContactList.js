import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteContact } from '../actions'
import Contact from '../components/Contact'

class ContactList extends Component {

    render() {
        return (
            <ul>
                {this.props.contacts.map(contact =>
                    <Contact key={contact.id} {...contact} onClick={() => this.props.deleteContact(contact.id)} />
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: id => dispatch(deleteContact(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
