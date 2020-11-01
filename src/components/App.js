import React from 'react'
import AddContact from '../containers/AddContact'
import AddRandomContact from '../containers/AddRandomContact'
import ContactList from '../containers/ContactList'
import LimitContactListSize from '../containers/LimitContactListSize'

const App = () => (
    <div>
        <LimitContactListSize />
        <AddContact />
        <AddRandomContact />
        <ContactList />
    </div>
)

export default App
