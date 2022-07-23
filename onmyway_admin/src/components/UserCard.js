import React from 'react'
import blank from '../assets/blank-profile.webp'

export default function UserCard({ data }) {
    return (
        <div>
            <img src={data?.image?.url || blank} className='userImage' />
            <div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
