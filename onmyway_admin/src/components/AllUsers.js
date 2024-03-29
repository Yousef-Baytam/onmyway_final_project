import React, { useEffect, useState } from 'react'
import { getUsers } from '../controllers/userController'
import Header from './Header'
import UserCard from './UserCard'

export default function AllUsers() {
    const [activeUsers, setActiveUsers] = useState([])
    const [bannedUsers, setBannedUsers] = useState([])
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [items, setItems] = useState(['None', 'Active', 'Banned'])
    const [filter, setFilter] = useState('None')
    const [userEditTrigger, setUserEditTrigger] = useState(false)

    useEffect(() => {
        setData([...activeUsers, ...bannedUsers])
    }, [activeUsers])

    useEffect(() => {
        setData([...activeUsers, ...bannedUsers].filter((e) => (e.username.toLowerCase().includes(search) || e.email.toLowerCase().includes(search))))
    }, [search])

    useEffect(() => {
        if (filter != 'None')
            setData([...activeUsers, ...bannedUsers].filter((i) => i.status === filter.toLowerCase()))
        else {
            setData([...activeUsers, ...bannedUsers])
        }
    }, [filter])

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
        return data.map((i) => <div key={i._id}><UserCard data={i} setTrigger={setUserEditTrigger} trigger={userEditTrigger} /></div>)
    }

    useEffect(() => {
        handleGetUsers()
        console.log('hello')
    }, [userEditTrigger])

    return (
        <div>
            <Header title={'All Users'} search={search} setSearch={setSearch} items={items} dropdown={filter} setDropdown={setFilter} />
            <div className='cardsContainer'>
                {activeUsers.length && renderUsers()}
            </div>
        </div>
    )
}
