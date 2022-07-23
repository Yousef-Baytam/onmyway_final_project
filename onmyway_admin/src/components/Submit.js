import React from 'react'

export default function Submit({ value, run }) {
    return (
        <div className='action'>
            <input className='submit' type={'submit'} value={value} onClick={(e) => { e.preventDefault(); run() }} />
        </div>
    )
}
