import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Pannel({ user }) {
    const navigate = useNavigate()

    useEffect(() => {
        !user && navigate('/')
    }, [])

    return (
        <div>Pannel</div>
    )
}
