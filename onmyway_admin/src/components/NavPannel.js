import React, { useState } from 'react'

export default function NavPannel() {
    const [focused, setFocused] = useState(null)
    return (
        <div className='pannelContainer'>
            <div>
                <div className={focused == 'users' ? 'focused' : 'pannelTab'}>
                    Users
                </div>
                <div className={focused == 'reports' ? 'focused' : 'pannelTab'}>
                    Reports
                </div>
            </div>
            <div className='pannelTab logout'>
                Logout
            </div>
        </div>
    )
}
