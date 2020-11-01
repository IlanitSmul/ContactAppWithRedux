import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: {
                name: '',
                email: ''
            }
        }
    }

    handlerChangeContact = (property, value) => {
        let contact = this.state.contact;
        contact[property] = value;
        this.setState({
            contact
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();

        if (!this.state.contact.name) {
            return
        }

        this.props.handlerAddContact(this.state.contact.name, this.state.contact.email);

        e.target['name'].value = '';
        e.target['email'].value = '';

        this.setState({
            contact: {
                name: '',
                email: ''
            }
        })
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={this.state.contact.name}
                        onChange={(e) => this.handlerChangeContact('name', e.target.value)}
                        className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={this.state.contact.email}
                        onChange={(e) => this.handlerChangeContact('email', e.target.value)}
                        className="form-control" id="email" placeholder="Enter email" autoComplete="true" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default ContactForm;