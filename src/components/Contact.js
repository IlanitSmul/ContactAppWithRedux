import React from 'react'

const Contact = ({ onClick, name, email }) => (
    <li onClick={onClick} >
        <p>name: {name}, email: {email} </p>
    </li>
)

export default Contact
