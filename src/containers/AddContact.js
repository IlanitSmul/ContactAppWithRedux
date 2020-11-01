import React from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

const AddContact = ({ dispatch }) => {
    let input
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addContact(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    )
}

export default connect()(AddContact)
