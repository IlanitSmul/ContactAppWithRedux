import React from 'react'
import AddContact from '../containers/AddContact'
import AddRandomContact from '../containers/AddRandomContact'
import ContactList from '../containers/ContactList'
import LimitContactListSize from '../containers/LimitContactListSize'

import './App.css';

const App = () => (
    <div className="container">

        <div className="header my-4">
            <h1>Contact <span>list</span></h1>
        </div>

        <div className="row">

            <div className="col-5 p-0 m-0">
                <LimitContactListSize />
                <AddContact />
                <AddRandomContact />
            </div>

            <div className="col-7 p-0 m-0">
                <ContactList />
            </div>

        </div>

    </div>
)

export default App
