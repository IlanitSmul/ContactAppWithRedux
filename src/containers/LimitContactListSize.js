import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setLimitAction, clearLimitAction } from '../actions'
import LimitForm from '../components/LimitForm';

class LimitContractListSize extends Component {

    handlerSetLimit = (limit) => {
        this.props.setLimit(limit);
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
                            <li><span className="bolder">contacts.debugRedux: </span>{(this.props.debugRedux.toString())}</li>
                        </ul>
                    </div>
                    <div className="redux-debugging-action py-1 px-2 my-0">
                        <span className="bolder">ACTIONS:</span>
                        <ul className="m-0">
                            <li><span className="bolder">setLimit(limit)</span></li>
                            <li><span className="bolder">clearLimit()</span></li>
                        </ul>
                    </div>
                </div>
        }

        return (
            <div className="dark-section mr-2 mb-3 px-3 py-2">

                <h2 className="pt-2 pb-3 mb-0">Set a limit on the number of contacts</h2>

                <p className="mb-2"><span className="message mr-1">Note: </span> If you choose to set the limit, then all extra contacts will be deleted</p>
                <LimitForm handlerSetLimit={this.handlerSetLimit} />

                <button type="submit" className="btn btn-primary mt-3 mb-2" onClick={this.props.clearLimit}>Remove Limit</button>

                {renderedReduxDebuggin}

            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        debugRedux: state.contacts.debugRedux
    }
};

const mapDispatchToProps = disaptch => {
    return {
        setLimit: (limit) => { disaptch(setLimitAction(limit)); },
        clearLimit: () => { disaptch(clearLimitAction()); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LimitContractListSize);
