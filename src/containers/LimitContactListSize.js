import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setLimitAction, clearLimitAction } from '../actions'
import LimitForm from '../components/LimitForm';

class LimitContractListSize extends Component {

    handlerSetLimit = (limit) => {
        this.props.setLimit(limit);
    }

    render() {
        console.log(this.props)
        return (
            < div >
                <LimitForm handlerSetLimit={this.handlerSetLimit} />
                <button type="submit" className="btn btn-primary" onClick={this.props.clearLimit}>Remove Limit</button>
                <p>limit is {this.props.contacts.limit}</p>

            </div >
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
        setLimit: (limit) => { disaptch(setLimitAction(limit)); },
        clearLimit: () => { disaptch(clearLimitAction()); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LimitContractListSize);
