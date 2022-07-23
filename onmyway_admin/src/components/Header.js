import React, { useState } from 'react'
import Input from './Input'

export default function Header({ title, search, setSearch }) {
    return (
        <div className='haderContainer'>
            <div className='title'>
                {title}
            </div>
            <div className='filterContainer'>
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
