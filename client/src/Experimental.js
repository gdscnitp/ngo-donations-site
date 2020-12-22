import React, { useState, useRef } from "react";

export default function(props) {
    const [contact, setContact] = useState( sessionStorage.getItem("email") || "");
    const [password, setPassword] = useState( sessionStorage.getItem("pass") || "");

    const contactField = useRef(null);
    const passField = useRef(null);
    const checkRef = useRef(null);

    function submitHandler(e) {
        e.preventDefault();
        // setEvent(e);

        let form = e.target;
        const formData = {};
        form.childNodes.forEach((tag) => { if ( !!tag.name ) formData[tag.name] = tag.value; } ) // childNodes is a NodeList, not a simple array, so doesn't have array methods like map etc

        for (const key in formData) {
            sessionStorage.setItem(key, formData[key]);
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" ref={contactField} value={contact} name="email" onChange={()=>setContact(contactField.current.value)} placeholder="Enter username" />
                <input type="text" ref={passField} value={password} name="pass" onChange={()=>setPassword(passField.current.value)} placeholder="Enter password" />
                <input ref={checkRef} onChange={()=>console.log(checkRef.current.checked)} type="checkbox" required></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}