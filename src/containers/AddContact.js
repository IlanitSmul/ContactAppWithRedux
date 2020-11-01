import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addContactAction } from '../actions'
import ContactForm from '../components/ContactForm';

class AddContact extends Component {

    handlerAdddContact = (contact) => {
        this.props.addContact(contact);
    }

    render() {

        // redux debugging
        let renderedReduxDebuggin = ''
        if (this.props.debugRedux) {
            renderedReduxDebuggin =
                <div>
                    <div className="redux-debugging-store py-1 px-2 my-0">
                        <span className="bolder">STORE:</span>
                        <ul className="m-0">
                            <li><span className="bolder">contacts.canAdd: </span>{(this.props.canAdd.toString())}</li>
                            <li><span className="bolder">contacts.debugRedux: </span>{(this.props.debugRedux.toString())}</li>
                        </ul>
                    </div>
                    <div className="redux-debugging-action py-1 px-2 my-0">
                        <span className="bolder">ACTIONS:</span>
                        <ul className="m-0">
                            <li><span className="bolder">addContact(contact)</span></li>
                        </ul>
                    </div>
                </div>
        }

        let renderedForm = <p className="message py-1 px-2">
            Unable to add new contact.<br />
            Please delete one of ypur contacts or increase the limit.</p>;
        if (this.props.canAdd) {
            renderedForm = <ContactForm handlerAddContact={this.handlerAdddContact} />;
        }

        return (
            <div className="bright-section mr-2 mb-3 px-3 py-2">
                <h2 className="pt-2 pb-2">Create Contact</h2 >
                {renderedForm}
                {renderedReduxDebuggin}
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        canAdd: state.contacts.canAdd,
        debugRedux: state.contacts.debugRedux
    }
};

const mapDispatchToProps = disaptch => {
    return {
        addContact: (contact) => { disaptch(addContactAction(contact)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
