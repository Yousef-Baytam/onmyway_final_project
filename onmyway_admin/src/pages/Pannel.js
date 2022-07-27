import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllUsers from '../components/AllUsers'
import NavPannel from '../components/NavPannel'
import Reports from '../components/Reports'

export default function Pannel({ user, setUser }) {
    const [focused, setFocused] = useState('users')
    const [pannelExpanded, setPannelExpanded] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
        setUser(null)
    }

    useEffect(() => {
        !user && navigate('/')
    }, [])

    return (
        <div className='container'>
            <NavPannel focused={focused} setFocused={setFocused} handleLogout={handleLogout} />
            <div className='pannelWindow'>
                {
                    focused == 'users' ?
                        <AllUsers />
                        : focused == 'reports' ?
                            <Reports />
                            :
                            null
                }
            </div>
        </div>
    )
}
