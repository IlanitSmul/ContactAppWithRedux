import React, { Component } from 'react';
import { connect } from 'react-redux'
import { disableReduxDebuggerAction, enableReduxDebuggerAction } from '../actions'

class ReduxDebugger extends Component {

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
                            <li><span className="bolder">disableReduxDebugger()</span></li>
                            <li><span className="bolder">enableReduxDebugger()</span></li>
                        </ul>
                    </div>
                </div>
        }

        let renderedButton = '';
        if (this.props.debugRedux) {
            renderedButton =
                <button type="submit" className="btn btn-primary yellow-btn" onClick={this.props.disableReduxDebugger}>
                    Disable Redux Debugger
                </button>;
        } else {
            renderedButton =
                <button type="submit" className="btn btn-primary yellow-btn" onClick={this.props.enableReduxDebugger}>
                    Enable Redux Debugger
            </button>;
        }

        return (
            <div>
                {renderedButton}
                {renderedReduxDebuggin}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        debugRedux: state.contacts.debugRedux,
    }
};

const mapDispatchToProps = disaptch => {
    return {
        disableReduxDebugger: () => { disaptch(disableReduxDebuggerAction()); },
        enableReduxDebugger: () => { disaptch(enableReduxDebuggerAction()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDebugger);