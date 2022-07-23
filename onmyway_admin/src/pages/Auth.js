import React from 'react'
import logo from '../assets/logo.png'
import Input from '../components/Input'

export default function Auth() {
    console.log(logo)
    return (
        <div className='App'>
            <img src={logo} className='logo' />
            <form >
                <div>
                    <Input type={'text'} name={'username'} placeholder={'Username'} value={username} setValue={setUsername} />
                    <Input type={'password'} name={'passwordRegister'} placeholder={'Password'} value={password} setValue={setPassword} />
                    <Submit value={'Login'} run={handleRegister} />
                </div>
            </form>
        </div>
    )
}
