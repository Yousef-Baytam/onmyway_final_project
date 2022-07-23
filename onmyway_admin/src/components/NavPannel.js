import React, { useState } from 'react'

export default function NavPannel() {
    const [focused, setFocused] = useState('users')
    return (
        <div className='pannelContainer'>
            <div>
                <div className={`pannelTab ${ focused == 'users' && 'focused' }`}>
                    Users
                </div>
                <div className={`pannelTab ${ focused == 'reports' && 'focused' }`}>
                    Reports
                </div>
            </div>
            <div className='pannelTab logout'>
                Logout
            </div>
        </div>
    )
}
