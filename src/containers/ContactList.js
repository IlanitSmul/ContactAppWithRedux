import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteContact } from '../actions'
import Contact from '../components/Contact'

class ContactList extends Component {

    render() {

        // redux debugging
        let renderedReduxDebuggin = ''
        if (this.props.debugRedux) {
            renderedReduxDebuggin =
                <div>
                    <div className="redux-debugging-store py-1 px-2 my-0">
                        <span className="bolder">STORE:</span>
                        <ul className="m-0">
                            <li><span className="bolder">contacts.contactsArr: </span>{(this.props.contactsArr.toString())}</li>
                            <li><span className="bolder">contacts.limit: </span>{(this.props.limit)}</li>
                            <li><span className="bolder">contacts.debugRedux: </span>{(this.props.debugRedux.toString())}</li>
                        </ul>
                    </div>
                    <div className="redux-debugging-action py-1 px-2 my-0">
                        <span className="bolder">ACTIONS:</span>
                        <ul className="m-0">
                            <li><span className="bolder">deleteContact(id)</span></li>
                        </ul>
                    </div>
                </div>
        }

        let limitText = (this.props.limit < 0) ? 'undefine' : this.props.limit;

        let renderedList = <div id="list" className="row row-cols-2 card-deck">
            {this.props.contactsArr.map((contact, index) =>
                <Contact key={contact.id} index={index} contact={contact} onClick={() => this.props.deleteContact(contact.id)} />
            )}
        </div>

        if (this.props.contactsArr.length === 0) {
            renderedList = <p className="message py-1 px-2">You have no contacts</p>
        }

        return (
            <div className="middle-bright-section ml-2 px-3 py-2">
                <h2 className="pt-2 pb-2">Your Contacts <span className="smaller">(limit={limitText})</span></h2>
                {renderedList}
                {renderedReduxDebuggin}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        contactsArr: state.contacts.contactsArr,
        limit: state.contacts.limit,
        debugRedux: state.contacts.debugRedux
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: id => dispatch(deleteContact(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
