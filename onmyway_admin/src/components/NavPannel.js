import React, { useState } from 'react'
import logo from '../assets/logo.png'

export default function NavPannel({ focused, setFocused, handleLogout }) {
    return (
        <div className='pannelContainer'>
            <div>
                <img src={logo} className='logoPannel' />
                <div className={`pannelTab ${ focused == 'users' && 'focused' }`} onClick={() => setFocused('users')}>
                    Users
                </div>
                <div className={`pannelTab ${ focused == 'reports' && 'focused' }`} onClick={() => setFocused('reports')}>
                    Reports
                </div>
            </div>
            <div className='pannelTab logout' onClick={handleLogout}>
                Logout
            </div>
        </div>
    )
}
