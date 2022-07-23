import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavPannel from '../components/NavPannel'

export default function Pannel({ user }) {
    const navigate = useNavigate()

    useEffect(() => {
        !user && navigate('/')
    }, [])

    return (
        <div>
            <NavPannel />
        </div>
    )
}
