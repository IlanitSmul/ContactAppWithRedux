import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRandomContactAction } from '../actions'

class AddRandomContact extends Component {

    render() {

        // redux debugging
        let renderedReduxDebuggin = ''
        if (this.props.debugRedux) {
            renderedReduxDebuggin =
                <div>
                    <p className="redux-debugging-store py-1 px-2 my-0">
                        <span className="bolder">STORE:</span>
                        <ul className="m-0">
                            <li><span className="bolder">contacts.canAdd: </span>{(this.props.canAdd.toString())}</li>
                            <li><span className="bolder">contacts.debugRedux: </span>{(this.props.debugRedux.toString())}</li>
                        </ul>
                    </p>
                    <p className="redux-debugging-action py-1 px-2 my-0">
                        <span className="bolder">ACTIONS:</span>
                        <ul className="m-0">
                            <li><span className="bolder">addRandomContact()</span></li>
                        </ul>
                    </p>
                </div>
        }

        let renderedButton = <p className="message py-1 px-2">
            Unable to add new contact.<br />
            Please delete one of ypur contacts or increase the limit.</p>;
        if (this.props.canAdd) {
            renderedButton = <button type="submit" className="btn btn-primary mt-2 mb-3 px-3" onClick={this.props.addRandomContact}>Add New Random Contact</button>;
        }

        return (
            <div className="bright-section mr-2 mb-3 px-3 py-2">
                <h2 className="pt-2 pb-2">Create <span className="bolder">Random</span> Contact</h2 >
                {renderedButton}
                {renderedReduxDebuggin}
            </div>
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
        addRandomContact: () => { disaptch(addRandomContactAction()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRandomContact);