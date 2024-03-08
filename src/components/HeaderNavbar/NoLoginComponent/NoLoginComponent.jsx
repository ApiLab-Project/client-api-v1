// NoLoginComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleToSignIn, handleToSignUp } from '../../../router/coordinator';

export default function NoLoginComponent() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        handleToSignUp(navigate);
    };

    const handleSignInClick = () => {
        handleToSignIn(navigate);
    };

    return (
        <>
            <button onClick={handleSignUpClick} className=" m-auto p-3 h-[44px] rounded-xl hover:text-gray-700 bolder hover:bg-white shadow-sm hover:shadow-xl bg-indigo-600 transition-all text-white" >CADASTRO</button>
            <button onClick={handleSignInClick} className=" m-auto p-3 h-[44px] rounded-xl hover:text-gray-700 bolder hover:bg-white shadow-sm hover:shadow-xl bg-indigo-600 transition-all text-white" >LOGIN</button>
        </>
    );
}
