import React, { useState } from 'react'
import Input from './Input'

export default function Header({ title }) {
    const [search, setSearch] = useState('')
    return (
        <div className='haderContainer'>
            <div>
                {title}
            </div>
            <div>
                <div>
                    <select>
                        <option />
                    </select>
                </div>
                <div>
                    <Input name={search} placeholder={'Search'} type={'text'} value={search} setValue={setSearch} noLabel={true} />
                </div>
            </div>
        </div>
    )
}
