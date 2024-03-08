// HeaderNavbar.jsx
import React, { useContext } from 'react';
import { HeaderNavbarContainer } from './styled.HeaderNavbar';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../common/context/api-context';
import LoggedComponent from './LoggedComponent/LoggedComponent';
import NoLoginComponent from './NoLoginComponent/NoLoginComponent';
import { handleToHome } from '../../router/coordinator';

export function HeaderNavbar() {
    const navigate = useNavigate();
    const { headerView } = useContext(ApiContext);

    return (
        <HeaderNavbarContainer className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4  mx-6 shadow-soft-2xl rounded-blur bg-white/8 0backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
            <button className=" m-auto p-3 h-[44px] rounded-xl hover:text-gray-700 bolder hover:bg-white shadow-sm hover:shadow-xl bg-indigo-600 transition-all text-white" onClick={() => handleToHome(navigate)}>HOME</button>
            {headerView === 1 && <NoLoginComponent />}
            {headerView === 2 && <LoggedComponent />}
        </HeaderNavbarContainer>
    );
}
