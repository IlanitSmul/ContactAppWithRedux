import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteContact } from '../actions'
import Contact from '../components/Contact'

class ContactList extends Component {

    render() {

        let limitText = (this.props.limit < 0) ? 'undefine' : this.props.limit;

        let renderedList = <div id="list" className="row row-cols-2 card-deck">
            {this.props.contactsArr.map((contact, index) =>
                <Contact key={contact.id} index={index} contact={contact} onClick={() => this.props.deleteContact(contact.id)} />
            )}
        </div>

        if (this.props.contactsArr.length === 0) {
            renderedList = <p className="message mb-3 py-1 pl-3 mr-2">You have no contacts</p>
        }

        return (
            <div className="middle-bright-section ml-2 px-3 py-2">
                <h2 className="pt-2 pb-2">Your Contacts <span className="smaller">(limit={limitText})</span></h2>
                {renderedList}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        contactsArr: state.contacts.contactsArr,
        limit: state.contacts.limit,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: id => dispatch(deleteContact(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
