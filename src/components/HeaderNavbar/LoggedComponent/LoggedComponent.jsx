// LoggedComponent.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleToProfile, handleToSettings, handleToGame } from '../../../router/coordinator';
import { ApiContext } from '../../../common/context/api-context';

export default function LoggedComponent() {
    const navigate = useNavigate();
    const { handleLoggout } = useContext(ApiContext);

    const handleProfileClick = () => {
        handleToProfile(navigate);
    };

    const handleSettingsClick = () => {
        handleToSettings(navigate);
    };

    const handleGameClick = () => {
        handleToGame(navigate);
    };

    return (
        <>
            <button onClick={handleProfileClick} className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Profile</button>
            <button onClick={handleSettingsClick} className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Configuração</button>
            <button onClick={handleGameClick} className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Jogos</button>
            <button onClick={handleLoggout} className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Logout</button>
        </>
    );
}
