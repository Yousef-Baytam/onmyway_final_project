import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function AllUsers() {
    const [users, setUsers] = useState(null)

    const handleGetUsers = async () => {
        const res = await getUsers()
        console.log(res)
    }

    useEffect(() => {
        handleGetUsers()
    }, [])

    return (
        <div>
            <Header title={'All Users'} />

        </div>
    )
}
