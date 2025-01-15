import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = (evt) => {
        evt.preventDefault();
        //console.log(name,email, phone, address);
        const contact = {
            name: name,
            email: email,
            phone: phone,
            address: address
        }
        actions.addContact(contact, navigate)
    }

    return (
        <div className="container">
    
            <form className="container" onSubmit={handleClick}>
    
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} required />
    
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Phone number" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
    
            <Link to="/">Volver a Contactos</Link>
        </div>
    );
};