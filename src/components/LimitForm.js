import React, { Component } from 'react';

class LimitForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: ''
        }
    }

    handlerChangeContact = (value) => {
        this.setState({
            limit: value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault()

        if (!this.state.limit) {
            return
        }

        this.props.handlerSetLimit(this.state.limit);

        e.target['limit'].value = '';

        this.setState({
            limit: ''
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlerSubmit} >
                    <input type="number" value={this.state.limit}
                        onChange={(e) => this.handlerChangeContact(e.target.value)}
                        className="form-control" id="limit" placeholder="Enter limit" />
                    <button type="submit" className="btn btn-primary">Set Limit</button>
                </form>
                <p>this will delete contacts that pass the limit</p>
            </div>

        )
    }
}

export default LimitForm;