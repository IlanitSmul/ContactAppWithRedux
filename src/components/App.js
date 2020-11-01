import React from 'react'
import AddContact from '../containers/AddContact'
import AddRandomContact from '../containers/AddRandomContact'
import ContactList from '../containers/ContactList'

const App = () => (
    <div>
        <AddContact />
        <AddRandomContact />
        <ContactList />
    </div>
)

export default App
