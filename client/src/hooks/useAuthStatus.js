import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loadingStatus, setLoadingStatus] = useState(true)

    const { user } = useSelector((state) => state.auth)

    useEffect(()=>{

       user ? setLoggedIn(true): setLoggedIn(false)  
       setLoadingStatus(false)

    },[user])

    return { loggedIn, loadingStatus }

}