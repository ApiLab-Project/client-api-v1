import React from 'react';
import { handleToSignIn } from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';
import { HiUserCircle } from "react-icons/hi2";

export default function RegisterForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    handleToSignIn(navigate);
  };

  return (
    <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/3 bg-white p-4 rounded-xl shadow-xl">
      <div className="mb-1 flex flex-col gap-6 p-4">
        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
         Email do Usuario 
        </p>
        <div className="relative w-full min-w-[200px] h-11">
          <input
            placeholder="nome@email.com"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-indigo-600  !border-t-blue-gray-200 focus:!border-t-indigo-600"
          />
        </div>
        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
         Nome Completo
        </p>
        <div className="relative w-full min-w-[200px] h-11">
          <input
            placeholder="meu nome completo"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-indigo-600  !border-t-blue-gray-200 focus:!border-t-indigo-600"
          />
        </div>

        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
         Username
        </p>
        <div className="relative w-full min-w-[200px] h-11">
          <input
            placeholder="meu-username"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-indigo-600  !border-t-blue-gray-200 focus:!border-t-indigo-600"
          />
        </div>

        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 -mb-3 font-medium">
         Senha do Usuario
        </p>
        <div className="relative w-full min-w-[200px] h-11">
          <input
            placeholder="senha"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-indigo-600  !border-t-blue-gray-200 focus:!border-t-indigo-600"
          />
        </div>
      </div>
      <p className="block antialiased font-sans text-base leading-relaxed text-center text-blue-gray-500 font-medium mt-4">
       Ja tem Cadastro? Entao click para fazer o Login!
      </p>
      <button onClick={handleLogin} className="m-auto p-3 h-[44px] rounded-xl hover:text-gray-700 bolder hover:bg-white shadow-sm hover:shadow-xl bg-indigo-600 transition-all text-white">
          LOGIN
        </button>

    </form>
  );
}
