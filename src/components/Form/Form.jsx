import React from 'react';




const Form = ({value,handleChange,handleSubmit,handleClick}) => {
    const { name,email,password,phone,address, error ,toggle} = value;
    const fields = [name,email,password,phone,address];
    const toggleSubmitButton = fields.every(value => Boolean(value) === true);
    return (
        
        <>
        
          <div onSubmit={handleSubmit}>
                <p>Name:</p>
                <input 
                className={error.name ? "error" : 'input'} 
                name="name"type="text" value={name} 
                onChange={handleChange} 
                placeholder="Enter your name">
                </input>
                {error.name ? <span>Enter valid string</span> : ''}

                <p>Email:</p>
                <input  
                className={error.email ? "error" : 'input'} 
                name="email" 
                type="text" 
                value={email} 
                onChange={handleChange} 
                placeholder="Enter your email">
                </input>
                {error.email ? <span>Enter valid Mail ID</span> : ''}

                <p>Password:</p>
                <input 
                 className={error.password ? "error" : 'input'} 
                name="password" 
                type={toggle? 'password' : 'text'}
                value={password} 
                onChange={handleChange} 
                placeholder="Enter your password">
                </input>
                <input type='checkbox' onClick={handleClick}></input>Show/Hide
                {error.password ? <span>Input valid password</span> : ''}
                
                <p>Phone:</p>
                <input 
                 className={error.phone ? "error" : 'input'}  
                name="phone" 
                type="text" 
                value={phone} 
                onChange={handleChange} 
                placeholder="Enter your phone number">
                </input>
                {error.phone ? <span>Enter valid Number</span> : ''}

                <p>Adress:</p>
                <textarea  
                className={error.address ? "textareaError" : 'textarea'} 
                name="address" 
                value={address} 
                onChange={handleChange} 
                placeholder="Enter your address">
                </textarea>
                {error.address ? <span>Cannot be empty</span> : ''}
                {toggleSubmitButton ? 
                    <button className="submit" onClick={handleSubmit}>Submit</button>  : <button className="submit"> Submit</button>
            }
                
                
            </div>
        </>
    )
}

export default Form;