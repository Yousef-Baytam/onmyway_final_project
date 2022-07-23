import React, { useEffect, useState } from 'react'
import { getUsers } from '../controllers/userController'
import Header from './Header'
import UserCard from './UserCard'

export default function AllUsers() {
    const [activeUsers, setActiveUsers] = useState([])
    const [bannedUsers, setBannedUsers] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        setData([...activeUsers, ...bannedUsers])
        console.log(data)
    }, [activeUsers])

    const handleGetUsers = async () => {
        try {
            const res = await getUsers()
            setActiveUsers(res.activeUsers)
            setBannedUsers(res.bannedUsers)
        } catch (e) {
            console.log(e)
        }
    }

    const renderUsers = () => {
        return data.map((i) => <div key={i._id}><UserCard data={i} /></div>)
    }

    useEffect(() => {
        handleGetUsers()
    }, [])

    return (
        <div>
            <Header title={'All Users'} />
            <div className='cardsContainer'>
                {activeUsers.length && renderUsers()}
            </div>
        </div>
    )
}
