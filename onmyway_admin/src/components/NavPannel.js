import React, { useState } from 'react'

export default function NavPannel({ focused, setFocused }) {
    return (
        <div className='pannelContainer'>
            <div>
                <div className={`pannelTab ${ focused == 'users' && 'focused' }`} onClick={() => setFocused('users')}>
                    Users
                </div>
                <div className={`pannelTab ${ focused == 'reports' && 'focused' }`} onClick={() => setFocused('reports')}>
                    Reports
                </div>
            </div>
            <div className='pannelTab logout'>
                Logout
            </div>
        </div>
    )
}
