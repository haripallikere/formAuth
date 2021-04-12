import React from 'react';
import '../userDataDisplay/userData.css';


const UserData = ({state}) => {
 const {name,address,email,phone} =  state;
    return(
        <div className='userData'>
             <h3>Name : <p>{name}</p></h3>
             <h4>Email : <p>{email}</p></h4>
             <h4>Phone : <p>{phone}</p></h4>
             <h4>Address : <p>{address}</p></h4>
        </div>
       
    )
   
}

export default UserData;