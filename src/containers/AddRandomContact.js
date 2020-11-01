import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRandomContactAction } from '../actions'

class AddRandomContact extends Component {

    render() {
        return (
            <div>
                <button type="submit" className="btn btn-primary" onClick={this.props.addRandomContact}>Add Random Contact</button>
            </div>
        )
    }
}

const mapDispatchToProps = disaptch => {
    return {
        addRandomContact: () => { disaptch(addRandomContactAction()); }
    }
}

export default connect(null, mapDispatchToProps)(AddRandomContact);