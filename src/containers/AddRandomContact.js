import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRandomContactAction } from '../actions'

class AddRandomContact extends Component {

    render() {

        let renderedButton = <p className="message">
            Unable to add new contact.<br />
            Please delete one of ypur contacts or increase the limit.</p>;
        if (this.props.canAdd) {
            renderedButton = <button type="submit" className="btn btn-primary mt-2 mb-3 px-3" onClick={this.props.addRandomContact}>Add New Random Contact</button>;
        }

        return (
            <div className="bright-section mr-2 mb-3 px-3 py-2">
                <h2 className="pt-2 pb-2">Create <span className="bolder">Random</span> Contact</h2 >
                {renderedButton}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        canAdd: state.contacts.canAdd
    }
};

const mapDispatchToProps = disaptch => {
    return {
        addRandomContact: () => { disaptch(addRandomContactAction()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRandomContact);