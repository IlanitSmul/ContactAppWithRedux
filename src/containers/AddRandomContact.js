import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRandomContactAction } from '../actions'

class AddRandomContact extends Component {

    render() {

        let form = <p>can't add</p>;
        if (this.props.contacts.canAdd) {
            form = <button type="submit" className="btn btn-primary" onClick={this.props.addRandomContact}>Add Random Contact</button>
                ;
        }

        return (
            <div>
                {form}
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
        addRandomContact: () => { disaptch(addRandomContactAction()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRandomContact);