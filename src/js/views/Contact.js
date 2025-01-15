import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard";

const Contact = () => {

    const { store, actions } = useContext(Context)

    // useEffect(() => {
        
    // }, [])

    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/addContact">
                    <button className="btn btn-success">+Nuevo contacto</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.contactList && store.contactList.length > 0 && store.contactList.map((contact, index) => {
                    return (
                        <ContactCard contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default Contact;