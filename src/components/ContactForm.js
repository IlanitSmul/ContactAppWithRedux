import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: {
                name: '',
                email: '',
                phone: '',
                address: '',
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

        this.props.handlerAddContact(this.state.contact);

        e.target['name'].value = '';
        e.target['email'].value = '';
        e.target['phone'].value = '';
        e.target['address'].value = '';

        this.setState({
            contact: {
                name: '',
                email: '',
                phone: '',
                address: '',
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

                <div className="form-group row pr-3">
                    <label htmlFor="phone" className="col-form-label col-3">
                        <i className="fas fa-phone-alt pr-2"></i>Phone</label>
                    <input type="text" className="form-control col-9" id="phone" name="phone"
                        value={this.state.contact.phone}
                        onChange={(e) => this.handlerChangeContact('phone', e.target.value)} />
                </div>

                <div className="form-group row pr-3">
                    <label htmlFor="address" className="col-form-label col-3">
                        <i className="fas fa-map-marker-alt pr-2"></i>Address</label>
                    <input type="text" className="form-control col-9" id="address" name="address"
                        value={this.state.contact.address}
                        onChange={(e) => this.handlerChangeContact('address', e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary mt-2 mb-3 px-3">Add New Contact</button>
            </form>
        )
    }
}

export default ContactForm;