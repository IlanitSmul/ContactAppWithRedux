import React from 'react'

import './Contact.css';

const Contact = ({ onClick, index, contact }) => (
    < div className="col py-2 px-2 m-0" >
        <div className="card h-100 mx-0">
            <div className="card-body">
                <h5 className="card-title pb-2"><span>[#{index + 1}]</span>  {contact.name}</h5>
                <p className="card-text"><i className="fas fa-phone-alt pr-2"></i>{contact.phone}</p>
                <p className="card-text"><i className="fas fa-at pr-2"></i>{contact.email}</p>
                <p className="card-text"><i className="fas fa-map-marker-alt pr-2"></i>{contact.address}</p>
                <button className="btn btn-primary delete-contact-btn" onClick={onClick}>Delete</button>
            </div>
        </div>
    </div >

)

export default Contact
