import React, { useState } from 'react'
import Input from './Input'

export default function Header({ title, search, setSearch, items, setDropdown, dropdown }) {
    return (
        <div className='haderContainer'>
            <div className='title'>
                {title}
            </div>
            <div className='filterContainer'>
                <div>
                    <select onChange={(e) => setDropdown(e.target.value)} defaultValue={dropdown}>
                        {items.map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                </div>
                <div>
                    <Input name={search} placeholder={'Search'} type={'text'} value={search} setValue={setSearch} noLabel={true} />
                </div>
            </div>
        </div>
    )
}
