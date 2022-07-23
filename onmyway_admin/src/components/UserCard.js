import React from 'react'
import blank from '../assets/blank-profile.webp'
import moment from 'moment'
import BanIcon from '../assets/icons/BanIcon'
import ActivateIcon from '../assets/icons/ActivateIcon'

export default function UserCard({ data }) {
    const handleActivate = async () => {

    }

    const handleBan = async () => {

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
                        data.status == 'banned' ?
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
