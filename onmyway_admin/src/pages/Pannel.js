import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllUsers from '../components/AllUsers'
import NavPannel from '../components/NavPannel'
import Reports from '../components/Reports'

export default function Pannel({ user }) {
    const [focused, setFocused] = useState('users')
    const navigate = useNavigate()

    useEffect(() => {
        !user && navigate('/')
    }, [])

    return (
        <div>
            <NavPannel focused={focused} setFocused={setFocused} />
            {
                focused == 'users' ?
                    <AllUsers />
                    : focused == 'reports' ?
                        <Reports />
                        :
                        null
            }
        </div>
    )
}
