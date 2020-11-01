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
                    <div className="row">
                        <div className="col-9">
                            <input type="number" value={this.state.limit}
                                onChange={(e) => this.handlerChangeContact(e.target.value)}
                                className="form-control" id="limit" placeholder="Enter limit" />
                        </div>
                        <div className="col-3 px-0">
                            <button type="submit" className="btn btn-primary">Set Limit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LimitForm;