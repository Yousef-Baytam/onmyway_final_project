import React from 'react'
import logo from '../assets/logo.png'
import Input from '../components/Input'

export default function Auth({ username, setUsername, password, setPassword }) {

    const handleLogin = async () => {
        null
    }

    return (
        <div className='App'>
            <img src={logo} className='logo' />
            <form >
                <div>
                    <Input type={'text'} name={'username'} placeholder={'Username'} value={username} setValue={setUsername} />
                    <Input type={'password'} name={'password'} placeholder={'Password'} value={password} setValue={setPassword} />
                    <Submit value={'Login'} run={handleLogin} />
                </div>
            </form>
        </div>
    )
}
