import React, {useState} from "react";

import { LoginForm } from "../../components/login/Login.comp";

import "./Entry.style.css";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry =() =>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [frmLoad, setFrmLoad] = useState("login");

const  handleOnChange = (e) =>{
    const{ name, value} = e.target;

    switch(name){
     case "email":
        setEmail(value)
        break;

        case "password":
        setPassword(value)
        break;

        default:
            break;
    }
    };
    const  handleOnSubmit= (e) =>{
        e.preventDefault();
        
        if (!email || !password ){
            return  alert("Please Enter Your details");
                    }

                    //TODO call api to submit the form
          console.log(email,password);          
    };
    const  handlOnResetSubmit= (e) =>{
        e.preventDefault();
        
        if (!email ){
            return  alert("Please Enter Your Email");
                    }

                    //TODO call api to submit the form
          console.log(email);          
    };
const formSwitcher = (frmType) =>{
    setFrmLoad(frmType);
}


    return ( 
    <div className="entry-page bg-info"> 
    <div className="p-5 mb-4 bg-light rounded-3 shadow">
        {frmLoad === "login" && (
    <LoginForm 
     handleOnChange = { handleOnChange}
     handleOnSubmit = { handleOnSubmit}
     formSwitcher = {formSwitcher}
    email={email}
    pass={password}
        />
    )}

         {frmLoad === 'rest' && (
             <ResetPassword
            handleOnChange = { handleOnChange}
            handlOnResetSubmit = { handlOnResetSubmit}
            formSwitcher = {formSwitcher}
           email={email}
           
        />
    )}
    </div>
    </div>
    );
};