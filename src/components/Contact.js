import React from 'react'

import './Contact.css';

const Contact = ({ onClick, index, name, email }) => (

    <div className="col py-2 px-2 m-0"  >
        <div className="card h-100 mx-0">
            <div className="card-body">
                <h5 className="card-title pb-1"><span>[#{index + 1}]</span> {name}</h5>
                <p className="card-text"><i className="fas fa-phone-alt pr-1"></i> 052-11111111</p>
                <p className="card-text"><i className="fas fa-at pr-1"></i> {email}</p>
                <p className="card-text"><i className="fas fa-map-marker-alt pr-1"></i> my address...</p>
                <button className="btn btn-primary delete-contact-btn" onClick={onClick}>Delete</button>
            </div>
        </div>
    </div>

)

export default Contact
