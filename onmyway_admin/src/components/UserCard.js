import React, { useState } from 'react'
import blank from '../assets/blank-profile.webp'
import moment from 'moment'
import BanIcon from '../assets/icons/BanIcon'
import ActivateIcon from '../assets/icons/ActivateIcon'
import { banUser, unbanUser } from '../controllers/userController'

export default function UserCard({ data }) {
    const [banned, setBanned] = useState(data.status == 'banned' ? true : false)

    const handleActivate = async () => {
        try {
            await unbanUser(data._id)
            setBanned(false)
        } catch (e) {
            console.log(e)
            data.status = 'banned'
        }
    }

    const handleBan = async () => {
        try {
            await banUser(data._id)
            setBanned(true)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='cardContainer'>
            <img src={data?.image?.url || blank} className='userImage' />
            <div className='infoContainer'>
                <div>
                    <div>{data.username}</div>
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                    <div>{data.gender}</div>
                    <div>{moment(data.dob).format('DD-MM-YYYY')}</div>
                </div>
                <div>
                    {
                        banned ?
                            <div onClick={handleActivate}>
                                <ActivateIcon />
                            </div>
                            :
                            <div onClick={handleBan}>
                                <BanIcon />
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
