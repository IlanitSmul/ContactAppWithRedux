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
                <div className="form-group row pr-3">
                    <label htmlFor="name" className="col-form-label col-3">
                        <i className="fas fa-user-alt pr-2"></i>Name</label>
                    <input type="text" className="form-control col-9" id="name" name="name" required
                        value={this.state.contact.name}
                        onChange={(e) => this.handlerChangeContact('name', e.target.value)} />
                </div>

                <div className="form-group row pr-3">
                    <label htmlFor="email" className="col-form-label col-3">
                        <i className="fas fa-at pr-2"></i>Email</label>
                    <input type="email" className="form-control col-9" id="email" name="email"
                        value={this.state.contact.email}
                        onChange={(e) => this.handlerChangeContact('email', e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary mt-2 mb-3 px-3">Add New Contact</button>
            </form>
        )
    }
}

export default ContactForm;