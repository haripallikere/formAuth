import React from 'react';
import Form from '../Form/Form';
import './form.css'


const Contact = (props) => {
    return (
        <div className="form">
            <Form 
            // handleSubmit={props.handleSubmit} 
            // handleChange={props.handleChange} 
            // value={props.value}
            // handleChange
            {...props}
            />
        </div>
    )
}

export default Contact;