import React from 'react'

export default function Input({ name, placeholder, type, value, setValue }) {
    return (
        <div>
            <label htmlFor={`${ name }`}>{placeholder}</label><br />
            <input type={type} name={name} id={`${ name }`} placeholder={placeholder} value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
        </div>
    )
}
