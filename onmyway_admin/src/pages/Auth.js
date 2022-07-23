import React from 'react'
import logo from '../assets/logo.png'
import Input from '../components/Input'
import Submit from '../components/Submit'
import { login } from '../controllers/userController'

export default function Auth({ username, setUsername, password, setPassword, setUser, setToken }) {

    const handleLogin = async () => {
        try {
            const res = await login({ username, password })
            setUser(res.user)
            setToken(res.token.toekn)
            localStorage.setItem('token', res.token.token)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='App'>
            <img src={logo} className='logo' />
            <form className='authForm'>
                <div className='formData'>
                    <Input type={'text'} name={'username'} placeholder={'Username'} value={username} setValue={setUsername} />
                    <Input type={'password'} name={'password'} placeholder={'Password'} value={password} setValue={setPassword} />
                    <Submit value={'Login'} run={handleLogin} />
                </div>
            </form>
        </div>
    )
}
