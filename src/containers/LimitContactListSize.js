import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setLimitAction, clearLimitAction } from '../actions'
import LimitForm from '../components/LimitForm';

class LimitContractListSize extends Component {

    handlerSetLimit = (limit) => {
        this.props.setLimit(limit);
    }

    render() {
        return (
            <div className="dark-section mr-2 mb-3 px-3 py-2">

                <h2 className="pt-2 pb-3 mb-0">Set a limit on the number of contacts</h2>

                <p className="mb-2"><span className="message mr-1">Note: </span> If you choose to set the limit, then all extra contacts will be deleted</p>
                <LimitForm handlerSetLimit={this.handlerSetLimit} />

                <button type="submit" className="btn btn-primary mt-3 mb-2" onClick={this.props.clearLimit}>Remove Limit</button>

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
        setLimit: (limit) => { disaptch(setLimitAction(limit)); },
        clearLimit: () => { disaptch(clearLimitAction()); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LimitContractListSize);
