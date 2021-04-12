import React, { Component } from 'react'
import './App.css';
import Contact from './components/Contact/Contact';
import UserData from './components/userDataDisplay/userData';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      toggle: true,
      name:'',
      email:'',
      password:'',
      phone:'',
      address:'',
      shouldDisplayUserData: false,
      error: {
        name:false,
        email:false,
        password:false,
        phone:false,
        address: false
      }
    }
  }



 validatefield = () => {
  const nameRegEx = new RegExp(/^[a-zA-Z ]{2,30}$/);
  const phoneRegEx = new RegExp(/^[1-9]\d{9}$|^[1-9]\d{9}$/g);
  const emailRegEx = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  const passwordRegEx = new RegExp(/^[#\w@_-]{8,20}$/);
  const AdressRegEx = new RegExp(/^[A-Za-z0-9'\.\-\s\,]/);
  const error = {
    name:false,
    email:false,
    password:false,
    phone:false,
    address: false
  }
  for (const field in error) {
    switch (field) {
      case'name':
      error.name = !nameRegEx.test(this.state.name);
      break;
      case 'email':
        error.email = !emailRegEx.test(this.state.email);
      break;
      case 'password':
        error.password = !passwordRegEx.test(this.state.password);
        break;
      case 'phone':
        error.phone = !phoneRegEx.test(this.state.phone);
        break;
      case 'address':
        error.address = !AdressRegEx.test(this.state.address);
    }
  }

  const isFalse = Object.values(error).some(value => value === true )
  this.setState({error:error, shouldDisplayUserData: !isFalse });
 }

  handleChange = (e) => {
    let user = e.target.name;
    let userInput = e.target.value;
    this.setState({[user] : userInput,
     error : {
       ...this.state.error,
      [user]: this.state.error.user
     }
    })
  }

  handleSubmit = (e) => {
    this.validatefield();
  }

  handleClick = (e) => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    
    const {shouldDisplayUserData} = this.state;
    return(
      <>
        <div className="App">
          {shouldDisplayUserData ? <UserData state={this.state}/> : <Contact 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
            value={this.state}
            handleClick={this.handleClick}
        /> }
        </div>
      </>
    );
  }  
}

export default App;
