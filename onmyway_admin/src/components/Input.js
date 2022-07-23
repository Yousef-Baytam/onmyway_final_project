import React from 'react'

export default function Input({ name, placeholder, type, value, setValue, noLabel }) {
    return (
        <div className='inputComp'>
            {!noLabel && <><label htmlFor={`${ name }`}>{placeholder}</label><br /></>}
            <input type={type} name={name} id={`${ name }`} placeholder={placeholder} value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
        </div>
    )
}

Input.defaultProps = {
    noLabel: false
}
