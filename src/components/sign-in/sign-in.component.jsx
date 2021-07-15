import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'

import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email,password);

    }

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
          <div className="sign-in">
            <h2>I allready have an account</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
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
              <div className='buttons'>
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  Sign In With Google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;