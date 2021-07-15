import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state ={
          displayName: '',
          email: '',
          password: '',
          confirmPassword:'',
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
          alert("passwords don't match");
          return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({
              displayName: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
        }
        catch(error){
            console.error(error);
        }

    };

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
          <div className="sign-up">
            <h2 className="title">I don't have a account</h2>
            <span> Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={this.state.displayName}
                handleChange={this.handleChange}
                required
                label="display name"
              />
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                required
                label="email"
              />
              <FormInput
                type="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                required
                label="password"
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                handleChange={this.handleChange}
                required
                label="confirm password"
              />
              <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUp;