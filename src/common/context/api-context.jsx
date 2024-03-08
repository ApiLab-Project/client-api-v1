import {createContext, useState, useEffect} from 'react'

export const ApiContext = createContext()




export const ApiProvider = ({children})=>{


    const [token, setToken ] = useState(null)
    const [headerView, setHeaderView] = useState(1)
    const sendToken = (token)=>{
        if(!localStorage.getItem(token) ){
            localStorage.setItem('token', null)
            setToken(null)
        }else{
            setToken(localStorage.getItem(token))
        }
    }

    const isLogged = (token)=>{
        if(localStorage.getItem(token)=== null){
            setHeaderView(1)
        }else{
            setHeaderView(2)
        }
    }

    const handleLoggout =(token)=>{
        localStorage.setItem('token', null)
        setToken(localStorage.getItem(token))
        setHeaderView(1)
    }

    const contextValue = {
        sendToken,
        isLogged,
        token,
        handleLoggout,
        headerView
    }

    return(
    <ApiContext.Provider value={contextValue}>
        {children}
    </ApiContext.Provider>
)}