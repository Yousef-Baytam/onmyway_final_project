import React from 'react'
import blank from '../assets/blank-profile.webp'
import moment from 'moment'

export default function UserCard({ data }) {
    return (
        <div className='cardContainer'>
            <img src={data?.image?.url || blank} className='userImage' />
            <div>
                <div>
                    <div>{data.username}</div>
                    <div>{data.email}</div>
                    <div>{data.phone}</div>
                    <div>{data.gender}</div>
                    <div>{moment(data.dob).format('DD-MM-YYYY')}</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
