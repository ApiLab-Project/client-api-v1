import img05Notebook from './../../assets/images/img05Notebook.svg'
import HeroSupporters from './HeroSupporters/HeroSupporters';
import {handleToSignUp, handleToSignIn} from '../../router/coordinator'
import {useNavigate} from 'react-router-dom'
export default function Hero() {
     const navigate = useNavigate()
  
  return (
    <div className="h-100 container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-2 lg:flex-row xl:px-0">
      <div className="z-30 flex flex-col items-center w-full max-w-xl pt-40 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
        <h2 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
          Lab-API-Br
        </h2>
        <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
          Você está pronto para jogar e aprender Microbiologia, Imunologia e Vacinas para seu Vestibular?
          <br/>
          Cadastre-se gratis e faça o login para começar a detonar!
        </p>
        <div className="flex">
        <button onClick={()=>{handleToSignUp(navigate)}} className="relative self-start inline-block w-auto px-8 mr-2 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0 lg:mr-2">
          Cadastrar
        </button>
        <button onClick={()=>{handleToSignIn(navigate)}} className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">
          Login
        </button>
        </div>
        <div className="flex-col hidden mt-8 sm:flex lg:mt-12">
          <div className="flex">
           <HeroSupporters/>
          </div>
        </div>
      </div>
      <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
        <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
          <img src={img05Notebook} className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-20 lg:h-md lg:-ml-12"/>
        </div>
      </div>
    </div>
  );
}
